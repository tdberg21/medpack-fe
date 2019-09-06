import React from 'react';
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import logo from '../../Assets/logo.png';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  filler: {
    height: theme.overrides.MuiAppBar.root.height,
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 140,
      '&:focus': {
        width: 220,
      },
    },
  },
  search: {
    display: 'flex',
    alignItems: 'vertical',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 8,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolBar: {
    height: '100%',
  },
});

const AppHeader = ({ classes }) => {
  return (
    <>
      <div className={classes.filler} />
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            <img src={logo} alt="logo" height="50"></img>
            {/* Provider Minder */}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Patient Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
