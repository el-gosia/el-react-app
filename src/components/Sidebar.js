import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as OpenIssueIcon } from '../assets/icon-open-issue.svg';
import { ReactComponent as ClosedIssueIcon } from '../assets/icon-closed-issue.svg';

import './Sidebar.scss';

const controlButtons = ['close', 'minimize', 'maximize'];

const navigationFilters = [
  { label: 'all', icon: GithubIcon },
  { label: 'open', icon: OpenIssueIcon },
  { label: 'closed', icon: ClosedIssueIcon },
];

export const Sidebar = ({ issues, register, filterIssues, countNo }) => {
  const all = Object.keys(issues.all).length;
  let open = 0;
  let closed = 0;
  register.forEach(record =>
    record.issues.forEach(issue => (issue.open ? open++ : closed++))
  );

  console.log(countNo);

  const counter = {
    all,
    open,
    closed,
  };

  return (
    <div className="sidebar">
      <ul className="sidebar__controls">
        {controlButtons.map(type => (
          <li key={type}>
            <button className={`sidebar__control sidebar__control--${type}`} />
          </li>
        ))}
      </ul>
      <ul className="sidebar__navigation">
        {navigationFilters.map(({ label, icon: Icon }) => {
          const count = counter[label];
          const handleClick = () => {
            filterIssues(label.toUpperCase());
          };

          return (
            <li key={label}>
              <button className="nav-button" onClick={handleClick}>
                <Icon className="nav-button__icon" aria-hidden="true" />
                <p className="nav-button__label">{label}</p>
                <p className="nav-button__count">{count}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
