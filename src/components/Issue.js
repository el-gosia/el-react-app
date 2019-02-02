import React from 'react';
import classnames from 'classnames';

import { ReactComponent as StarIcon } from '../assets/icon-star.svg';

import './Issue.scss';

export const Issue = ({ name, isOpen }) => {
  return (
    <li className="issue">
      <p className="issue__label">{name}</p>
      <StarIcon
        className={classnames('issue__icon', {
          'issue__icon--open': isOpen,
        })}
      />
    </li>
  );
};
