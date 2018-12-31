import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { StyledContainer, StyledLink, MenuButton } from './NavBar.styles';


class ButtonAppBar extends Component {
  renderMenuItems = (itemsList) => {
    return itemsList.map(item => {
      return (
        <StyledLink to={item.path}>
          <Button color="inherit" key={item.label}>
            {item.label}
          </Button>
        </StyledLink>
      )
    });
  }

  render() {
    const { menuData } = this.props;

    return (
      <StyledContainer>
        <AppBar position="static">
          <Toolbar>
            <StyledContainer>
              {this.renderMenuItems(menuData)}
            </StyledContainer>
          </Toolbar>
        </AppBar>
      </StyledContainer>
    );
  }
}

ButtonAppBar.propTypes = {
  menudata: PropTypes.array.isRequired,
}

export default ButtonAppBar;
