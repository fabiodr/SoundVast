import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLoginConfirmationForm from './form';
import AntiForgeryToken from '../../../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<SocialLoginConfirmationForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginConfirmationForm', () => {
  let wrapper;

  it('should render an anti-forgery token', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });
});
