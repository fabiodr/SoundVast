import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import { constants } from 'react-jplaylist';

import SongContainer from './container';

const setup = (newProps) => {
  const props = {
    name: 'test',
    artist: 'kalimba',
    coverImageUrl: 'test.jpg',
    ...newProps,
  };
  const store = configureMockStore()();
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
  describe('songPlayOnClick', () => {
    it('should select the current song from the playlist', () => {
      const index = 1;
      const { wrapper, store } = setup({ index });

      wrapper.find('.imageContainer').simulate('click');

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        id: 'FooterPlaylist',
        index,
        type: constants.actionNames.PLAY,
      });
    });
  });
});
