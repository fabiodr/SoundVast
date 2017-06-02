import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';

import UserContainer from './userContainer';
import { getUserDetails } from './userActions';

const store = configureMockStore()({
  form: {},
  modal: {
    currentModal: 'test',
  },
  socialLogins: {
    loginProviders: [],
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <UserContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('UserContainer', () => {
  it('should get user details on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(getUserDetails());
  });
});
