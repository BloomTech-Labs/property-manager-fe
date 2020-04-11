import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { navigate } from '@reach/router';

const useStyles = makeStyles({
  button: {
    margin: '10px 20px',
    background: 'linear-gradient(-30deg, #6C63FF 30%, #554fcc 90%)',
    color: 'white'
  }
});

export default function AddWorkOrder() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<AddIcon />}
      onClick={() => {
        navigate('/dashboard/workorders/add');
      }}
    >
      Add New
    </Button>
  );
}
