import React from 'react';
import { shallow } from 'enzyme';

import { Content } from './Content';
import { mockTestRegister } from '../mock/test-register';

const onIssueClick = jest.fn().mockName('onIssueClick');

const props = {
  register: mockTestRegister,
  onIssueClick,
};
const wrapper = shallow(<Content {...props} />);

it('renders li element for each record from the props.register', () => {
  const length = mockTestRegister.length;
  expect(wrapper.find('li.record')).toHaveLength(length);
});

it('renders list of Issues', () => {
  const numberOfIssues = mockTestRegister.reduce((acc, curr) => {
    return acc.issues.length + curr.issues.length;
  });
  expect(wrapper.find('Issue')).toHaveLength(numberOfIssues);
});
