import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import ModalContainer from './modalContainer';
import styles from './modal.less';

const store = configureMockStore()({
  modal: {
    currentModal: 'test',
  },
});
const setup = (newProps) => {
  const props = {
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

  it('containerClass should have hidden style when the modal ids don\'t match', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('containerClass')).toContain(styles.hide);
  });

  it('containerClass should not have hidden style when the modal ids match', () => {
    ({ wrapper } = setup({ id: 'test' }));

    expect(wrapper.prop('containerClass')).toNotContain(styles.hide);
  });
});
