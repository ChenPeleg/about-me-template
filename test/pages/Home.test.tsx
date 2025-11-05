import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Home', () => {
  it('renders the about me section', () => {
    render(<Home />);
    expect(screen.getByText('About Me')).toBeTruthy();
  });

  it('renders the work experience section', () => {
    render(<Home />);
    expect(screen.getByText('Work Experience')).toBeTruthy();
  });
});
