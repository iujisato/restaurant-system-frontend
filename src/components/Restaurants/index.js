import React, { Component } from 'react';
import FilterArea from './FilterArea/FilterArea'
import CardsArea from './CardsArea/CardsArea'

class Restaurants extends Component {
  state = {
    selectedOptions: []
  }

  callbackFunction(selectedOptions) {
    this.setState({ selectedOptions })
  }

  render () {
    return (
      <div>
        <FilterArea callback={this.callbackFunction.bind(this)} />
        <CardsArea data={this.state.selectedOptions}/>
      </div>
    )
  }
}

export default Restaurants;
