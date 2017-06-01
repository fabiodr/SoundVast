import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Modal from './modal';

const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    title: 'test-title',
    ...newProps,
  };

  const wrapper = shallow(<Modal {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Modal', () => {
  let wrapper;
  let props;

  it('should render children', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.contains(props.children)).toBe(true);
  });

  it('should render modal title', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find('.title').text()).toBe(props.title);
  });

  it('should render modal close', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('.close').text()).toBe('❌');
  });
});
