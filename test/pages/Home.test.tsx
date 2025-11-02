import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Home', () => {
  it('renders the About Me section', () => {
    render(<Home />);
    expect(screen.getByText('About Me')).toBeTruthy();
  });
});
