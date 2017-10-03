import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import CancelButton from './container';

const setup = (newProps) => {
  const props = {
    index: 0,
    remove: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<CancelButton {...props} />).dive();

  return {
    wrapper,
    props,
  };
};

describe('CancelButton', () => {
  it('should call remove on cancel click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.remove).toHaveBeenCalledWith(props.index);
  });
});
