import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import thunk from 'redux-thunk';

import DislikeContainer from './container';
import { rateSong } from '../actions';

let state;
let store;
const setup = (newProps) => {
  const props = {
    songId: 0,
    ...newProps,
  };
  const wrapper = shallow(
    <DislikeContainer {...props} />,
    { context: { store } },
  ).dive();

  return {
    store,
    wrapper,
    props,
  };
};

describe('DislikeContainer', () => {
  beforeEach(() => {
    store = configureMockStore([thunk])(state);
  });

  describe('dislike', () => {
    it('should dislike the song when dislike is clicked', () => {
      expect.spyOn(store, 'dispatch');

      const { wrapper } = setup();

      wrapper.dive().simulate('click');

      expect(store.dispatch).toHaveBeenCalledWith(rateSong());
    });
  });
});

