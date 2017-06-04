import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import FormInput from './input';
import Validate from '../validation/validate';

const setup = (newProps) => {
  const props = {
    input: {},
    meta: {
      touched: false,
    },
    ...newProps,
  };

  const wrapper = shallow(<FormInput {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('FormInput', () => {
  let wrapper;

  it('should render input', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('input').length).toBe(1);
  });

  it('should render Validate', () => {
    const error = 'Required';
    ({ wrapper } = setup({
      meta: {
        touched: true,
        error,
      },
    }));

    expect(wrapper.find(Validate).length).toBe(1);
    expect(wrapper.find(Validate).prop('error')).toBe(error);
  });
});
