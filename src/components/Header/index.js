import React from 'react';
import NavBar from './NavBar/NavBar';
import LoadingBar from './LoadingBar/LoadingBar';
import { Container } from './index.styles';

const NAVBAR_ITEMS = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/restaurants',
    label: 'Restaurants',
  },
  {
    path: '/dishes',
    label: 'Dishes',
  }
];

const Header = () => {
  return (
    <Container>
      <NavBar menuData={NAVBAR_ITEMS} />
    </Container>
  )
}

export default Header;
