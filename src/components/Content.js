import PropTypes from 'prop-types';
import React from 'react';

import Issue from '../containers/IssueContainer';

import './Content.scss';

export const Content = ({ records }) => {
  return (
    <div className="content">
      <ul className="register__list">
        {records.map(
          ({ id, date, issues }) =>
            issues.length > 0 && (
              <li key={id} className="record">
                <h2 className="record__heading">{date}</h2>
                <ul className="record__issues-list">
                  {issues.map(issue => (
                    <Issue key={issue.id} issue={issue} date={date} />
                  ))}
                </ul>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

Content.propTypes = {
  records: PropTypes.arrayOf(
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
