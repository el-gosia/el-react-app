import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as OpenIssueIcon } from '../assets/icon-open-issue.svg';
import { ReactComponent as ClosedIssueIcon } from '../assets/icon-closed-issue.svg';

import './Sidebar.scss';

const controlButtons = ['close', 'minimize', 'maximize'];

const navigationFilters = [
  { label: 'all', count: 12, icon: GithubIcon },
  { label: 'open', count: 4, icon: OpenIssueIcon },
  { label: 'closed', count: 8, icon: ClosedIssueIcon },
];

export const Sidebar = () => (
  // @TODO - refine blurred background & control buttons styling
  <div className="sidebar">
    <ul className="sidebar__controls">
      {controlButtons.map(type => (
        <li>
          <button className={`sidebar__control sidebar__control--${type}`} />
        </li>
      ))}
    </ul>
    <ul className="sidebar__navigation">
      {navigationFilters.map(({ label, count, icon: Icon }) => (
        <li className="nav-button">
          <Icon className="nav-button__icon" />
          <p className="nav-button__label">{label}</p>
          <p className="nav-button__count">{count}</p>
        </li>
      ))}
    </ul>
  </div>
);
