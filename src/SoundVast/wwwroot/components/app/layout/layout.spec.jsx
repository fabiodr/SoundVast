import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Layout from './layout';
import User from '../../user/userContainer';
import Header from '../../header/header';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Layout {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Header', () => {
  let wrapper;

  it('should render User', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(User).length).toBe(1);
  });

  it('should render Header', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(Header).length).toBe(1);
  });
});
