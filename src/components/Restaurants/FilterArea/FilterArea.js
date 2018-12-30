import React, { Component } from 'react';
import Fetcher from '../../../utils/fetcher';
import LoadingSpinner from '../../utils/LoadingSpinner';
import MultipleSelect from '../../Form/AutoComplete/MultipleSelect';
import DataParser from './DataParser';

class FilterArea extends Component {
  state =  {
    isFetching: true,
    suggestions: [],
  }

  async componentWillMount() {
    const dataObject = {
      method: 'GET',
      path: 'v1/restaurants',
    }

    const instance = new Fetcher(dataObject);

    const response = await instance.request();
    const parsedResponse = new DataParser(response).parse();
    console.log('parsed', parsedResponse)

    if (!response.error) {
      this.setState({
        isFetching: false,
        suggestions: parsedResponse,
      })
    }
  }

  renderLoading() {
    return <LoadingSpinner />
  }

  renderComponent() {
    const { suggestions } = this.state;

    return <MultipleSelect suggestions={suggestions}/>
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

export default FilterArea;
