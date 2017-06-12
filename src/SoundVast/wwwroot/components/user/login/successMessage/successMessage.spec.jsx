import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LoginSuccessMessage from './successMessage';
import SuccessPopup from '../../../shared/popup/popupContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <LoginSuccessMessage {...props} />,
  );

  return {
    wrapper,
    props,
  };
};

describe('LoginSuccessMessage', () => {
  let wrapper;

  it('should render a success popup', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SuccessPopup).length).toBe(1);
  });
});

