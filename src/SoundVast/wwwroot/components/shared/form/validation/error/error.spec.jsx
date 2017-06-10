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
  let wrapper;

  it('should not render an error when an error doesn\'t exist', () => {
    ({ wrapper } = setup());

    expect(wrapper.text()).toNotExist();
  });

  it('should render an error when an error exists', () => {
    const error = 'Required';

    ({ wrapper } = setup({ error }));

    expect(wrapper.text()).toBe(error);
  });
});
