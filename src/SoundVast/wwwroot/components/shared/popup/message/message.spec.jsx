import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Message from './message';

const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    ...newProps,
  };

  const wrapper = shallow(<Message {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Message', () => {
  let wrapper;
  let props;

  it('should render children', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.contains(props.children)).toBe(true);
  });
});
