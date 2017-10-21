import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Header from './header';
import AuthorizedList from './authorizedList/authorizedListContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import AdminList from './adminList/adminListContainer';
import LinkDropdown from '../shared/dropDown/dropDownContainer';

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
  it('should render Songs Link', () => {
    const { wrapper } = setup();

    expect(wrapper.findWhere(x => x.prop('to') === 'songs').length).toBe(1);
  });

  it('should render Radio Link', () => {
    const { wrapper } = setup();

    expect(wrapper.findWhere(x => x.prop('to') === 'radio').length).toBe(1);
  });

  it('should render Upload Link', () => {
    const { wrapper } = setup();

    expect(wrapper.findWhere(x => x.prop('to') === 'upload').length).toBe(1);
  });

  it('should render AuthorizedList', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AuthorizedList).length).toBe(1);
  });

  it('should render UnAuthorizedList', () => {
    const { wrapper } = setup();

    expect(wrapper.find(UnAuthorizedList).length).toBe(1);
  });

  it('should render AdminList', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AdminList).length).toBe(1);
  });

  it('should render LinkDropdown', () => {
    const { wrapper } = setup();

    const LinkDropdownTitle = shallow(wrapper.find(LinkDropdown).prop('title'));

    expect(LinkDropdownTitle.length).toBe(1);
    expect(LinkDropdownTitle.hasClass('fa-bars')).toBe(true);
  });
});
