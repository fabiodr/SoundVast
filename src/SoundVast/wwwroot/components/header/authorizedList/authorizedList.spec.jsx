import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AuthorizedList from './authorizedList';
import LinkDropdown from '../../shared/dropDown/dropDownContainer';
import Logout from '../../account/logout/logoutContainer';

const setup = (newProps) => {
  const props = {
    isLoggedIn: true,
    userName: 'Yoshimiii',
    ...newProps,
  };

  const wrapper = shallow(<AuthorizedList {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AuthorizedList', () => {
  it('should render when user is logged in', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toNotBe(null);
  });

  it('should render null when user is not logged in', () => {
    const { wrapper } = setup({ isLoggedIn: false });

    expect(wrapper.type()).toBe(null);
  });

  it('should render LinkDropdown when user logged in', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(LinkDropdown).length).toBe(1);
    expect(wrapper.find(LinkDropdown).prop('title')).toBe(props.userName);
  });

  it('should render Logout', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Logout).length).toBe(1);
  });
});
