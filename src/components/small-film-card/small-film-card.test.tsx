import {render, screen} from '@testing-library/react';
import {SmallFilmCard} from './small-film-card';

test('Renders app-component', () => {
  render(<SmallFilmCard imageSrc='/some.jpg' title='Hello world'/>);

  const cardTitle = screen.getByText(/Hello world/i);

  expect(cardTitle).toBeInTheDocument();
});
