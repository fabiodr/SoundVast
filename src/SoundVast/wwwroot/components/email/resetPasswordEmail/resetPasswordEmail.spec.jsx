import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { A } from 'react-html-email';

import ResetPasswordEmail from './resetPasswordEmail';

const setup = (newProps) => {
  const props = {
    resetPasswordLink: 'Account/resetPassword',
    ...newProps,
  };

  const wrapper = shallow(<ResetPasswordEmail {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ResetPasswordEmail', () => {
  it('should render a link with correct href to reset password', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(A).prop('href')).toBe(props.resetPasswordLink);
  });

  it('should pass title to SharedEmail', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('title')).toBe('Reset your password');
  });
});
