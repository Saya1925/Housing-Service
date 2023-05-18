import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import 'identity-obj-proxy';
import '@testing-library/jest-dom';


//	checks if the homepage content is rendered correctly. 
//You can modify the test to check for specific content or elements present on the homepage.

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
