import React from 'react';
import NavBar from './NavBar/NavBar';
import LoadingBar from './LoadingBar/LoadingBar';
import { Container } from './index.styles';

const Header = () => {
  return (
    <Container>
      <NavBar />
      <LoadingBar />
    </Container>
  )
}

export default Header;
