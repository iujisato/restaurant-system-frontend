import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import {
  styles,
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledTypography,
  StyledFastfoodIcon,
  StyledRestaurantMenuIcon,
  StyledTrendingUpIcon,
} from './CardsArea.styles';
import AlertDialog from '../../Form/Dialogs/AlertDialog';
import Fetcher from '../../../utils/fetcher';
import FormDialog from '../../Form/Dialogs/FormDialog';
import CreateSchema from './Create.schema';
import CreateForm from './Create.form';
import EditButton from '../../Form/Buttons/EditButton';
import Divider from '@material-ui/core/Divider';
import formatMoney from '../../../utils/currency';

function handleDelete(data) {
  const dataObject = {
    method: 'DELETE',
    path: `v1/dishes/${data.id}`,
  }

  return new Fetcher(dataObject);
}

function formatName(name) {
  // Maximum number of characters before line break
  const VISIBLE_CHARACTERS = 28;

  if (name.length <= VISIBLE_CHARACTERS) {
    return name;
  }
  return `${name.substr(0, VISIBLE_CHARACTERS-3)}...`
}

function MediaCard(props) {
  const { classes, data } = props;
  const { id, name, sample_image, price_in_cents, restaurant } = data;

  const fetcherObject = {
    method: 'PATCH',
    path: `v1/dishes/${id}`,
  }

  const options = {
    initialValues: data,
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
        <StyledTypography size='16px' marginBottom="10px">
          <StyledFastfoodIcon />
          {formatName(restaurant.name)}
        </StyledTypography>

        <Divider variant="middle" />

        <StyledTypography size='18px' marginTop="10px" marginBottom="10px">
          <StyledRestaurantMenuIcon />
          {formatName(name)}
        </StyledTypography>

        <Divider variant="middle" />

        <StyledTypography marginTop="10px">
          <StyledTrendingUpIcon />
          {formatMoney(price_in_cents)}
        </StyledTypography>
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
