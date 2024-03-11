import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an anchor tag with the href attribute', () => {
  render(<App />);

  const anchor = screen.get('Home').closest('a');
  expect(anchor).toHaveAttribute('href', '/');
});