import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';

import AntiForgeryTokenContainer from './antiForgeryTokenContainer';
import { generateAntiForgeryToken } from '../formActions';

const store = configureMockStore()({
  form: {
    antiForgeryToken: '0#DERG£%%FDD£',
  },
});

const setup = (newProps) => {
  const props = {
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
  it('should get anti forgery token on load', () => {
    setup();

    expect(store.dispatch).toHaveBeenCalledWith(generateAntiForgeryToken());
  });
});
