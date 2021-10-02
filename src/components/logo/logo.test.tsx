import {render, screen} from '@testing-library/react';
import {Logo} from './logo';

test('Renders app-component', () => {
  const href = '/main.html';
  render(<Logo href={href}/>);

  expect(screen.getByRole('link').closest('a')).toHaveAttribute('href', href);
});
