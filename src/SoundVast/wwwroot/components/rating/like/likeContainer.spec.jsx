import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import thunk from 'redux-thunk';

import LikeContainer from './container';
import LikeIcon from '../../../../images/ratingControls/like.svg';
import { rateSong } from '../../actions';

let store;
const setup = (newProps) => {
  const props = {
    id: 0,
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
  let state;

  beforeEach(() => {
    state = {
      music: {
        ratings: {
          0: { audioId: 0, liked: true },
          1: { audioId: 0, liked: false },
          2: { audioId: 1, liked: true },
        },
      },
    };
    store = configureMockStore([thunk])(state);
  });

  it('should like the audio when like icon is clicked', () => {
    expect.spyOn(store, 'dispatch');

    const { wrapper } = setup();

    wrapper.dive().find(LikeIcon).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(rateSong());
  });

  it('passes down likes', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('likes')).toBe(1);
  });
});

