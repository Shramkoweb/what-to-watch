import {render, screen} from '@testing-library/react';
import {MainPage} from './main-page';

test('Renders app-component', () => {
  render(<MainPage/>);

  const catalogElement = screen.getByText(/Catalog/i);
  const moreButton = screen.getByText(/Show more/i);

  expect(catalogElement).toBeInTheDocument();
  expect(moreButton).toBeInTheDocument();
});
