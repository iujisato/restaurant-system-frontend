import React from 'react';
import { Field, Form } from 'formik';
import SubmitButton from '../../Form/Buttons/SubmitButton';
import FormikTextField from '../../Form/Inputs/FormikTextField';
import { ActionsContainer } from './Create.form.styles';

export const CreateForm = (props) => {
  const { isSubmitting } = props;

  return(
    <Form>
      <Field name="name" required label="Name" component={FormikTextField} />

      <ActionsContainer>
        <SubmitButton loading={isSubmitting} />
        </ActionsContainer>
    </Form>
  )
}

export default CreateForm;
