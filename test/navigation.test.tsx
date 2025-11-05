import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import Home from '../src/pages/Home';
import Resume from '../src/pages/Resume';
import ContactInfo from '../src/pages/ContactInfo';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact-info', element: <ContactInfo /> },
    ],
  },
];

describe('Navigation', () => {
  it('navigates to the resume page when the resume link is clicked', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);

    const resumeLink = screen.getByRole('link', { name: /resume/i });
    await userEvent.click(resumeLink);

    const resumeHeading = await screen.findByRole('heading', { name: /resume/i });
    expect(resumeHeading).toBeTruthy();
  });

  it('navigates to the contact info page when the contact info link is clicked', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);

    const contactInfoLink = screen.getByRole('link', { name: /contact info/i });
    await userEvent.click(contactInfoLink);

    const contactInfoHeading = await screen.findByRole('heading', { name: /contact info/i });
    expect(contactInfoHeading).toBeTruthy();
  });

  it('navigates to the home page when the home link is clicked from another page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/resume'] });
    render(<RouterProvider router={router} />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    await userEvent.click(homeLink);

    const homeHeading = await screen.findByRole('heading', { name: /about me/i });
    expect(homeHeading).toBeTruthy();
  });
});
