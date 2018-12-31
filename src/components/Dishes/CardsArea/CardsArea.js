import React, { Component } from 'react';
import Card from './Card';
import { Content, Container, ActionsArea } from './CardsArea.styles';
import Fetcher from '../../../utils/fetcher';
import LoadingSpinner from '../../utils/LoadingSpinner';
import CreateSchema from './Create.schema';
import CreateForm from './Create.form';
import CreateButton from '../../Form/Buttons/CreateButton';
import FormDialog from '../../Form/Dialogs/FormDialog';

class CardsArea extends Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    this.requestData();
  }

  renderLoading = () => {
    return <LoadingSpinner />
  }

  renderCards() {
    const { data } = this.state;
    if (data.length === 0) {
      return;
    }

    return data.map( item => {
      return (
        <Card data={item} key={item.id} />
      )
    })
  }

  async requestData() {
    const dataObject = {
      method: 'GET',
      path: 'v1/dishes',
    }

    const instance = new Fetcher(dataObject);
    const response = await instance.request();

    this.setState({
      data: response.data,
      loading: false
    })
  }

  render() {
    const { loading } = this.state;

    const fetcherObject = {
      method: 'POST',
      path: `v1/dishes`,
    }

    const options = {
      initialValues: { name: '', price_in_cents: '', restaurant_id: '' },
      title: 'Create dish',
      buttonTitle: 'Add new dish',
    }

    return (
      <Container>
        <ActionsArea>
          <FormDialog
            form={CreateForm}
            fetcherObject={fetcherObject}
            options={options}
            schema={CreateSchema}
            button={CreateButton}
          />
        </ActionsArea>

        <Content>
          { loading ? this.renderLoading() : this.renderCards() }
        </Content>
      </Container>
    )
  }
}

export default CardsArea;
