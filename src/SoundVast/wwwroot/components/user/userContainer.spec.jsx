import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';
import proxyquire from 'proxyquire';

import { getUserDetails } from './userActions';

proxyquire.noCallThru();

const UserContainer = proxyquire('./userContainer', {
  './user': () => null,
}).default;

const store = configureMockStore()({});

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
