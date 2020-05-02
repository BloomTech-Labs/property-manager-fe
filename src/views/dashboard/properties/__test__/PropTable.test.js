import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PropTable from '../PropTable';

afterEach(rtl.cleanup);

describe('PropTable', () => {
  const initialState = {
    properties: [
      {
        id: 9,
        name: 'Test Property Name',
        street_address: '999 nine street',
        state: 'AZ',
        occupied: 3
      }
    ]
  };
  const mockStore = configureStore();

  it('Renders with mock data', () => {
    const store = mockStore(initialState);
    const wrapper = rtl.render(
      <Provider store={store}>
        <PropTable />
      </Provider>
    );
    expect(wrapper.getByText(/name/i)).not.toBeNull();
  });
});
