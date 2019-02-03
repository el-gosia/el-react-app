import React from 'react';
import { shallow } from 'enzyme';

import { Window } from './Window';
import { mockTestRegister } from '../mock/test-register';

const onIssueClick = jest.fn().mockName('onIssueClick');

describe('Window component when application is loading', () => {
  const props = {
    isLoading: true,
    register: [],
    onIssueClick,
  };
  const wrapper = shallow(<Window {...props} />);

  it('renders Loader', () => {
    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('renders nothing but Loader', () => {
    expect(wrapper.find('Content')).toHaveLength(0);
    expect(wrapper.find('Sidebar')).toHaveLength(0);
    expect(wrapper.find('.mask.background')).toHaveLength(0);
  });
});

describe('Window component when application has loaded', () => {
  const props = {
    isLoading: false,
    register: mockTestRegister,
    onIssueClick,
  };
  const wrapper = shallow(<Window {...props} />);

  it("doesn't render loader any more", () => {
    expect(wrapper.find('Loader')).toHaveLength(0);
  });

  it('renders exactly one Sidebar & one Content component', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('Sidebar');
    expect(wrapper).toContainExactlyOneMatchingElement('Content');
  });

  it('contains a div that acts as a mask with blurred background', () => {
    expect(wrapper).toContain('.mask.background');
  });

  it('passes register down as a prop to the Content component', () => {
    expect(wrapper.find('Content')).toHaveProp({ register: mockTestRegister });
    expect(wrapper.find('Content')).not.toHaveProp({ register: [] });
  });

  it('passes down onIssueClick prop to the Content component', () => {
    expect(wrapper.find('Content')).toHaveProp({ onIssueClick });
  });

  it("passes doesn't pass props further to the Sidebar component", () => {
    expect(wrapper.find('Sidebar')).not.toHaveProp({
      register: mockTestRegister,
    });
    expect(wrapper.find('Sidebar')).not.toHaveProp({ onIssueClick });
  });
});
