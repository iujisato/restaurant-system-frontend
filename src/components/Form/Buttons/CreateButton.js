import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/AddBox';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  button: {
    backgroundColor: green[500],
    margin: theme.spacing.unit,
    "&:hover": {
      backgroundColor: green[700],
    }
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

function IconLabelButtons(props) {
  const { classes, onClick, title } = props;
  return (
    <div>
      <Button variant="contained" color="primary" size="large" className={classes.button} onClick={onClick} >
        <AddIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        {title}
      </Button>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

IconLabelButtons.defaultProps = {
  title: 'Add new restaurant'
}

export default withStyles(styles)(IconLabelButtons);
