import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ModalOverlay from './component';

const setup = (newProps) => {
  const props = {
    hideModal: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<ModalOverlay {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ModalOverlay', () => {
  let wrapper;
  let props;

  it('should close modal on click', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('click');

    expect(props.hideModal).toHaveBeenCalled();
    expect(props.hideModal.calls[0].arguments.length).toBe(0);
  });
});
