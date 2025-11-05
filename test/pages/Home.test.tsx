import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Home', () => {
  it('renders the main headings', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /Work Experience/i })).toBeTruthy();
  });
});
