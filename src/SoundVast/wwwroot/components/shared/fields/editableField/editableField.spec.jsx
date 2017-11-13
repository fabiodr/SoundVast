import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import EditableField from './editableField';
import ValidationErrors from '../../validation/validationErrors';

const setup = (newProps) => {
  const props = {
    children: <div />,
    touched: false,
    ...newProps,
  };

  const wrapper = shallow(<EditableField {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('EditableField', () => {
  it('should render children', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.editableField').length).toBe(1);
  });

  it('should render ValidationErrors when touched', () => {
    const error = ['Required'];
    const { wrapper } = setup({ touched: true, error });

    expect(wrapper.find(ValidationErrors).length).toBe(1);
    expect(wrapper.find(ValidationErrors).prop('errors')).toBe(error);
  });

  it('should not render ValidationErrors when not touched', () => {
    const error = 'Required';
    const { wrapper } = setup({ error });

    expect(wrapper.find(ValidationErrors).length).toBe(0);
  });
});
