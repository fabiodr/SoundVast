import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import SongsContainer from './songsContainer';

let state;
const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  const store = configureMockStore()(state);
  const wrapper = shallow(
    <SongsContainer {...props} />,
    { context: { store } },
  ).dive();

  return {
    wrapper,
    props,
  };
};

describe('SongsContainer', () => {
  beforeEach(() => {
    state = {
      music: {
        songs: [
          {
            id: 0,
            name: 'bubble',
            artist: 'bubbleArtist',
            coverImageUrl: 'bubble.jpg',
            free: true,
          },
        ],
        hasMore: true,
      },
    };
  });

  it('getPlaylist should map songs into playlist', () => {
    const { wrapper } = setup();
    const getPlaylist = wrapper.prop('getPlaylist');
    const playlist = getPlaylist();
    const song = state.music.songs[0];

    expect(playlist).toEqual([{
      id: song.id,
      title: song.name,
      artist: song.artist,
      sources: {
        mp3: `${window.location.origin}/song/stream?id=${state.music.songs[0].id}`,
      },
      poster: song.coverImageUrl,
      free: song.free,
    }]);
  });
});
