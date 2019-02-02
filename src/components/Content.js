import React from 'react';

import { Issue } from './Issue';

import './Content.scss';

export const Content = ({ issues: register }) => (
  <div className="content">
    <ul className="register__list">
      {register.map(({ id, date, issues }) => (
        <li key={id} className="record">
          <h2 className="record__heading">{date}</h2>
          <ul className="record__issues-list">
            {issues.map(({ name, open, ...issue }) => (
              <Issue key={issue.id} name={name} isOpen={open} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
