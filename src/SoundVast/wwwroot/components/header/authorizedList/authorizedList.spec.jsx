import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AuthorizedList from './authorizedList';

const setup = (newProps) => {
  const props = {
    isLoggedIn: false,
    ...newProps,
  };

  const wrapper = shallow(<AuthorizedList {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AuthorizedList', () => {
  let wrapper;

  it('should render when user is logged in', () => {
    ({ wrapper } = setup({ isLoggedIn: true }));

    expect(wrapper.type()).toNotBe(null);
  });

  it('should render null when user is not logged in', () => {
    ({ wrapper } = setup());

    expect(wrapper.type()).toBe(null);
  });

  it('should render users name when user is logged in', () => {
    const userName = 'Yoshimiii';

    ({ wrapper } = setup({ isLoggedIn: true, userName }));

    expect(wrapper.find('.userName').text()).toBe(userName);
  });
});
