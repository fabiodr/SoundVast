import fetchProgress from '../shared/polyfills/fetchProgress';

const fetchFilesMetadata = formData => dispatch =>
  fetch('/upload/fetchFilesMetadata', {
    method: 'post',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      return response.json().then((data) => {
        dispatch({
          type: 'ADD_AUDIO_FILES',
          audioFiles: data.audioFileMetadatas,
        });
      });
    }
    return null;
  });

export const uploadAudioFiles = files => (dispatch) => {
  const formData = new FormData();

  files.forEach(file => formData.append('files', file));

  fetchProgress('/upload/upload', {
    method: 'post',
    body: formData,
  }, (e) => {
    const progressPercent = (e.loaded / e.total) * 100;

    dispatch({
      type: 'UPLOAD_PROGRESS',
      progressPercent: parseInt(progressPercent, 10),
    });
  });

  return fetchFilesMetadata(formData)(dispatch);
};

export const removeAudioFile = index => ({
  type: 'REMOVE_AUDIO_FILE',
  index,
});

export const updateCoverImageFile = (file, index) => ({
  type: 'UPDATE_COVER_IMAGE_FILE',
  preview: file.preview,
  index,
});

export const removeCoverImageFile = index => ({
  type: 'REMOVE_COVER_IMAGE_FILE',
  index,
});
