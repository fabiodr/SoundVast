import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';

import SocialLoginsContainer from './socialLoginsContainer';
import { getSocialLogins } from './socialLoginsActions';

const store = configureMockStore()({
  socialLogins: {
    authenticationScheme: 'facebook',
    displayName: 'Facebook',
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <SocialLoginsContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginsContainer', () => {
  it('should get social login details on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(getSocialLogins());
  });
});
