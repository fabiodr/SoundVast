import { showPopup } from '../shared/popup/actions';

export const showCreatedPlaylistPopup = name => showPopup(`${name} playlist has been created.`);

export const setCurrentPlaylist = id => ({
  type: 'SET_CURRENT_PLAYLIST',
  currentPlaylistId: id,
});
