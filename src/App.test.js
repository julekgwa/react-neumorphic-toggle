import {
  render 
} from '@testing-library/react';

import React from 'react';

import App from './index';

test('should render without crashing', () => {

  const { getByText, } = render(<App />);

});
