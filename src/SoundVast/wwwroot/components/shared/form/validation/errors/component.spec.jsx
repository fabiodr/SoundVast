import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ValidationErrors from './component';
import ValidationError from '../error/component';

const setup = (newProps) => {
  const props = {
    errors: [
      'Username is required',
      'Username cannot be more than 15 characters',
    ],
    ...newProps,
  };

  const wrapper = shallow(<ValidationErrors {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ValidationErrors', () => {
  let wrapper;
  let props;

  it('should render ValidationError components for all errors', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(ValidationError).length).toBe(props.errors.length);
  });
});
