import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import PopupContainer from './popupContainer';
import styles from './popup.less';

const store = configureMockStore()({
  popup: {
    currentPopup: 'test',
  },
});
const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    ...newProps,
  };

  const wrapper = shallow(
    <PopupContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('PopupContainer', () => {
  let wrapper;

  it('popupClass should have hidden style when the popup ids don\'t match', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('popupClass')).toContain(styles.hide);
  });

  it('popupClass should not have hidden style when the popup ids match', () => {
    ({ wrapper } = setup({ id: 'test' }));

    expect(wrapper.prop('popupClass')).toNotContain(styles.hide);
  });
});
