import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AuthorizedComponent from './authorizedComponent';

const setup = (newProps) => {
  const props = {
    baseComponent: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<AuthorizedComponent {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AuthorizedComponent', () => {
  let wrapper;
  let props;

  it('should render null when user not logged in', () => {
    ({ wrapper } = setup());

    expect(wrapper.type()).toBe(null);
  });

  it('should render BaseComponent when user logged in', () => {
    ({ wrapper, props } = setup({ isLoggedIn: true }));

    expect(wrapper.find(props.baseComponent).length).toBe(1);
  });

  it('should pass additional props to BaseComponent', () => {
    const className = '@@test';
    ({ wrapper, props } = setup({ isLoggedIn: true, className }));

    expect(wrapper.find(props.baseComponent).hasClass(className)).toBe(true);
  });
});
