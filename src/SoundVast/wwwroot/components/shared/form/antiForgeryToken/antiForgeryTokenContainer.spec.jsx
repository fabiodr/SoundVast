import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';
import proxyquire from 'proxyquire';

import { generateAntiForgeryToken } from '../actions';

proxyquire.noCallThru();

const AntiForgeryTokenContainer = proxyquire('./container', {
  './component': () => null,
}).default;

const store = configureMockStore()({});

const setup = (newProps) => {
  const props = {
    form: 'testForm',
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <AntiForgeryTokenContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('AntiForgeryTokenContainer', () => {
  it('should generate an anti forgery token on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(generateAntiForgeryToken());
  });
});
