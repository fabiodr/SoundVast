import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { A } from 'react-html-email';

import ConfirmEmail from './confirmEmail';

const setup = (newProps) => {
  const props = {
    confirmEmailLink: 'Account/confirmEmail',
    ...newProps,
  };

  const wrapper = shallow(<ConfirmEmail {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ConfirmEmail', () => {
  let wrapper;
  let props;

  it('should render a link with correct href to confirm email', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(A).prop('href')).toBe(props.confirmEmailLink);
  });

  it('should pass title to SharedEmail', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('title')).toBe('Confirm Email');
  });
});
