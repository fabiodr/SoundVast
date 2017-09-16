import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { constants } from 'react-jplaylist';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('songActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should fetch songs', (done) => {
    const response = {
      songs: [{
        id: 0,
        name: 'bubble',
        artist: 'kalimba',
        audioUrl: 'www.test.mp3',
        coverImageUrl: 'www.test.jpg',
        free: true,
      }],
      hasMore: true,
    };

    fetchMock.postOnce('/song/fetchSongs', response);

    store.dispatch(actions.fetchSongs()).then(() => {
      expect(calledActions[0]).toEqual({
        type: 'FETCH_SONGS',
        songs: response.songs,
        hasMore: response.hasMore,
      });
      expect(calledActions[1]).toEqual({
        id: 'FooterPlaylist',
        playlist: [{
          id: 0,
          title: 'bubble',
          artist: 'kalimba',
          sources: {
            mp3: `${window.location.origin}/song/stream?id=${response.songs[0].id}`,
          },
          poster: 'www.test.jpg',
          free: true,
        }],
        type: constants.actionNames.SET_PLAYLIST,
      });
      done();
    });
  });
});
