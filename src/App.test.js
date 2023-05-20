import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import 'identity-obj-proxy';
import '@testing-library/jest-dom';


/* this unit test verifies that the homepage of the React application 
is rendered correctly by checking if a specific text 
('Easy House Services') is present in the rendered output*/

test('renders the homepage', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assert that the homepage content is rendered
  const homepageElement = screen.getByText(/Easy House Services/);
  expect(homepageElement).toBeInTheDocument();
});
