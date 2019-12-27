import React from 'react';
import { render } from 'enzyme';
import AddHouseSVG from '../AddHouseSVG';

it('renders an svg', () => {
  const component = render(<AddHouseSVG />);

  expect(component.is('svg')).toEqual(true);
});
