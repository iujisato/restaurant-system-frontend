import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

export const StyledCardActions = styled(CardActions)`
  && {
    justify-content: space-evenly;
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    padding-top: 20px;
    padding-bottom: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

`
export const StyledCard = styled(Card)`
  &&{
    width: 345px;
    margin: 20px;
  }
`
