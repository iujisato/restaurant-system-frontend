import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Container, StyledTypography } from './Home.styles';

const styles = {
  media: {
    height: 350,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            title="Contemplative Reptile"
          />
          <CardContent>
            <StyledTypography size="70px">
              Open Ristorant
            </StyledTypography>

            <StyledTypography>
              free collaborative menu system
            </StyledTypography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
