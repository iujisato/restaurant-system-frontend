import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteButton from '../Buttons/DeleteButton';
import PropTypes from 'prop-types';
import Fetcher from '../../../utils/fetcher';

class AlertDialog extends React.Component {
  initialState = {
    open: false,
    loading: false,
  }

  state = this.initialState;

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState(this.initialState);
  };

  handleSubmit = async () => {
    this.setState({ loading: true });

    const { submitFunction } = this.props;

    if (submitFunction instanceof Fetcher) {
      await submitFunction.request();
    } else {
      submitFunction();
    }

    window.location.reload();
  }

  renderDialog() {
    const { title, content } = this.props;

    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          { title ? title : 'Are you sure you want to delete this record?' }
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          { content ? content : 'This action can not be reversed' }
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Disagree
          </Button>

          <Button onClick={this.handleSubmit} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  render() {
    return (
      <div>
        <DeleteButton onClick={this.handleClickOpen} />

        { this.renderDialog() }

      </div>
    );
  }
}

AlertDialog.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  submitFunction: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Fetcher),
  ]).isRequired,
}

export default AlertDialog;
