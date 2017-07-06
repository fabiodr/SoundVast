import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';

export const fetchFilesMetadata = files => (dispatch) => {
  const formData = new FormData();

  files.forEach(file => formData.append('files', file));

  return fetch('/upload/fetchFilesMetadata', {
    method: 'post',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      return response.json().then((data) => {
        const audioFiles = data.audioFileMetadatas.map(audioFileMetadata => ({
          ...audioFileMetadata,
          id: shortid.generate(),
        }));

        dispatch({
          type: 'ADD_AUDIO_FILES',
          audioFiles,
        });
      });
    }
    return null;
  });
};

export const uploadAudioFiles = files => (dispatch) => {
  const formData = new FormData();
  const progressPercents = [];

  files.forEach((file, i) => {
    formData.set('file', file);
    const id = shortid.generate();

    fetchProgress('/upload/upload', {
      method: 'post',
      body: formData,
    }, {
      progress: (e) => {
        if (e.lengthComputable) {
          const progressPercent = parseInt((e.loaded / e.total) * 100, 10);

          progressPercents[i] = {
            value: progressPercent,
            id,
          };

          dispatch({
            type: 'ADD_UPLOAD_PROGRESS',
            progressPercents,
          });
        }
      },
    });
  });

  return fetchFilesMetadata(files)(dispatch);
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
