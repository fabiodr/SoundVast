import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ModalLink from './modalLink';

const setup = (newProps) => {
  const props = {
    modalId: 'test',
    showModal: expect.createSpy(),
    children: 'test',
    ...newProps,
  };

  const wrapper = shallow(<ModalLink {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('ModalLink', () => {
  it('should show component on click', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.showModal).toHaveBeenCalledWith(props.modalId);
  });

  it('should render children', () => {
    const { wrapper, props } = setup();

    expect(wrapper.children().text()).toBe(props.children);
  });
});
