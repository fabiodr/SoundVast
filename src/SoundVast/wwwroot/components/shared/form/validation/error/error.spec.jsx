import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ValidationError from './error';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<ValidationError {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ValidationError', () => {
  it('should not render an error when an error doesn\'t exist', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toNotExist();
  });

  it('should render an error when an error exists', () => {
    const error = 'Required';
    const { wrapper } = setup({ error });

    expect(wrapper.text()).toBe(error);
  });
});
