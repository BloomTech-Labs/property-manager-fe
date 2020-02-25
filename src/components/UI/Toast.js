import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { clearToast } from '../../store/actions/toastActions';

const Toast = () => {
  const dispatch = useDispatch();

  const { openToast, toastMessage, toastSeverity } = useSelector(
    state => state.uiReducer
  );

  function handleClose() {
    dispatch(clearToast());
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openToast}
      autoHideDuration={3500}
      onClose={handleClose}
    >
      <Alert severity={toastSeverity}>{toastMessage}</Alert>
    </Snackbar>
  );
};

export default Toast;
