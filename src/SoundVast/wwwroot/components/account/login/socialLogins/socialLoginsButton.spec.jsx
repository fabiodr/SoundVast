import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLogin from './socialLogins';

const setup = (newProps) => {
  const props = {
    name: 'facebook',
    displayName: 'Facebook',
    ...newProps,
  };

  const wrapper = shallow(<SocialLogin {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginsButton', () => {
  it('should render social login button', () => {
    const { wrapper } = setup();

    expect(wrapper.find('button').length).toBe(1);
  });
});
