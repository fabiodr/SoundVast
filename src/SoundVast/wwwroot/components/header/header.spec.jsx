import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from './header';
import AuthorizedList from './authorizedList/container';
import UnAuthorizedList from './unAuthorizedList/container';
import AdminList from './adminList/container';
import LinkDropdown from '../shared/dropDown/container';

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

  it('should render Songs Link', () => {
    ({ wrapper } = setup());

    expect(wrapper.findWhere(x => x.prop('to') === 'songs').length).toBe(1);
  });

  it('should render Upload Link', () => {
    ({ wrapper } = setup());

    expect(wrapper.findWhere(x => x.prop('to') === 'upload').length).toBe(1);
  });

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

  it('should render LinkDropdown', () => {
    ({ wrapper } = setup());

    const LinkDropdownTitle = shallow(wrapper.find(LinkDropdown).prop('title'));

    expect(LinkDropdownTitle.length).toBe(1);
    expect(LinkDropdownTitle.hasClass('fa-bars')).toBe(true);
  });
});
