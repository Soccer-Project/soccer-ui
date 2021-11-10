import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Soccer project');
  const table = screen.getByRole('table');
  expect(linkElement).toBeInTheDocument();
  expect(table).toBeInTheDocument();
});
