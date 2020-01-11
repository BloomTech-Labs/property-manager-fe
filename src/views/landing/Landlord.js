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
    title: 'Keep Relaxing and Leave Your Worry on Us',
    description:
      ' PropMan serve investors and landlords who don’t want to manage their rental properties themselves but want to rest/relax assured knowing that all of the details are being handled professionally.',
    image: `url(${relax})`
  },
  {
    title: 'Easy and Realiable Maintenance Adminstration',
    description:
      'PropMan provides the platform to collect maintenance requests from tenants and reorganized based on the maintenance type and urgency. Then it dispatches the request to the right department. It also gives the power to follow the statues of the work order and the satisfaction of the Tenants. ',
    image: `url(${houseRent})`
  },
  {
    title: 'Payment Collection',
    description:
      'Payment collection is as easy as paying your phone bill. The payment portal that integrated with PropMan app provides the possibility to collect payments from the tenants and transfer to your account. The system notifies the tenants the payment due date and also calculate additional late and administration fees. ',
    image: `url(${payment})`
  },
  {
    title: 'Rent and Lease Agreement  ',
    description:
      'All rental processes such as application, background check, credit check and signing take care by PropMan.  Tenant can file their application online. The landlord with the help of PropMan process the application and inform the applicant the statues of their application.',
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
