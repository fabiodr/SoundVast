import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import AudiosContainer from './container';

const musicAudios = [
  { id: 0, name: 'bubble.mp3', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
  { id: 1, name: 'kalimba.mp3', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
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
    <AudiosContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('MusicAudiosContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('musicAudios')).toEqual(musicAudios);
  });

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('hasMore')).toEqual(true);
  });
});
