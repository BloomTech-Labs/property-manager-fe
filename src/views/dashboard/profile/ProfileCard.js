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
import ProfileForm from '../../../components/Profile/ProfileForm';
import { editUserInfo } from '../../../store/actions/index';

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  }
});

export default function ProfileCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const defaultUser = {
    firstName: 'Please Update',
    lastName: 'Your Profile.',
    type: ''
  };
  const currentUser = useSelector(state => state.getUserReducer.user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = values => {
    dispatch(editUserInfo(values));
  };
  if (currentUser.firstName == null) {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h2">User&apos;s Info</Typography>
        </CardContent>

        <CardActionArea>
          <CardContent>{`${defaultUser.firstName} ${defaultUser.lastName}`}</CardContent>
          <CardContent>{defaultUser.type}</CardContent>
        </CardActionArea>
        <CardActions>
          <button className="profile-btn" onClick={handleOpen}>
            Update Profile ✏
          </button>
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
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h2">User&apos;s Info</Typography>
      </CardContent>

      <CardActionArea>
        <CardContent>
          {`${currentUser.firstName} ${currentUser.lastName}`}
        </CardContent>
        <CardContent>{currentUser.type}</CardContent>
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
