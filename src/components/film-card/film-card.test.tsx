import {render, screen} from '@testing-library/react';
import {FilmCard} from './film-card';

test('Renders app-component', () => {
  render(<FilmCard year={1999} filmName="Rocky" posterSrc="/img/rocky.jpg" genre="action"/>);

  const filmNameText = screen.getByText(/Rocky/i);
  const filmYearText = screen.getByText(/1999/i);

  expect(filmNameText).toBeInTheDocument();
  expect(filmYearText).toBeInTheDocument();
});
