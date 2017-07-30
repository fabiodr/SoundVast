import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import SongsContainer from './container';

const songs = [
  { id: 0, name: 'bubble.mp3', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
  { id: 1, name: 'kalimba.mp3', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
];
const store = configureMockStore()({
  songs: {
    songs,
    hasMore: true,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <SongsContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('SongsContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('songs')).toEqual(songs);
  });

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('hasMore')).toEqual(true);
  });
});
