import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import expect from 'expect';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';

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


  const ReduxFormMock = reduxForm({
    form: 'test',
  })(AntiForgeryTokenContainer);

  const wrapper = mount(
    <Provider store={store}>
      <ReduxFormMock {...props} />
    </Provider>,
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
