import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import expect from 'expect';
import fetchMock from 'fetch-mock';
import { constants } from 'react-jplaylist';
import { constants as jPlayerConstants } from 'react-jplayer';

import SongContainer from './container';

let state;
const setup = (newProps) => {
  const props = {
    id: 0,
    index: 0,
    name: 'test',
    artist: 'kalimba',
    coverImageUrl: 'test.jpg',
    ...newProps,
  };
  const store = configureMockStore([thunk])(state);
  const wrapper = shallow(
    <SongContainer {...props} />,
    { context: { store } },
  ).dive().dive();

  const actions = store.getActions();

  return {
    wrapper,
    props,
    actions,
  };
};

describe('SongContainer', () => {
  beforeEach(() => {
    state = {
      music: {
        songs: [{
          id: 0,
          name: 'bubble',
          artist: 'kalimba',
          audioUrl: 'www.test.mp3',
          coverImageUrl: 'www.test.jpg',
          free: true,
        }],
      },
      jPlayers: {
        FooterPlaylist: {
          media: {},
        },
      },
      jPlaylists: {
        FooterPlaylist: {
          playlist: [{
            id: 0,
            sources: {
              mp3: 'test.mp3',
            },
          }],
        },
      },
    };
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  describe('playOnClick', () => {
    it('should play when paused', () => {
      state.jPlayers.FooterPlaylist.paused = true;

      const { wrapper, actions } = setup();

      wrapper.find('.imageContainer').simulate('click');

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        index: 0,
        type: constants.actionNames.PLAY,
      });
    });

    it('should play when isCurrent is false', () => {
      const { wrapper, actions } = setup();

      wrapper.find('.imageContainer').simulate('click');

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        index: 0,
        type: constants.actionNames.PLAY,
      });
    });

    it('should pause when not paused and isCurrent is true', () => {
      state.jPlayers.FooterPlaylist.media.id = 0;

      const { wrapper, actions } = setup();

      wrapper.find('.imageContainer').simulate('click');

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        type: jPlayerConstants.actionNames.PAUSE,
        time: undefined,
      });
    });

    it('should set the playlist when the playlist is empty', () => {
      state.jPlaylists.FooterPlaylist.playlist = [];

      const { wrapper, actions } = setup();

      wrapper.find('.imageContainer').simulate('click');

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        playlist: [{
          id: 0,
          title: 'bubble',
          artist: 'kalimba',
          sources: {
            mp3: `${window.location.origin}/song/stream?id=${state.music.songs[0].id}`,
          },
          poster: 'www.test.jpg',
          free: true,
        }],
        type: constants.actionNames.SET_PLAYLIST,
      });
    });
  });
});

