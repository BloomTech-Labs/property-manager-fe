import React from 'react';
import { render } from 'enzyme';
import UnderConstructionSVG from '../UnderConstructionSVG';

it('renders an svg', () => {
  const component = render(<UnderConstructionSVG />);

  expect(component.is('svg')).toEqual(true);
});
