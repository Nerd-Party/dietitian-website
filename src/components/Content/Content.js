import React from 'react';
import { createUseStyles } from 'react-jss';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);

const Content = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.children}>
        {props.children}
      </div>
    </div>
  );
};

export default Content;