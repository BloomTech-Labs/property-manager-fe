import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@material-ui/core';
import ProfileForm from '../../../components/Profile/ProfileForm';
import { editUserInfo } from '../../../store/actions/index';
import UserCard from './UserCard';

export default function ProfileCard() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: 'Please Update',
    lastName: 'Your Profile.',
    type: ''
  });
  const currentUser = useSelector(state => state.getUserReducer.user);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const submit = values => dispatch(editUserInfo(values));

  return (
    <Card className="profileCard">
      <UserCard user={user} setOpen={setOpen} />
      <ProfileForm
        open={() => setOpen(true)}
        close={() => setOpen(false)}
        opened={open}
        submit={submit}
      />
    </Card>
  );
}
