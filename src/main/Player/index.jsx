/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Header from './Header';
import useStyles from '../styles';
import Body from './Body';
import Songs from './Songs'

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div classname="p-3">
          <Header />
          <Songs />
          <Body />
        </div>
      </div>
    </div>
  );
};
