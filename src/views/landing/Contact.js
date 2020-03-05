import React from 'react';

// contact form
// icons import
import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { Container } from '@material-ui/core';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <div className="contact-content">
          <ContactForm />
          <div className="contactInfo">
            <h2>Freehold</h2>
            <div className="contactType">
              <p>
                Feel free to contact us if you have any questions about PropMan
                and how it can improve your life as a landlord or tenant.
              </p>
            </div>
            <h3>Follow Us</h3>
            <div className="contactIcons">
              <a
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/_freehold_/"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Freehol91308053"
              >
                <FaTwitter className="icon" />
              </a>
              <a
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/freehold.devs.9"
              >
                <FaFacebookSquare className="icon" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
