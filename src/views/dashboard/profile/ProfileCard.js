import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@material-ui/core';
import { useFirebase } from 'react-redux-firebase';
import ProfileForm from '../../../components/Profile/ProfileForm';
import UserCard from './UserCard';
import { showErrorToast } from '../../../store/actions/toastActions';
import 'firebase/firestore';

export default function ProfileCard() {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(state => state.firebase.profile);
  const firebase = useFirebase();
  const submit = async ({ firstName, lastName, phone }) => {
    try {
      firebase.updateAuth({
        displayName: `${firstName} ${lastName}`
      });
      firebase.updateProfile({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone
      });
      setOpen(false);
    } catch (err) {
      showErrorToast(`${err}`);
    }
  };

  return (
    <Card className="profileCard">
      <UserCard user={currentUser} setOpen={setOpen} />
      <ProfileForm
        open={() => setOpen(true)}
        close={() => setOpen(false)}
        opened={open}
        submit={submit}
      />
    </Card>
  );
}
