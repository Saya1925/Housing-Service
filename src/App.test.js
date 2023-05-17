import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the homepage', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assert that the homepage content is rendered
  const homepageElement = screen.getByText(/Welcome to our Housing Service Platform!/i);
  expect(homepageElement).toBeInTheDocument();
});

test('renders the header with the correct logo', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assert that the header component is rendered
  const headerElement = screen.getByTestId('header-component');
  expect(headerElement).toBeInTheDocument();

  // Assert that the header component contains the correct logo
  const logoImage = screen.getByAltText('Logo Header');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', 'logoHeader.jpg');
});
