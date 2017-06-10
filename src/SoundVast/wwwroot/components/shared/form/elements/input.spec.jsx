import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import FormInput from './input';
import ValidationErrors from '../validation/errors/errors';

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

  it('should render ValidationErrors when touched', () => {
    const error = ['Required'];
    ({ wrapper } = setup({
      meta: {
        touched: true,
        error,
      },
    }));

    expect(wrapper.find(ValidationErrors).length).toBe(1);
    expect(wrapper.find(ValidationErrors).prop('errors')).toBe(error);
  });

  it('should not render ValidationErrors when not touched', () => {
    const error = 'Required';
    ({ wrapper } = setup({
      meta: {
        touched: false,
        error,
      },
    }));

    expect(wrapper.find(ValidationErrors).length).toBe(0);
  });
});
