import React from 'react';
import { createUseStyles } from 'react-jss';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


const Welcome = props => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <p className={classes.title}>Welcome!</p>
    </div>
  );
};

export default Welcome;