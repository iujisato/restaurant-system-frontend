import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { StyledContainer, MenuButton } from './NavBar.styles';

function renderMenuItems(itemsList) {
  return itemsList.map(item => {
    return (
      <Button color="inherit" key={item}>{item}</Button>
    )
  });
}

function ButtonAppBar(props) {
  return (
    <StyledContainer>
      <AppBar position="static">
        <Toolbar>
            <MenuButton >
              <MenuIcon />
            </MenuButton>

          <StyledContainer>
            {renderMenuItems(['Home', 'Ristorants', 'Cardapio'])}
          </StyledContainer>
        </Toolbar>
      </AppBar>
    </StyledContainer>
  );
}

export default ButtonAppBar;
