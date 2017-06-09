/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { submit } from '../form/formActions';
import RegisterFormContainer from './formContainer';

const store = createStore(combineReducers({ form: formReducer }));

const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  expect.spyOn(store, 'dispatch');

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterFormContainer {...props} />
      </BrowserRouter>
    </Provider>,
  );

  return {
    wrapper,
    props,
  };
};

describe('RegisterFormContainer.integration', () => {
  let wrapper;

  it('should submit formData in onSubmit handler', () => {
    ({ wrapper } = setup());

    wrapper.find('form').simulate('submit', { test: 3 });

    expect(store.dispatch).toHaveBeenCalledWith(submit());
  });
});
