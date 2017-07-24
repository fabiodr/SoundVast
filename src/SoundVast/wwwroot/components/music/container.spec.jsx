import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import MusicContainer from './container';

const store = configureMockStore()({
  music: {
    hasMore: true,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <MusicContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('MusicContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('hasMore')).toEqual(true);
  });
});
