import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfo from '../../src/pages/ContactInfo';

describe('ContactInfo', () => {
  it('renders the Contact Info heading', () => {
    render(<ContactInfo />);
    expect(screen.getByText('Contact Info')).toBeTruthy();
  });
});
