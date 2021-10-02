import React from 'react';

interface LogoProps {
  href?: string;
}

export function Logo(props: LogoProps): JSX.Element {
  const {href} = props;

  return (
    <div className="logo">
      <a className="logo__link logo__link--light" href={href}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
