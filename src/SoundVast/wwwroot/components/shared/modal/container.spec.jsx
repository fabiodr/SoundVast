import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import ModalContainer from './container';
import styles from './modal.less';

const store = configureMockStore()({
  modal: {
    currentModal: 'test',
  },
});
const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    title: 'test-title',
    ...newProps,
  };

  const wrapper = shallow(
    <ModalContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('ModalContainer', () => {
  let wrapper;

  it('modalContainerClass should have hidden style when the modal ids don\'t match', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('modalContainerClass')).toContain(styles.hide);
  });

  it('modalContainerClass should not have hidden style when the modal ids match', () => {
    ({ wrapper } = setup({ id: 'test' }));

    expect(wrapper.prop('modalContainerClass')).toNotContain(styles.hide);
  });
});
