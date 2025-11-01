import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders the About Me section', () => {
    render(<Home />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the Work Experience section', () => {
    render(<Home />);
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  it('displays about me content', () => {
    render(<Home />);
    expect(screen.getByText(/I am a passionate professional/i)).toBeInTheDocument();
  });

  it('displays work experience content', () => {
    render(<Home />);
    expect(screen.getByText(/Throughout my career/i)).toBeInTheDocument();
  });
});
