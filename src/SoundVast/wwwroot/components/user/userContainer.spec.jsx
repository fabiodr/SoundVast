import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';

import User from './userContainer';
import { getUserDetails } from './userActions';

const store = configureMockStore()({});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <User {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('UserContainer', () => {
  it('should dispatch user details on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(getUserDetails());
  });
});
