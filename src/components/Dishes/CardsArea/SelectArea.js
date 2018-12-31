import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fetcher from '../../../utils/fetcher';
import LoadingSpinner from '../../utils/LoadingSpinner';
import MultipleSelect from '../../Form/AutoComplete/MultipleSelect';
import DataParser from './DataParser';

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
      <div>
        <SearchButton onClick={this.handleSubmit.bind(this)}/>
        <FormDialog
          form={CreateForm}
          fetcherObject={fetcherObject}
          options={options}
          schema={CreateSchema}
          button={CreateButton}
        />
      </div>
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
