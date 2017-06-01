import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';

import UserContainer from './userContainer';
import Register from './register/register';
import { getUserDetails } from './userActions';

const store = configureMockStore()({
  modal: {},
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
  let wrapper;

  it('should get user details on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(getUserDetails());
  });

  it('should render Register', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(Register).length).toBe(1);
  });
});
