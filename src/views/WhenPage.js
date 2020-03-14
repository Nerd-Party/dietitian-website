import React from 'react';
import { createUseStyles } from 'react-jss';

import { When } from '../components';
import globalStyles from '../helpers/globalStyles';

const useStyles = createUseStyles(globalStyles);


const WhenPage = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <When />
    </div>
  );
};

export default WhenPage;
