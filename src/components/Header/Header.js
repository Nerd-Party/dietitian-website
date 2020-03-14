import React from 'react';
import { createUseStyles } from 'react-jss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link } from '../Link';
import Menu from './Menu';
import stylesheet from './stylesheet';
import mediaQueries from '../../helpers/mediaQueries';

const useStyles = createUseStyles(stylesheet);


const Header = (props) => {
  const isSmallScreen = useMediaQuery(mediaQueries.smallWidth);
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="fixed">
      <Toolbar>
        <div className={classes.container}>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              <span>Dietitian </span>
              <span role='img' aria-label='avocado'>🥑</span>
            </Typography>
          </Link>

          {!isSmallScreen &&
            <div>
              <Link to="/about">About</Link>
              <Link to="/where">Where</Link>
              <Link to="/when">When</Link>
            </div>
          }

          {isSmallScreen &&
            <Menu {...props} />
          }
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
