import React from 'react';
import { compose } from 'recompose';

import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as OpenIssueIcon } from '../assets/icon-open-issue.svg';
import { ReactComponent as ClosedIssueIcon } from '../assets/icon-closed-issue.svg';

import './Sidebar.scss';
import { inject, observer } from 'mobx-react';

const controlButtons = ['close', 'minimize', 'maximize'];

const navigationFilters = [
  { label: 'all', icon: GithubIcon },
  { label: 'open', icon: OpenIssueIcon },
  { label: 'closed', icon: ClosedIssueIcon },
];

export const SidebarInner = ({ registerStore }) => {
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
        {navigationFilters.map(({ label, count, icon: Icon }) => {
          const setFilter = () => {
            registerStore.setFilter(label);
          };
          return (
            <li key={label}>
              <button className="nav-button" onClick={setFilter}>
                <Icon className="nav-button__icon" aria-hidden="true" />
                <p className="nav-button__label">{label}</p>
                <p className="nav-button__count">
                  {registerStore.issuesCount[label]}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Sidebar = compose(
  inject('registerStore'),
  observer
)(SidebarInner);
