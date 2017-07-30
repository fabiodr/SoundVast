import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { A } from 'react-html-email';

import ForgotPasswordEmail from './component';

const setup = (newProps) => {
  const props = {
    resetPasswordLink: 'Account/resetPassword',
    ...newProps,
  };

  const wrapper = shallow(<ForgotPasswordEmail {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ForgotPasswordEmail', () => {
  let wrapper;
  let props;

  it('should render a link with correct href to reset password', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(A).prop('href')).toBe(props.resetPasswordLink);
  });

  it('should pass title to SharedEmail', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('title')).toBe('Reset your password');
  });
});
