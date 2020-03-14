import React from 'react';
import { createUseStyles } from 'react-jss';

import { About } from '../components';
import globalStyles from '../helpers/globalStyles';

const useStyles = createUseStyles(globalStyles);


const AboutPage = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <About />
    </div>
  );
};

export default AboutPage;