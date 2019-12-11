import React from 'react';
import profilePlaceholder from '../../assets/img/person-icon-1675.png';

const Features = () => {
  return (
    <div className="featuresBlock">
      <div className="outerFeature">
        <img src={profilePlaceholder} alt="profile" width="100" />
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectepor pharetra. Phasellus gravida,
          ante eu pretium placerat, nunc libero euismod lectus, nec mollis odio
          eros vitae lorem. Nulla sed luctus tellus. Nullam t risus.
        </p>
        <button type="button">BUTTON</button>
      </div>
      <div className="middleFeature">
        <img src={profilePlaceholder} alt="profile" width="100" />
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
          est non nisi tempor pharetra. Phasellus gravida, ante eu pretium
          placerat, nunc libero euismod lectus, nec mex. Aliquam ante velit,
          sagittis nec urna eget, ultrices volutpat risus.
        </p>
        <button type="button">BUTTON</button>
      </div>
      <div className="outerFeature">
        <img src={profilePlaceholder} alt="profile" width="100" />
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit ams vitae lorem. Nulla sed luctus tellus. Nullam
          et consectetur ex. Aliquam ante velit, sagittis nec urna eget,
          ultrices volutpat risus.
        </p>
        <button type="button">BUTTON</button>
      </div>
    </div>
  );
};

export default Features;
