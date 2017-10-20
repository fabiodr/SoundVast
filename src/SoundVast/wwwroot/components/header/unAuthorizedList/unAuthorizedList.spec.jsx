import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UnAuthorizedList from './unAuthorizedList';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<UnAuthorizedList {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UnAuthorizedList', () => {
  it('should render when user is logged in', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toNotBe(null);
  });

  it('should render null when user is not logged in', () => {
    const { wrapper } = setup({ isLoggedIn: true });

    expect(wrapper.type()).toBe(null);
  });
});
