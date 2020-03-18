import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlaceIcon from '@material-ui/icons/Place';
import InfoIcon from '@material-ui/icons/Info';
import AlarmIcon from '@material-ui/icons/Alarm';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Link } from '../../../components';

import stylesheet from './stylesheet';

const useStyles = createUseStyles(stylesheet);


const SwipeableMenu = props => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const SideList = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <ListItem button key='about' onClick={() => setIsOpen(false)}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <Link to="/about">
            <ListItemText primary='About' />
          </Link>
        </ListItem>

        <ListItem button key='where' onClick={() => setIsOpen(false)}>
          <ListItemIcon><PlaceIcon /></ListItemIcon>
          <Link to="/where">
            <ListItemText primary='Where' />
          </Link>
        </ListItem>

        <ListItem button key='when' onClick={() => setIsOpen(false)}>
          <ListItemIcon><AlarmIcon /></ListItemIcon>
          <Link to="/when">
            <ListItemText primary='When' />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <SideList />
      </SwipeableDrawer>
    </>
  );
};

export default SwipeableMenu;