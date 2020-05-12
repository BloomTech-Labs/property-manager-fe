import React from 'react';
import { CardContent, CardActionArea, CardActions } from '@material-ui/core';

export default function UserCard({ user, setOpen }) {
  return (
    <>
      <CardContent>
        <h2>User Info</h2>
      </CardContent>
      <CardActionArea>
        <CardContent>{`First Name:${user.firstName || 'None'}`}</CardContent>
        <CardContent>{`Last Name:${user.lastName || 'None'}`}</CardContent>
        <CardContent>{`Phone Number:${user.phoneNumber ||
          'None'}`}</CardContent>
      </CardActionArea>
      <CardActions>
        <button
          type="submit"
          className="profile-btn"
          onClick={() => setOpen(true)}
        >
          Update Profile
        </button>
      </CardActions>
    </>
  );
}
