import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import thunk from 'redux-thunk';

import LikeContainer from './container';
import { rateSong } from '../../../actions';

let state;
let store;
const setup = (newProps) => {
  const props = {
    songId: 0,
    ...newProps,
  };
  const wrapper = shallow(
    <LikeContainer {...props} />,
    { context: { store } },
  ).dive();

  return {
    store,
    wrapper,
    props,
  };
};

describe('LikeContainer', () => {
  beforeEach(() => {
    store = configureMockStore([thunk])(state);
  });

  describe('like', () => {
    it('should like the song when like is clicked', () => {
      expect.spyOn(store, 'dispatch');

      const { wrapper } = setup();

      wrapper.dive().simulate('click');

      expect(store.dispatch).toHaveBeenCalledWith(rateSong());
    });
  });
});

