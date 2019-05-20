import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { AppHeader, LeftDrawer } from '..';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 6,
    width: '100%',
    height: '100%',
  },
});

const View = ({ classes, children }) => {
  return (
    <>
      <AppHeader />
      <div className={classes.root}>
        <LeftDrawer />
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};

View.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles)
)(View);
