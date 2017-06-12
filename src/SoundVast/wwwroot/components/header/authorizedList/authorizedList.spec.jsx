import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AuthorizedList from './authorizedList';
import LinkDropdown from '../../shared/dropDown/linkDropdownContainer';
import LogoutForm from '../../user/logout/form/formContainer';

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
  let wrapper;
  let props;

  it('should render when user is logged in', () => {
    ({ wrapper } = setup());

    expect(wrapper.type()).toNotBe(null);
  });

  it('should render null when user is not logged in', () => {
    ({ wrapper } = setup({ isLoggedIn: false }));

    expect(wrapper.type()).toBe(null);
  });

  it('should render LinkDropdown when user logged in', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(LinkDropdown).length).toBe(1);
    expect(wrapper.find(LinkDropdown).prop('title')).toBe(props.userName);
  });

  it('should render logout form', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(LogoutForm).length).toBe(1);
  });
});
