import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import UserUploadsContainer from './container';

const userAudios = [
  { name: 'bubble' },
];
const store = configureMockStore()({
  profile: {
    userAudios,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <UserUploadsContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('UserUploadsContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('userAudios')).toBe(userAudios);
  });
});
