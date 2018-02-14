import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import trimFileExtension from '../shared/utilities/trimFileExtension';

export const removeCoverImage = index => ({
  type: 'REMOVE_PREVIEW_IMAGE',
  index,
});

export const uploadCoverImage = (id, file, change) => dispatch =>
  fetch.postForm('/upload/uploadCoverImage')({ file })
    .then((json) => {
      change('imagePath', json.imagePath);

      return dispatch({
        type: 'UPDATE_COVER_IMAGE',
        id,
        previewUrl: URL.createObjectURL(file),
        imagePath: json.imagePath,
      });
    });

const setCoverImagePlaceholder = id => dispatch =>
  fetch.get('/upload/getPlaceholderImage')
    .then(json => dispatch({
      type: 'UPDATE_COVER_IMAGE',
      id,
      imagePath: json.imagePath,
    }));

export const removeLiveStreamForm = index => ({
  type: 'REMOVE_LIVE_STREAM_FORM',
  index,
});

export const addLiveStream = () => (dispatch) => {
  const id = shortid.generate();

  dispatch(setCoverImagePlaceholder(id));

  return dispatch({
    type: 'ADD_LIVE_STREAM',
    liveStream: {
      id,
    },
  });
};
