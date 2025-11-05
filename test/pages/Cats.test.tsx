import { render, screen } from '@testing-library/react';
import Cats from '../../src/pages/Cats';

describe('Cats', () => {
  it('renders the Cats component', () => {
    render(<Cats />);
    expect(screen.getByText('Welcome to the Cat Zone')).toBeInTheDocument();
  });
});
