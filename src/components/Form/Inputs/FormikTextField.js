import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Container, ErrorMessage } from './FormikTextField.styles';

const renderErrorMessage = (errorMessage) => {
  return (
    <ErrorMessage>{errorMessage}</ErrorMessage>
  );
}

const FormikTextField = (args) => {
  console.log('args', args,)
  const { field, form, ...props } = args;
  const { touched, errors } = form;
  const { name } = field;

  const hasError= touched[name] && errors[name];

  return (
    <Container>
      <TextField type="text" error={hasError} {...field} {...props} />
      { hasError ? renderErrorMessage(errors[name]) : null }
    </Container>
  );
}

export default FormikTextField
