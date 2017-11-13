import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Modal from './modal';
import ModalOverlay from './overlay/overlay';

const setup = (newProps) => {
  const props = {
    modalContainerClass: 'test',
    children: <div className="@@test" />,
    title: 'test-title',
    hideModal: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Modal {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Modal', () => {
  it('should render children', () => {
    const { wrapper, props } = setup();

    expect(wrapper.contains(props.children)).toBe(true);
  });

  it('should render modal title', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.title').text()).toBe(props.title);
  });

  it('should render modal close', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.close').text()).toBe('❌');
  });

  it('should render ModalOverlay', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ModalOverlay).length).toBe(1);
  });

  it('should close modal on close click', () => {
    const { wrapper, props } = setup();

    const close = wrapper.find('.close');
    close.simulate('click');

    expect(props.hideModal).toHaveBeenCalled();
    expect(props.hideModal.calls[0].arguments.length).toBe(0);
  });
});
