import { showPopup } from '../shared/popup/actions';

export const showCreatedPlaylistPopup = name => showPopup(`${name} playlist has been created.`);
