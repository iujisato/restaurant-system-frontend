import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ChildContainer } from '../index.styles';

function LinearIndeterminate(props) {
  return (
    <ChildContainer>
      <LinearProgress color="secondary" />
    </ChildContainer>
  );
}

export default LinearIndeterminate;
