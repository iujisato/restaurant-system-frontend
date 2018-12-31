import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import { ChildContainer } from '../index.styles';
import { Link } from 'react-router-dom'

export const StyledContainer = styled(ChildContainer)`
  && {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`

export const MenuButton = styled(IconButton)`
  && {
    margin-left: -12;
    margin-right: 20;
    color: white;
    aria-label: Menu;
  }
`
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

