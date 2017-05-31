import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AdminList from './adminList';

const setup = (newProps) => {
  const props = {
    isAdmin: false,
    ...newProps,
  };

  const wrapper = shallow(<AdminList {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('AdminList', () => {
  let wrapper;

  it('should render when user is an admin', () => {
    ({ wrapper } = setup({ isAdmin: true }));

    expect(wrapper.type()).toNotBe(null);
  });

  it('should render null when user is not an admin', () => {
    ({ wrapper } = setup());

    expect(wrapper.type()).toBe(null);
  });
});
