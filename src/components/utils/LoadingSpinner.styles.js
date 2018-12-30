import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const LoadingSpinner = styled(CircularProgress)`
  && {
    color: rgb(91,91,91, 0.25);
    width: 75px !important;
    height: 75px !important;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`



