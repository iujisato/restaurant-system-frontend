import React, { Component } from 'react';
import Card from './Card';
import { Content } from './CardsArea.styles';
import Fetcher from '../../../utils/fetcher';

class CardsArea extends Component {
  state = {
    data: [],
  }

  componentDidUpdate(prevProps) {
    if (this.props.data === prevProps.data) {
      return;
    }

    this.requestData();
  }

  renderCards() {
    const { data } = this.state;
    if (data.length === 0) {
      return;
    }

    return data.map( item => {
      console.log('item', item)
      return (
        <Card data={item} key={item.id} />
      )
    })
  }

  async requestData() {
    const { data } = this.props;
    const parsedData = data.map(restaurant => restaurant.value);

    const dataObject = {
      method: 'POST',
      path: 'v1/restaurants/list',
      body: {
        restaurants: {
          ids: parsedData,
        }
      }
    }

    const instance = new Fetcher(dataObject);
    const response = await instance.request();

    this.setState({ data: response.data })
  }

  render() {
    return (
      <Content>
        { this.renderCards() }
      </Content>
    )
  }

}

export default CardsArea;
