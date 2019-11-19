import React from 'react';

const Contact = () => {
  return (
    <div className="contactPage">
      <form>
        <h1>Contact</h1>
        <input type="text" placeholder="Email" name="email"/>
        <textarea name="message" placeholder="Write your message here..." cols="50" rows="10"></textarea>
        <button>SEND</button>
      </form>
      <div className="contactInfo">
        placeholder
      </div>
    </div>
  );
};

export default Contact;
