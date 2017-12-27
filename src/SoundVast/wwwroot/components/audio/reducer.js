import { constants, reducer } from 'react-jplayer';
import reduceReducers from 'reduce-reducers';

import updatePlayCountMutation from './updatePlayCountMutation';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

export default reduceReducers(
  reducer,
  (state = {}, action) => {
    switch (action.type) {
      case constants.actionNames.PLAY: {
        const hasPlayed = normalizeBoolean(localStorage.getItem(state[action.id].media.id));

        if (!hasPlayed) {
          updatePlayCountMutation(state[action.id].media.id);
        }

        localStorage.setItem(state[action.id].media.id, true);
        return state;
      }
      default: return state;
    }
  },
);
