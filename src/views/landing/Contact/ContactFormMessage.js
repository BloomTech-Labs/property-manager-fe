/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { navigate } from '@reach/router';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container
} from '@material-ui/core';
import MailSent from '../../../assets/svg/mail-sent.svg';

function ContactFormMessage({ open, handleClose, Transition }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Container>
          <DialogTitle disableTypography id="alert-dialog-slide-title">
            <h5 className="contactModalHeader">Form Submitted!</h5>
          </DialogTitle>
          <img
            className="contactFormImg"
            src={MailSent}
            alt="Thank you for message"
          />
          <DialogContent>
            <p>Thank you for your feedback!</p>
          </DialogContent>
          <DialogActions>
            <Button autoFocus color="primary" onClick={() => navigate('/')}>
              Close
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </>
  );
}

export default ContactFormMessage;
