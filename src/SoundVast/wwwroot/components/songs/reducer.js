import { normalize, schema } from 'normalizr';

const rating = new schema.Entity('ratings');
const song = new schema.Entity('songs', {
  ratings: [rating],
});
const songList = [song];
const defaultState = {
  songs: [],
  hasMore: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS': {
      const data = state.songs.concat(action.songs);
      const normalizedSongs = normalize(data, songList);
      const songs = normalizedSongs.result.map(x => normalizedSongs.entities.songs[x]);

      return {
        ...state,
        songs,
        ratings: normalizedSongs.entities.ratings,
        hasMore: action.hasMore,
      };
    }
    case 'RATE_SONG': {
      const ratings = { ...state.ratings };

      ratings[action.rating.id] = action.rating;

      return {
        ...state,
        ratings,
      };
    }
    default: return state;
  }
};
