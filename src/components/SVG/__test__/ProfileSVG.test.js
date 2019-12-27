import React from 'react';
import { render } from 'enzyme';
import ProfileSVG from '../ProfileSVG';

it('renders an svg', () => {
  const component = render(<ProfileSVG />);

  expect(component.is('svg')).toEqual(true);
});
