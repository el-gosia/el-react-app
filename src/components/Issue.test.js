import React from 'react';
import { shallow } from 'enzyme';

import { Issue } from './Issue';
import { mockTestRegister, onIssueClick } from '../mock/test-mocks';

const date = mockTestRegister[0].date;
const issue = mockTestRegister[0].issues[0];
issue.open = false;

const props = {
  date,
  issue,
  onIssueClick,
};
const wrapper = shallow(<Issue {...props} />);

it('renders paragraph containg an issue name', () => {
  expect(wrapper.find('p.issue__label')).toHaveText(issue.name);
});

it('renders a star icon', () => {
  expect(wrapper).toContainExactlyOneMatchingElement('StarIcon');
});

it('contains star representing an open issue with a className issue__icon--open', () => {
  expect(wrapper.find('StarIcon')).not.toHaveClassName('issue__icon--open');
});

it('triggers onIssueClick function when clicked', () => {
  const icon = wrapper.find('StarIcon');
  expect(onIssueClick).not.toHaveBeenCalled();
  icon.simulate('click');
  expect(onIssueClick).toHaveBeenCalled();
});
