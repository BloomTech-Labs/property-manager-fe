import React from 'react';
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
        <Button
          variant="contained"
          size="small"
          onClick={useModal(ProfileForm)}
        >
          Update Profile ✏
        </Button>
      </CardActions>
    </Card>
  );
}
