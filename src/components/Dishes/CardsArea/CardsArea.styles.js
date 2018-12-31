import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

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

export const StyledTypography = styled(Typography)`
  &&{
    font-size: ${props => props.size || '14px'};
    font-weight: 400;
    margin-bottom: ${props => props.marginBottom || 0};
    margin-top: ${props => props.marginTop || 0};
    display: flex;
    align-items: center;
  }
`

export const StyledFastfoodIcon = styled(FastfoodIcon)`
&&{
  color: darkblue;
  margin-right: 15px;
}
`

export const StyledRestaurantMenuIcon = styled(RestaurantMenuIcon)`
&&{
  color: brown;
  margin-right: 15px;
}
`

export const StyledTrendingUpIcon = styled(TrendingUpIcon)`
&&{
  color: green;
  margin-right: 15px;
}
`
export const ActionsArea = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

`

export const Container = styled.div`

`
