import React from 'react';
import { render } from 'enzyme';
import ErrorSVG from '../ErrorSVG';

it('renders an svg', () => {
  const component = render(<ErrorSVG />);

  expect(component.is('svg')).toEqual(true);
});
