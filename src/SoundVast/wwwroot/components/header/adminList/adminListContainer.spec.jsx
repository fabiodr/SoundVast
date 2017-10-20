import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import AdminListContainer from './adminListContainer';

const isAdmin = true;
const store = configureMockStore()({
  account: {
    isAdmin,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <AdminListContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('AdminListContainer', () => {
  it('should map state', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('isAdmin')).toBe(isAdmin);
  });
});
