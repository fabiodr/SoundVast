import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LogoutSuccessMessage from './successMessage';
import LogoutSuccessPopup from '../../../shared/popup/popupContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <LogoutSuccessMessage {...props} />,
  );

  return {
    wrapper,
    props,
  };
};

describe('LogoutSuccessMessage', () => {
  let wrapper;

  it('should render a logout success popup', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(LogoutSuccessPopup).length).toBe(1);
  });
});

