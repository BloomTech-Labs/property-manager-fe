/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

// icons import
import emailIcon from '../assets/img/WhiteEmail.png';
import phoneIcon from '../assets/img/WhitePhone.png';
import facebookIcon from '../assets/img/WhiteFacebook.png';
import twitterIcon from '../assets/img/WhiteTwitter.png';

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
      <div className="contactPage">
        <form className="cm-form" onSubmit={this.handleSubmit}>
          <h1>Contact Me</h1>
          <div className="form-elements">
            <label>
              <div>Your Name: </div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <div>Your Email: </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <div>Message: </div>
              <textarea
                name="message"
                value={message}
                rows="4"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-btns">
            <button type="button">Send</button>
          </div>
        </form>
        <div className="contactInfo">
          <h3>ACME, THE HI-FI PROTOTYPING COMPANY</h3>
          <div className="contactType">
            <img src={emailIcon} alt="email" width="25px" />
            <h3>acme.info@2mail.com</h3>
          </div>
          <div className="contactType">
            <img src={phoneIcon} alt="phone" width="25px" />
            <h3>+0 000-000-0000</h3>
          </div>
          <h3 className="followUs">FOLLOW US</h3>
          <div className="contactIcons">
            <img src={facebookIcon} alt="fb" width="35px" />
            <img src={twitterIcon} alt="twitter" width="35px" />
          </div>
        </div>
      </div>
    );
  }
}