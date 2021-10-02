import {render, screen} from '@testing-library/react';
import App from './app';

test('Renders app-component', () => {
  render(<App />);

  const catalogElement = screen.getByText(/Catalog/i);

  expect(catalogElement).toBeInTheDocument();
});
