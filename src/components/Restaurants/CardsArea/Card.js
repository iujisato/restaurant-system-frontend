import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { styles, StyledCard, StyledCardActions, StyledCardContent } from './CardsArea.styles';
import DeleteButton from '../../Form/Buttons/DeleteButton';
import EditButton from '../../Form/Buttons/EditButton';

function MediaCard(props) {
  const { classes, data } = props;

  return (
    <StyledCard>
      <CardMedia
        className={classes.media}
        image="https://material-ui.com/static/images/cards/paella.jpg"
        title={data.label}
      />

      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.label}
        </Typography>
      </StyledCardContent>

      <StyledCardActions>
        <DeleteButton />
        <EditButton />
      </StyledCardActions>
    </StyledCard>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
