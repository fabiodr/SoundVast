import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import PopupContainer from './popupContainer';
import styles from './popup.less';
import { hidePopup } from './popupActions';

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

  afterEach(() => {
    expect.restoreSpies();
  });

  it('popupClass should have hidden style when the popup ids don\'t match', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('popupClass')).toContain(styles.hide);
  });

  it('popupClass should not have hidden style when the popup ids match', () => {
    ({ wrapper } = setup({ id: 'test' }));

    expect(wrapper.prop('popupClass')).toNotContain(styles.hide);
  });

  it('should hide popup after 2 seconds when it is current popup', () => {
    ({ wrapper } = setup({ id: 'test' }));

    expect.spyOn(global, 'setTimeout');

    wrapper.dive();
    const spyArguments = global.setTimeout.calls[0].arguments;

    expect(spyArguments[0]).toBeA('function');
    expect(spyArguments[1]).toBe(2000);
  });

  it('should not hide popup when it is not current popup', () => {
    ({ wrapper } = setup());

    expect.spyOn(global, 'setTimeout');

    wrapper.dive();

    expect(global.setTimeout).toNotHaveBeenCalled();
  });
});
