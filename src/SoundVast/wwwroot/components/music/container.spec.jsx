import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import MusicContainer from './container';

const musicAudios = [
  { id: 0, genre: 15, name: 'bubble.mp3', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
  { id: 1, genre: 10, name: 'kalimba.mp3', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
];
const store = configureMockStore()({
  music: {
    musicAudios,
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

    const expectedMusicAudios = musicAudios.map((audio) => {
      const newAudio = { ...audio };

      delete newAudio.genre;

      return newAudio;
    });

    expect(wrapper.prop('musicAudios')).toEqual(expectedMusicAudios);
    expect(wrapper.prop('hasMore')).toEqual(true);
  });
});
