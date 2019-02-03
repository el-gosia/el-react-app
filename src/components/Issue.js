import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as StarIcon } from '../assets/icon-star.svg';

import './Issue.scss';

export const Issue = ({ issue, date, onIssueClick }) => {
  const { id, name, open } = issue;

  function onStarClick() {
    onIssueClick(date, id);
  }

  return (
    <li className="issue">
      <p className="issue__label">{name}</p>
      <StarIcon
        className={classnames('issue__icon', {
          'issue__icon--open': open,
        })}
        onClick={onStarClick}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

Issue.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  onIssueClick: PropTypes.func.isRequired,
};

StarIcon.displayName = 'StarIcon';
