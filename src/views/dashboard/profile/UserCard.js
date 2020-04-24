import React from 'react';
import { CardContent, CardActionArea, CardActions } from '@material-ui/core';

export default function UserCard({
  user: { firstName, lastName, type },
  setOpen
}) {
  return (
    <>
      <CardContent>
        <h2>>User&apos;s Info</h2>
      </CardContent>
      <CardActionArea>
        <CardContent>{`${firstName} ${lastName}`}</CardContent>
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
