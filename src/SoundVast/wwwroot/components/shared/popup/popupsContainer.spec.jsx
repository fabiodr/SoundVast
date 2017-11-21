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
    ...newProps,
  };

  const wrapper = shallow(
    <PopupContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
    lifeCycle: wrapper.dive(),
  };
};

describe('PopupContainer', () => {
  afterEach(() => {
    expect.restoreSpies();
  });

  it('popupClass should have hidden style when the popup ids don\'t match', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('popupClass')).toContain(styles.hide);
  });

  it('popupClass should not have hidden style when the popup ids match', () => {
    const { wrapper } = setup({ id: 'test' });

    expect(wrapper.prop('popupClass')).toNotContain(styles.hide);
  });

  it('should hide popup after 2 seconds when it is current popup', () => {
    expect.spyOn(global, 'setTimeout');

    const { lifeCycle } = setup();

    const hidePopup = expect.createSpy();
    lifeCycle.setProps({ isCurrentPopup: true, hidePopup });

    const spyArguments = global.setTimeout.calls[0].arguments;

    spyArguments[0]();

    expect(spyArguments[1]).toBe(2000);
    expect(hidePopup).toHaveBeenCalled();
  });

  it('should not hide popup when it is not current popup', () => {
    expect.spyOn(global, 'setTimeout');

    const { lifeCycle } = setup();

    const hidePopup = expect.createSpy();
    lifeCycle.setProps({ hidePopup });

    expect(hidePopup).toNotHaveBeenCalled();
  });
});
