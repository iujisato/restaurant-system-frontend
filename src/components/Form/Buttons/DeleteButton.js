import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function IconLabelDeleteButtons(props) {
  const { classes, onClick } = props;

  return (
    <Button variant="contained" color="secondary" size="small" className={classes.button} onClick={onClick}>
      <DeleteIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
      Delete
    </Button>
  );
}

IconLabelDeleteButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(IconLabelDeleteButtons);
