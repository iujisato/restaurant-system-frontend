import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import { ChildContainer } from '../index.styles';

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
