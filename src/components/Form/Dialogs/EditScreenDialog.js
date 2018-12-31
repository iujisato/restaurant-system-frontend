import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { styles } from './EditScreenDialog.styles'
import EditButton from '../Buttons/EditButton';
import FormikTextField from '../Inputs/FormikTextField';
import { EditScreenDialogSchema } from '../ValidationSchemas/EditSchema.yup';
import SubmitButton from '../Buttons/SubmitButton';
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

  handleSubmitClick = () => {
  }

  render() {
    const { classes, data } = this.props;
    return (
      <div>
        <EditButton onClick={this.handleClickOpen} />
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
                Editing {data.name}
              </Typography>
            </Toolbar>
          </AppBar>

          <Formik
            initialValues={data}
            validationSchema={EditScreenDialogSchema}
            onSubmit={ async (values, actions) => {
              const { id } = data;
              const dataObject = {
                method: 'PATCH',
                path: `v1/restaurants/${id}`,
                body: values,
              }

              const instance = new Fetcher(dataObject);
              const response = await instance.request();

              actions.setSubmitting(false);

              if (response.error) {
                actions.setErrors(response.data.response.data)
                return;
              }

              window.location.reload();
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <Form>
                <Field name="name" required label="Name" component={FormikTextField} />
                <ErrorMessage name="email" component="div" />
                {status && status.msg && <div>{status.msg}</div>}
                <SubmitButton loading={isSubmitting} />
              </Form>
            )}
          />
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
