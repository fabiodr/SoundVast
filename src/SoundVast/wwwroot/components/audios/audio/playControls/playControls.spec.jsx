import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';

import Play from './play';
import PlayControlsContainer from './playControlsContainer';

let state;

const setup = (newProps) => {
  const props = {
    isCurrent: false,
    ...newProps,
  };
  const store = configureMockStore()(state);
  const wrapper = shallow(
    <PlayControlsContainer {...props} />,
    { context: { store } },
  ).dive();

  return {
    wrapper,
    props,
    store,
  };
};

describe('PlayControlsContainer', () => {
  beforeEach(() => {
    state = {
      jPlayers: {
        FooterPlaylist: {},
      },
      jPlaylists: {
        FooterPlaylist: {},
      },
    };
  });

  it('sets hasPlayed to true when paused changes to false', () => {
    state.jPlayers.FooterPlaylist.paused = true;

    const { wrapper } = setup();

    wrapper.setProps({ paused: false });

    const instance = wrapper.instance();

    expect(instance.state.hasPlayed).toBe(true);
  });

  describe('Play', () => {
    it('renders when paused is true', () => {
      state.jPlayers.FooterPlaylist.paused = true;

      const { wrapper } = setup({ isCurrent: true });

      expect(wrapper.type()).toBe(Play);
    });

    it('renders when isCurrent is not true', () => {
      const { wrapper } = setup();

      expect(wrapper.type()).toBe(Play);
    });
  });

  describe('Pause', () => {
    it('renders when paused is not true and isCurrent is true', () => {
      const { wrapper } = setup({ isCurrent: true });

      expect(wrapper.hasClass('pause')).toBe(true);
    });
  });
});
