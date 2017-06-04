import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import RegisterForm from './form';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<RegisterForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('RegisterForm', () => {
  let wrapper;

  it('should render an anti-forgery token', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });
});
