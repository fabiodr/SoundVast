import shortid from 'shortid';

export const removeCoverImage = index => ({
  type: 'REMOVE_PREVIEW_IMAGE',
  index,
});

export const previewImage = (id, file) => dispatch => dispatch({
  type: 'UPDATE_COVER_IMAGE',
  id,
  previewUrl: URL.createObjectURL(file),
});

export const uploadCoverImage = file =>
  fetch.postForm('/upload/uploadCoverImage')({ file })
    .then(json => json.coverImageName);

export const removeLiveStreamForm = index => ({
  type: 'REMOVE_LIVE_STREAM_FORM',
  index,
});

export const addLiveStream = () => (dispatch) => {
  const id = shortid.generate();

  return dispatch({
    type: 'ADD_LIVE_STREAM',
    liveStream: {
      id,
    },
  });
};
