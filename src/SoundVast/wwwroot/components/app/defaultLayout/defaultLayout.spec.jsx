import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import DefaultLayout from './defaultLayout';
import User from '../../user/userContainer';
import Header from '../../header/header';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<DefaultLayout {...props} />);

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
