import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  makeStyles,
  Typography
} from '@material-ui/core';
import { useModal } from '../../../hooks/useModal';
import ProfileForm from '../../../components/Profile/ProfileForm';

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  }
});

export default function ProfileCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = values => {
    console.log(values)
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h2">User&apos;s Info</Typography>
      </CardContent>

      <CardActionArea>
        <CardContent>FirstName LastName</CardContent>
        <CardContent>User Type</CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" onClick={handleOpen}>
          Update Profile ✏
        </Button>
      </CardActions>
      <ProfileForm
        open={handleOpen}
        close={handleClose}
        opened={open}
        submit={submit}
      />
    </Card>
  );
}
