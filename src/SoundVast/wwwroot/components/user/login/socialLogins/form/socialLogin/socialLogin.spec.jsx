import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLogin from './socialLogin';
import loginProviders from '../../socialLoginsMockData.spec';

const setup = (newProps) => {
  const props = {
    ...loginProviders[0],
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
