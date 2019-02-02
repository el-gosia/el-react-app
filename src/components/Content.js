import React from 'react';
import classnames from 'classnames';

import { ReactComponent as StarIcon } from '../assets/icon-star.svg';

import './Content.scss';

export const Content = ({ issues: register }) => (
  <div className="content">
    <ul className="register__list">
      {register.map(({ id, date, issues }) => (
        <li key={id} className="entry">
          <h2 className="entry__heading">{date}</h2>
          <ul className="entry__issues-list">
            {issues.map(({ id: issueId, name, open }) => (
              <li key={issueId} className="issue">
                <p className="issue__label">{name}</p>
                <StarIcon
                  className={classnames('issue__icon', {
                    'issue__icon--open': open,
                  })}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
