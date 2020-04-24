import React from 'react';
import { CardContent, CardActionArea, CardActions } from '@material-ui/core';

export default function UserCard({ user: { firstName, lastName, type }, setOpen }) {
  return (
    <>
      <CardContent>
        <h2>User Info</h2>
      </CardContent>
      <CardActionArea>
        <CardContent>{`Name:${firstName} ${lastName}`}</CardContent>
        <CardContent>{type}</CardContent>
      </CardActionArea>
      <CardActions>
        <button type="submit" className="profile-btn" onClick={() => setOpen(true)}>
          Update Profile
        </button>
      </CardActions>
    </>
  );
}
