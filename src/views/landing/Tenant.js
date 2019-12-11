import React from 'react';
import calendarImage from '../../assets/img/maleAvi.png';


const Tenant = () => {
  return (
    <div className="renterView">
      <div className="renterBlock">
        <div className="renterHeader">
          <div className="headerBlock">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectepor pharetra. Phasellus
              gravida, ante eu pretium placerat, nunc libero euismod lectus, nec
              mollis odio eros vitae lorem. Nulla sed luctus tellus. Nullam t
              risus.
            </p>
          </div>
          <img src={calendarImage} alt="calendar" width="50px" />
        </div>
        <div className="renterSubs">
          <div className="subBlock">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectepor pharetra. Phasellus
              gravida, ante eu pretium placerat, nunc libero euismod lectus, nec
              mollis odio eros vitae lorem. Nulla sed luctus tellus. Nullam t
              risus.
            </p>
          </div>
          <div className="subBlock">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectepor pharetra. Phasellus
              gravida, ante eu pretium placerat, nunc libero euismod lectus, nec
              mollis odio eros vitae lorem. Nulla sed luctus tellus. Nullam t
              risus.
            </p>
          </div>
          <div className="subBlock">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectepor pharetra. Phasellus
              gravida, ante eu pretium placerat, nunc libero euismod lectus, nec
              mollis odio eros vitae lorem. Nulla sed luctus tellus. Nullam t
              risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenant;
