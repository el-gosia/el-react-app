import React from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from './Sidebar';

const wrapper = shallow(<Sidebar />);

it('renders 3 control buttons', () => {
  expect(wrapper.find('button.sidebar__control')).toHaveLength(3);
});

it('renders 3 navigation buttons', () => {
  expect(wrapper.find('button.nav-button')).toHaveLength(3);
});

it('renders an icon for each nav-button', () => {
  expect(wrapper.find('.nav-button .nav-button__icon')).toHaveLength(3);
});
