import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import Button from '@material-ui/core/Button';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


const Link = props => {
  const classes = useStyles();

  return (
    <Button color="inherit">
      <RRLink
        className={classes.link}
        to={props.to}
      >
        {props.children}
      </RRLink>
    </Button>
  );
};

export default Link;