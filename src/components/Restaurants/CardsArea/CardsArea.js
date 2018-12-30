import React from 'react';
import Card from './Card';
import { Content } from './CardsArea.styles'

function renderCards(itemsArray) {
  return itemsArray.map( item => {
    return (
      <Card data={item} key={item.value} />
    )
  })
}

function CardsArea() {
  return (
    <Content>
      { renderCards(mock) }
    </Content>
  )
}

const mock = [
  {value: 1, label: "Test"},
  {value: 3, label: "Blondie foods"},
  {value: 4, label: "Caramel foods"},
  {value: 5, label: "Coconut foods"},
  {value: 6, label: "Green Tea foods"},
  {value: 7, label: "Banana foods"},
  {value: 8, label: "Pistachio foods"},
  {value: 9, label: "Mint Chocolate Chip foods"},
  {value: 10, label: "Pumpkin foods"},
  {value: 11, label: "Cheesecake foods"},
  {value: 12, label: "Almond foods"},
];

export default CardsArea;
