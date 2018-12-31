import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { styles, FormikContainer } from './FormDialog.styles'
import Fetcher from '../../../utils/fetcher';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, schema, fetcherObject, options } = this.props;
    const CreateForm = this.props.form;
    const Button = this.props.button;

    return (
      <div>
        <Button title={options.buttonTitle} onClick={this.handleClickOpen} />

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>

              <Typography variant="h6" color="inherit" className={classes.flex}>
                {options.title}
              </Typography>
            </Toolbar>
          </AppBar>

          <FormikContainer>
            <Formik
              initialValues={options.initialValues}
              validationSchema={schema}
              onSubmit={ async (values, actions) => {
                fetcherObject.body = values;

                const instance = new Fetcher(fetcherObject);
                const response = await instance.request();

                actions.setSubmitting(false);

                if (response.error) {
                  actions.setErrors(response.data.response.data)
                  return;
                }

                window.location.reload();
              }}
              render={(actions) => {
                const { isSubmitting } = actions;

                return (
                  <CreateForm loading={isSubmitting} actions={actions} />
                )
              } }
            />
          </FormikContainer>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  fetcherObject: PropTypes.object.isRequired,
  options: PropTypes.shape({
    initialValues: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    buttonMessage: PropTypes.string,
  }),
  button: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
