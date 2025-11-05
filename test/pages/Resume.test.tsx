import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from '../../src/pages/Resume';

describe('Resume', () => {
  it('renders the resume heading', () => {
    render(<Resume />);
    expect(screen.getByRole('heading', { name: /Resume/i })).toBeTruthy();
  });
});
