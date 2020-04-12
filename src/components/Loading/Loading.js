import React from 'react';
import classNames from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';
import { createUseStyles } from 'react-jss';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


const Loading = (props) => {
  const classes = useStyles();

  return (
    <div className={classNames(props.className, classes.container)}>
      <ClipLoader size={55} />
    </div>
  );
};

export default Loading;