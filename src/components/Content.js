import React, { Component } from 'react';

import { Issue } from './Issue';

import './Content.scss';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';

export class ContentInner extends Component {
  render() {
    const { registerStore } = this.props;

    return (
      <div className="content">
        <ul className="register__list">
          {registerStore.filteredRegister.map(
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
  }
}

export const Content = compose(
  inject('registerStore'),
  observer
)(ContentInner);
