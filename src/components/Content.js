import PropTypes from 'prop-types';
import React from 'react';

import { Issue } from './Issue';

import './Content.scss';

export const Content = ({ register, onIssueClick }) => (
  <div className="content">
    <ul className="register__list">
      {register.map(({ id, date, issues }) => (
        <li key={id} className="record">
          <h2 className="record__heading">{date}</h2>
          <ul className="record__issues-list">
            {issues.map(issue => (
              <Issue
                key={issue.id}
                issue={issue}
                date={date}
                onIssueClick={onIssueClick}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

Content.propTypes = {
  register: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      issues: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          open: PropTypes.bool.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};
