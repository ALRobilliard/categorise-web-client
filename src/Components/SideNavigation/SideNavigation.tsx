import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

interface IProps {
  user?: UserDto;
  clearUser: () => void;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#689f38',
    boxShadow: '3px 0 4px 0 #888',
    WebkitBoxShadow: '3px 0 4px 0 #888',
    color: '#ffffff',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideNavigation(props: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar}>
          <Divider />
          <NavigationLinks isAuthenticated={props.user != null} />
        </div>
      </Drawer>
    </div>
  );
}
