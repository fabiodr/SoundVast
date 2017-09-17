import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import { constants } from 'react-jplaylist';
import { constants as jPlayerConstants } from 'react-jplayer';

import SongContainer from './container';

let state;
const setup = (newProps) => {
  const props = {
    id: 0,
    name: 'test',
    artist: 'kalimba',
    coverImageUrl: 'test.jpg',
    ...newProps,
  };
  const store = configureMockStore()(state);
  const wrapper = shallow(
    <SongContainer {...props} />,
    { context: { store } },
  ).dive().dive();

  return {
    wrapper,
    props,
    store,
  };
};

describe('SongContainer', () => {
  beforeEach(() => {
    state = {
      jPlayers: {
        FooterPlaylist: {
          media: {},
        },
      },
      jPlaylists: {
        FooterPlaylist: {},
      },
    };
  });

  describe('togglePlay', () => {
    it('should play when paused', () => {
      state.jPlayers.FooterPlaylist.paused = true;

      const { wrapper, props, store } = setup();

      wrapper.find('.imageContainer').simulate('click');

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        index: props.index,
        type: constants.actionNames.PLAY,
      });
    });

    it('should play when isCurrent is false', () => {
      const { wrapper, props, store } = setup();

      wrapper.find('.imageContainer').simulate('click');

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        index: props.index,
        type: constants.actionNames.PLAY,
      });
    });

    it('should pause when not paused and isCurrent is true', () => {
      state.jPlayers.FooterPlaylist.media.id = 0;

      const { wrapper, store } = setup();

      wrapper.find('.imageContainer').simulate('click');

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        type: jPlayerConstants.actionNames.PAUSE,
        time: undefined,
      });
    });
  });
});
