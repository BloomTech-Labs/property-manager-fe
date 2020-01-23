import React from 'react';
import Slider from 'react-animated-slider';
import relax from '../../assets/img/relax.gif';
import houseRent from '../../assets/img/house.gif';
import payment from '../../assets/img/payments.gif';
import rent from '../../assets/img/agree.jpg';
import 'react-animated-slider/build/vertical.css';
import 'normalize.css/normalize.css';

const content = [
  {
    title: 'Keep Relaxing and Leave Your Worries with Us',
    description:
      ' PropMan serves investors and landlords who don’t want to manage their rental properties themselves but want to relax knowing that all of the details are being handled professionally.',
    image: `url(${relax})`
  },
  {
    title: 'Easy and Reliable Maintenance Administration',
    description:
      'PropMan provides the platform to collect maintenance requests from tenants and organizes them based on the maintenance type and urgency. Then it dispatches the request to the right department. It also gives you the power to follow the statuses of the work orders and the satisfaction of the Tenants.',
    image: `url(${houseRent})`
  },
  {
    title: 'Payment Collection',
    description:
      'Payment collection is as easy as checking your email. The payment portal that is integrated with PropMan provides the possibility to collect payments from your tenants and transfer the payments to your account. The system notifies the tenants when a payment due date is approaching and also calculates additional late and administration fees.',
    image: `url(${payment})`
  },
  {
    title: 'Rent and Lease Agreement',
    description:
      'All rental processes can be stored for documentation this includes applications, background checks, credit checks and signing are all taken care by PropMan. Tenants can file their application online. The landlord with the help of PropMan process the application and informs the applicant the status of their application.',
    image: `url(${rent})`
  }
];

const Landlord = () => {
  return (
    <div className="landlord-wrapper">
      <Slider
        autoplay={3000}
        direction="vertical"
        nextButton="next"
        className="slider-wrapper"
      >
        {content.map((item, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="slider-content"
            style={{
              background: `${item.image} no-repeat center center`
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Landlord;
