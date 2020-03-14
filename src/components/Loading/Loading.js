import React from 'react';
import classNames from 'classnames';
import ClipLoader from 'react-spinners/CircleLoader';
import { createUseStyles } from 'react-jss';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


const Loading = (props) => {
  const classes = useStyles();

  return (
    <div className={classNames(props.className, classes.container)}>
      <ClipLoader />
    </div>
  );
};

export default Loading;