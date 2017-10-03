import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import CancelButton from './component';

const setup = (newProps) => {
  const props = {
    remove: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<CancelButton {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('CancelButton', () => {
  it('should call remove on cancel click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.remove).toHaveBeenCalled();
  });
});
