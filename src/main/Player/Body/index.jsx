/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import useStyles from '../../styles';
import  Buttons from './buttons';

export default () => {
  //const classes = useStyles();

  return (
      <div> <Buttons /> </div>
    // <div className={classes.root}>
    //   <div className={classes.content}>
    //     <div classname="p-3">
         
    //       <div className="mt-3">
    //         <playersButtons />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
