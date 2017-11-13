import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLoginConfirmation from './socialLoginConfirmation';
import SocialLoginConfirmationForm from './socialLoginConfirmationForm';

const setup = (newProps) => {
  const props = {
    location: {
      search: '?loginProvider=Facebook&email=test@outlook.com&returnUrl=/',
    },
    ...newProps,
  };

  const wrapper = shallow(<SocialLoginConfirmation {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginConfirmation', () => {
  it('should render a form', () => {
    const { wrapper } = setup();

    expect(wrapper.find(SocialLoginConfirmationForm).length).toBe(1);
  });

  it('should extract properties from search', () => {
    const { wrapper } = setup();

    expect(wrapper.find(SocialLoginConfirmationForm).prop('loginProvider')).toBe('Facebook');
    expect(wrapper.find(SocialLoginConfirmationForm).prop('email')).toBe('test@outlook.com');
    expect(wrapper.find(SocialLoginConfirmationForm).prop('returnUrl')).toBe('/');
  });
});
