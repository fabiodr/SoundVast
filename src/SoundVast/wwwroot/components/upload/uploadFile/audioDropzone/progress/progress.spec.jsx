import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Progress from './progress';

const setup = (newProps) => {
  const props = {
    progressPercent: 30,
    ...newProps,
  };

  const wrapper = shallow(<Progress {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Progress', () => {
  let wrapper;
  let props;

  it('should use progressPercent for the value', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find('progress').prop('value')).toBe(props.progressPercent);
  });
});
