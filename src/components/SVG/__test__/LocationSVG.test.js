import React from 'react';
import { render } from 'enzyme';
import LocationSVG from '../LocationSVG';

it('renders an svg', () => {
  const component = render(<LocationSVG />);

  expect(component.is('svg')).toEqual(true);
});
