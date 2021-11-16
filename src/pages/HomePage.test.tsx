import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('Should render table with all players data', () => {
  render(<HomePage />);
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});
