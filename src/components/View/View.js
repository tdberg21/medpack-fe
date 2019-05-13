import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import LeftDrawer from '../LeftDrawer/LeftDrawer';

const View = () => {
  return (
    <div className="root">
      <AppHeader />
      <div>
        <LeftDrawer />
      </div>
    </div>
  );
};

export default View;
