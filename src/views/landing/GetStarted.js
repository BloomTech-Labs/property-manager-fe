import React from 'react';

const GetStarted = () => {
  return (
    <div className="getStarted">
      <form className="signUpPage">
        <div className="formHeader">
          <h1>Sign Up</h1>
          <h3>Are you a Property Owner or Renter?</h3>
          <select>
            <option name="owner">Owner</option>
            <option name="renter">Renter</option>
          </select>
        </div>
        <div className="formline">
          <input type="text" placeholder="First Name" name="firstname" />
          <input type="text" placeholder="Last Name" name="lastname" />
        </div>
        <div className="formline">
          <input type="text" placeholder="Address" name="address" />
          <input type="text" placeholder="City" name="city" />
          <input type="number" placeholder="Zip Code" name="zipcode" />
        </div>
        <div className="formline">
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="country" placeholder="Country" />
        </div>
        <div className="formline">
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="email2" placeholder="Email Confirmation" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetStarted;
