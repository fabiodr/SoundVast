import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import ProfileContainer from './userProfileContainer';

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
  it('should map state', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('userName')).toBe(userName);
  });
});
