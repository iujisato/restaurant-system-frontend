import React, { Component } from 'react';
import { Field, Form } from 'formik';
import SubmitButton from '../../Form/Buttons/SubmitButton';
import FormikTextField from '../../Form/Inputs/FormikTextField';
import SingleSelect from '../../Form/AutoComplete/SingleSelect';
import Fetcher from '../../../utils/fetcher';
import DataParser from '../../Restaurants/FilterArea/DataParser';
import { InputContainer, ActionsContainer } from './Create.form.styles';

class CreateForm extends Component {
  state =  {
    isFetching: true,
    suggestions: [],
  }

  handleCallback = (selectedOption) => {
    const { setFieldValue } = this.props.actions;

    setFieldValue('restaurant_id', selectedOption.value);
  }

  async componentWillMount() {
    const dataObject = {
      method: 'GET',
      path: 'v1/restaurants',
    }

    const instance = new Fetcher(dataObject);

    const response = await instance.request();
    const parsedResponse = new DataParser(response).parse();

    if (!response.error) {
      this.setState({
        isFetching: false,
        suggestions: parsedResponse,
      })
    }
  }


  render() {
    const { isSubmitting } = this.props;

    return(
      <Form>
        <InputContainer>
          <SingleSelect
            suggestions={this.state.suggestions}
            callback={this.handleCallback.bind(this)}
          />
        </InputContainer>

        <InputContainer>
          <Field name="name" required label="Name" component={FormikTextField} />
        </InputContainer>

        <InputContainer>
        <Field name="price_in_cents" required label="Price" component={FormikTextField} />
        </InputContainer>

        <ActionsContainer>
          <SubmitButton loading={isSubmitting} />
        </ActionsContainer>
      </Form>
    )
  }
}

export default CreateForm;

