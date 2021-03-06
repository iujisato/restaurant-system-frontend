import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fetcher from '../../../utils/fetcher';
import LoadingSpinner from '../../utils/LoadingSpinner';
import MultipleSelect from '../../Form/AutoComplete/MultipleSelect';
import DataParser from './DataParser';
import SearchButton from '../../Form/Buttons/SearchButton';
import CreateButton from '../../Form/Buttons/CreateButton';
import FormDialog from '../../Form/Dialogs/FormDialog';
import CreateForm from './Create.form';
import CreateSchema from './Create.schema';
import { Container, SearchBarContainer, SearchBarWrapper, ActionsContainer } from './FilterArea.styles';

class FilterArea extends Component {
  state =  {
    isFetching: true,
    suggestions: [],
    selectedOptions: [],
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

  handleChange(selectedOptions) {
    this.setState({ selectedOptions });
  }

  handleSubmit() {
    const { callback } = this.props;
    const { selectedOptions } = this.state;

    callback(selectedOptions);
  }

  renderLoading() {
    return <LoadingSpinner />
  }

  renderComponent() {
    const { suggestions } = this.state;

    const fetcherObject = {
      method: 'POST',
      path: `v1/restaurants`,
    }

    const options = {
      initialValues: { name: '' },
      title: 'Create restaurant'
    }

    return (
      <Container>
        <SearchBarContainer>
          <SearchBarWrapper>
            <MultipleSelect suggestions={suggestions} callback={this.handleChange.bind(this)}/>
          </SearchBarWrapper>
        </SearchBarContainer>

        <ActionsContainer>
          <SearchButton onClick={this.handleSubmit.bind(this)}/>

          <FormDialog
            form={CreateForm}
            fetcherObject={fetcherObject}
            options={options}
            schema={CreateSchema}
            button={CreateButton}
          />
        </ActionsContainer>
      </Container>
    )
  }

  render() {
    const { isFetching } = this.state;

    return (
      <div>
        { isFetching ? this.renderLoading() : this.renderComponent() }
      </div>
    )
  }
}

FilterArea.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default FilterArea;
