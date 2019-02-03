import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App component', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(wrapper.find('div')).toExist();
  });

  it('contains div with classNames app and background', () => {
    expect(wrapper).toContainMatchingElement('.app.background');
  });

  it('renders exactly one Window component', () => {
    const window = wrapper.find('Window');
    expect(window).toHaveLength(1);
  });
});
