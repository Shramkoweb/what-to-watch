import React from 'react';

interface UserBlockProps {
  avatarSrc: string;
}

function UserBlock(props: UserBlockProps): JSX.Element {
  const {avatarSrc} = props;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={avatarSrc} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserBlock;
