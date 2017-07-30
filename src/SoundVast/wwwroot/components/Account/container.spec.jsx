import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';
import proxyquire from 'proxyquire';

import { getAccountDetails } from './actions';

proxyquire.noCallThru();

const AccountContainer = proxyquire('./container', {
  './component': () => null,
}).default;

const store = configureMockStore()({});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <AccountContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('AccountContainer', () => {
  it('should get user details on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(getAccountDetails());
  });
});
