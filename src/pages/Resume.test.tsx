import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';

describe('Resume', () => {
  it('renders the Resume heading', () => {
    render(<Resume />);
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('displays resume content', () => {
    render(<Resume />);
    expect(screen.getByText(/I am a passionate professional with expertise in modern web development/i)).toBeInTheDocument();
  });

  it('mentions cutting-edge technologies', () => {
    render(<Resume />);
    expect(screen.getByText(/cutting-edge technologies and frameworks/i)).toBeInTheDocument();
  });

  it('mentions continuous learning', () => {
    render(<Resume />);
    expect(screen.getByText(/continuous learning and staying up-to-date/i)).toBeInTheDocument();
  });
});
