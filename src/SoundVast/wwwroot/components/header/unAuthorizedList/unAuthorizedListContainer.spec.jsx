import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import UnAuthorizedListContainer from './unAuthorizedListContainer';

const isLoggedIn = true;
const store = configureMockStore()({
  account: {
    isLoggedIn,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <UnAuthorizedListContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('unAuthorizedListContainer', () => {
  it('should map state', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('isLoggedIn')).toBe(isLoggedIn);
  });
});
