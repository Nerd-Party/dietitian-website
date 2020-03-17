import React from 'react';
import { createUseStyles } from 'react-jss';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


const Footer = props => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <span>Copyright Nerd Party &copy; {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;