/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React from 'react';

// contact form
// icons import
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Container } from '@material-ui/core';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <div className="contact-content">
          <ContactForm />
          <div className="contactInfo">
            <h2>PropMan</h2>
            <div className="contactType">
              <p>
                Feel free to contact us if you have any questions about PropMan
                and how it can improve your life as a landlord or tenant.
              </p>
            </div>
            <h3>Follow Us</h3>
            <div className="contactIcons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
