/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

// icons import
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

// ---------- Styles ---------- //

const encode = data => {
  return (
    Object.keys(data)
      // eslint-disable-next-line prefer-template
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  );
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-page">
        <div className="contact-content">
          <div className="contact-form-card contact-form">
            <form onSubmit={this.handleSubmit}>
              <h2 className="form-heading">Contact Us</h2>
              <div className="input-wrapper">
                <label htmlFor="name">Name:</label>
                <input
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="name">Message:</label>
                <textarea
                  placeholder="Enter your message"
                  type="text"
                  name="message"
                  value={message}
                  rows="4"
                  onChange={this.handleChange}
                />
              </div>
              <div className="submit-btn-wrapper">
                <button className="btn btn-animated" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
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
}
