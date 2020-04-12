import React from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import useStyles from './iconButtonStyles';

export default function IconButton({ url, icon, text }) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={icon}
      onClick={() => {
        navigate(url);
      }}
    >
      {text}
    </Button>
  );
}

// '/dashboard/workorders/add'
