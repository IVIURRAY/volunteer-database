import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/core/styles';

// User Profile Components
import SideBar from './Sidebar.component';
import SubBar from './Sub-bar.component';
import Grid from './Grid.component';
import Tags from './Tags.component';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} />
      <SideBar />
      <main className={classes.content}>
        {/* <CoverImage /> */}

        <SubBar />
        <div className={classes.toolbar} />
        <Tags />
        <h1 style={{ clear: 'right' }}>Portfolio</h1>
        <Grid />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
