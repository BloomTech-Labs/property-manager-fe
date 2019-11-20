import React from 'react';

// icons import
import emailIcon from '../assets/img/WhiteEmail.png';
import phoneIcon from '../assets/img/WhitePhone.png';
import facebookIcon from '../assets/img/WhiteFacebook.png';
import twitterIcon from '../assets/img/WhiteTwitter.png';

const Contact = () => {
  return (
    <div className="contactPage">
      <form>
        <h1>Contact</h1>
        <input type="text" placeholder="Email" name="email" />
        <textarea
          name="message"
          placeholder="Write your message here..."
          cols="50"
          rows="10"
        />
        <button type="button">SEND</button>
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
};

export default Contact;
