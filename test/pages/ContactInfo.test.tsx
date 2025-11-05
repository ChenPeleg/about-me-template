import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfo from '../../src/pages/ContactInfo';

describe('ContactInfo', () => {
  it('renders the contact info heading', () => {
    render(<ContactInfo />);
    expect(screen.getByRole('heading', { name: /Contact Info/i })).toBeTruthy();
  });
});
