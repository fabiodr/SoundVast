import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import FormInput from './input';
import EditableField from '../editableField';

const setup = (newProps) => {
  const props = {
    input: {},
    meta: {
      touched: false,
      error: 'error',
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
  it('should render input', () => {
    const { wrapper } = setup();

    expect(wrapper.find('input').length).toBe(1);
  });

  it('should wrap input in EditableField', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(EditableField).children('input').length).toBe(1);
    expect(wrapper.find(EditableField).prop('error')).toBe(props.meta.error);
    expect(wrapper.find(EditableField).prop('touched')).toBe(props.meta.touched);
  });
});
