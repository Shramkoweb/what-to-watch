import React from 'react';

interface SmallFilmCardProps {
  title: string;
  imageSrc: string;
}

export function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {title, imageSrc} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imageSrc}
          width="280" height="175" alt={title}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}
