import React from 'react';
import { createUseStyles } from 'react-jss';

import { Where } from '../components';
import globalStyles from '../helpers/globalStyles';

const useStyles = createUseStyles(globalStyles);


const WherePage = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Where />
    </div>
  );
};

export default WherePage;
