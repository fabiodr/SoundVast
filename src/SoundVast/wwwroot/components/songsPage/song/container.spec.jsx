import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import SongContainer from './container';

const store = configureMockStore()();

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <SongContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('SongContainer', () => {
  let wrapper;

  it('should map fetchSong', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('fetchSong')).toExist();
  });
});
