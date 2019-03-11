import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as StarIcon } from '../assets/icon-star.svg';

import './Issue.scss';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';

export const IssueInner = ({ issue, date, registerStore }) => {
  const { id, name, open } = issue;

  const onStarClick = () => {
    registerStore.toggleIssue(date, id);
  };

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

export const Issue = compose(
  inject('registerStore'),
  observer
)(IssueInner);

Issue.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

StarIcon.displayName = 'StarIcon';
