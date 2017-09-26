import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import thunk from 'redux-thunk';

import DislikeContainer from './container';
import DislikeIcon from '../../../images/ratingControls/dislike.svg';
import { rateAudio } from '../actions';

let store;
const setup = (newProps) => {
  const props = {
    audioId: 0,
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
  let state;

  beforeEach(() => {
    state = {
      rating: {
        ratings: {
          0: { audioId: 0, liked: true },
          1: { audioId: 0, liked: false },
          2: { audioId: 1, liked: false },
        },
      },
    };
    store = configureMockStore([thunk])(state);
  });

  it('should dislike the song when dislike is clicked', () => {
    expect.spyOn(store, 'dispatch');

    const { wrapper } = setup();

    wrapper.dive().find(DislikeIcon).simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(rateAudio());
  });

  it('passes down dislikes', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('dislikes')).toBe(1);
  });
});

