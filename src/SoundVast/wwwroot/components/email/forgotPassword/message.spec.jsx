import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ForgotPasswordEmailMessage from './message';

const setup = (newProps) => {
  const props = {
    resetPasswordLink: 'Account/resetPassword',
    ...newProps,
  };

  const wrapper = shallow(<ForgotPasswordEmailMessage {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ForgotPasswordEmailMessage', () => {
  let wrapper;

  it('should render a link to reset password', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('a').length).toBe(1);
  });
});
