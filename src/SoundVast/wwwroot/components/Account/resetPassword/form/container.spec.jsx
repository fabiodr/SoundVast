import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import proxyquire from 'proxyquire';
import { Provider } from 'react-redux';
import { Field, reducer as form } from 'redux-form';
import { createStore, combineReducers } from 'redux';

proxyquire.noCallThru();

const ResetPasswordFormContainer = proxyquire('./container', {
  './component': () => (
    <div>
      <Field name="code" component="input" />
      <Field name="userId" component="input" />
    </div>
  ),
}).default;

const store = createStore(combineReducers({ form }));
const userId = '1g74r64Df367';
const code = '10ds334f';

const setup = (newProps) => {
  const props = {
    location: {
      search: `?userId=${userId}&code=${code}`,
    },
    ...newProps,
  };

  const wrapper = mount(
    <Provider store={store}>
      <ResetPasswordFormContainer {...props} />
    </Provider>,
  );

  return {
    wrapper,
    props,
  };
};

describe('ResetPasswordFormContainer', () => {
  it('should change userId input field value to userId', () => {
    setup();

    const state = store.getState();
    const inputUserId = state.form.resetPassword.values.userId;

    expect(inputUserId).toBe(userId);
  });

  it('should change code input field value to code', () => {
    setup();

    const state = store.getState();
    const inputCode = state.form.resetPassword.values.code;

    expect(inputCode).toBe(code);
  });
});
