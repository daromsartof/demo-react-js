import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

//fake data 
const data = {
  "firstName": "test firstname",
  "name": "test",
  "biographie": "lorem",
  "profession": "test professions",
}

test('renders home components test', () => {
  const { getByText, getAllByRole, getByRole } = render(<Router><Home profils={data} showHeader={false} /> </Router>);
  const btn = getAllByRole('link');
  expect(btn).toHaveLength(2);
  expect(btn[0].getAttribute('href')).toEqual('/about');
  expect(getByRole('img').getAttribute('src')?.length).not.toEqual(0);
  expect(getByText(data.biographie)).toBeVisible;
  expect(getByText(data.profession)).toBeVisible;
  expect(getByText(`${data.name} ${data.firstName}`)).not.toBeNull;
});


