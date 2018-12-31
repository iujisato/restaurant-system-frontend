import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  margin-top: 60px;
`

export const StyledTypography = styled(Typography)`
  &&{
    font-size: ${props => props.size || '20px'};
    font-weight: 400;
    margin-top: 10px;;
    display: flex;
    justify-content: center;
  }
`
