import React from 'react';
import { makeStyles } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  cover: {
    position: 'relative',
    height: 270,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:before': {
      position: 'absolute',
      content: '" "',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage:
        'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)',
    },
    '&:hover': {
      '& $changeButton': {
        visibility: 'visible',
      },
    },
  },
}));

const PlayerHeader = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  return (
    <div {...rest} className={(classes.root, className)}>
      <Breadcrumbs
        aria-label="breadcrumb" 
      >
      </Breadcrumbs>
      <Typography variant="h3" color="textPrimary">
        Feed Juke Box
      </Typography>
    </div>
  );
};


export default PlayerHeader;