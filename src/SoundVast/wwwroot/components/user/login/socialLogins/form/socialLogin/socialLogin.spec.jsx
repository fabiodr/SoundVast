import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLogin from './socialLogin';

const setup = (newProps) => {
  const props = {
    authenticationScheme: 'facebook',
    displayName: 'Facebook',
    ...newProps,
  };

  const wrapper = shallow(<SocialLogin {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLogin', () => {
  let wrapper;

  it('should render social login button', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('button').filter('[type="submit"]').length).toBe(1);
  });
});
