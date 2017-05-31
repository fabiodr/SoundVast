import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Header from './header';
import AuthorizedList from './authorizedList/authorizedListContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import AdminList from './adminList/adminListContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Header {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Header', () => {
  let wrapper;

  it('should render AuthorizedList', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(AuthorizedList).length).toBe(1);
  });

  it('should render UnAuthorizedList', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(UnAuthorizedList).length).toBe(1);
  });

  it('should render AdminList', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(AdminList).length).toBe(1);
  });
});
