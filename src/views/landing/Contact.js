/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React from 'react';

// contact form
// icons import
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <ContactForm />
        <div className="contactInfo">
          <h2>PropMan</h2>
          <div className="contactType">
            <MdEmail className="icon" />
            <p>acme.info@2mail.com</p>
          </div>
          <div className="contactType">
            <MdPhone className="icon" />
            <p>+0 000-000-0000</p>
          </div>
          <h3>Follow Us</h3>
          <div className="contactIcons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
