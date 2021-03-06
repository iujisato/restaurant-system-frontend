import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { styles, StyledCard, StyledCardActions, StyledCardContent } from './CardsArea.styles';
import AlertDialog from '../../Form/Dialogs/AlertDialog';
import Fetcher from '../../../utils/fetcher';
import FormDialog from '../../Form/Dialogs/FormDialog';
import CreateSchema from '../FilterArea/Create.schema';
import CreateForm from '../FilterArea/Create.form';
import EditButton from '../../Form/Buttons/EditButton';

function handleDelete(data) {
  const dataObject = {
    method: 'DELETE',
    path: `v1/restaurants/${data.id}`,
  }

  return new Fetcher(dataObject);
}

function formatName(name) {
  // Maximum number of characters before line break
  const VISIBLE_CHARACTERS = 26;

  if (name.length <= VISIBLE_CHARACTERS) {
    return name;
  }
  return `${name.substr(0, VISIBLE_CHARACTERS-3)}...`
}

function MediaCard(props) {
  const { classes, data } = props;
  const { id, name, sample_image } = data;

  const fetcherObject = {
    method: 'PATCH',
    path: `v1/restaurants/${id}`,
  }

  const options = {
    initialValues: { name },
    title: `Editing ${name}`,
  }

  return (
    <StyledCard>
      <CardMedia
        className={classes.media}
        image={sample_image}
        title={name}
      />

      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {formatName(name)}
        </Typography>
      </StyledCardContent>

      <StyledCardActions>
        <AlertDialog submitFunction={handleDelete(data)} />
        <FormDialog
          form={CreateForm}
          fetcherObject={fetcherObject}
          options={options}
          schema={CreateSchema}
          button={EditButton}
        />
      </StyledCardActions>
    </StyledCard>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
