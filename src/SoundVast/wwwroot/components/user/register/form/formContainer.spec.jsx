/* eslint-disable react/prop-types */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';
import proxyquire from 'proxyquire';

import { submit } from '../form/formActions';

proxyquire.noCallThru();

const FormContainer = proxyquire('./formContainer', {
  './form': ({ handleSubmit }) => (
    <form className="@@testForm" onSubmit={handleSubmit} />
  ),
}).default;

const store = configureMockStore()({});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <FormContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('FormContainer', () => {
  let wrapper;

  it('should submit formData in onSubmit handler', () => {
    ({ wrapper } = setup());

    wrapper.find('.@@testForm').simulate('submit');

    expect(store.dispatch).toHaveBeenCalledWith(submit());
  });
});
