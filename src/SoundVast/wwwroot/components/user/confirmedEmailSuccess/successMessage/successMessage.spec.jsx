import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ConfirmedEmailSuccessMessage from './successMessage';
import ConfirmedEmailSuccessPopup from '../../../shared/popup/popupContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <ConfirmedEmailSuccessMessage {...props} />,
  );

  return {
    wrapper,
    props,
  };
};

describe('ConfirmedEmailSuccessMessage', () => {
  let wrapper;

  it('should render a confirmed email success popup', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(ConfirmedEmailSuccessPopup).length).toBe(1);
    expect(wrapper.prop('id')).toBe('confirmedEmailSuccess');
  });
});

