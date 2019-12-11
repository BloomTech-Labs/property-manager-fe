import React from 'react';
import calendarImage from '../../assets/img/undraw_calendar_dutt.png';

const Landlord = () => {
  return (
    <div className="landlordView">
      <div className="landlordBlock">
        <div className="landlordHeader">
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
        <div className="landlordSubs">
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

export default Landlord;
