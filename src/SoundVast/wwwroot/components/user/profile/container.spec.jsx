import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import ProfileContainer from './container';

const userName = 'Yoshimiii';
const store = configureMockStore()({
  account: {
    userName,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <ProfileContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('ProfileContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('userName')).toBe(userName);
  });
});
