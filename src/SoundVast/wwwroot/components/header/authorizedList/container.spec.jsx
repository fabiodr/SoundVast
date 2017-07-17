import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import AuthorizedListContainer from './container';

const userName = 'Yoshimiii';
const isLoggedIn = true;
const store = configureMockStore()({
  account: {
    userName,
    isLoggedIn,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <AuthorizedListContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('AuthorizedListContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('userName')).toBe(userName);
    expect(wrapper.prop('isLoggedIn')).toBe(isLoggedIn);
  });
});
