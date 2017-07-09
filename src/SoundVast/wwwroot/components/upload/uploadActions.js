import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';

export const getServerUploadProgress = (progressId, progressIndex) => (dispatch) => {
  const formData = new FormData();

  formData.set('progressId', progressId);

  setInterval(() => fetch('/upload/fetchUploadProgress', {
    method: 'post',
    body: formData,
    credentials: 'same-origin',
  }).then(response => response.json()).then((data) => {
    if (data.progressPercent !== null) {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: data.progressPercent,
        index: progressIndex,
      });
    }
  }), 100);
};

export const uploadFile = (file, progressIndex) => (dispatch) => {
  const formData = new FormData();
  const progressId = shortid.generate();

  formData.set('file', file);
  formData.set('progressId', progressId);

  fetchProgress('/upload/upload', {
    method: 'post',
    body: formData,
  }, {
    progress: (e) => {
      if (e.lengthComputable) {
        const progressPercent = parseInt((e.loaded / e.total) * 20, 10);

        dispatch({
          type: 'UPDATE_UPLOAD_PROGRESS',
          progressPercent,
          index: progressIndex,
        });
      }

      if (e.loaded === e.total) {
        getServerUploadProgress(progressId, progressIndex)(dispatch);
      }
    },
  });
};

export const uploadAudioFiles = files => (dispatch, getState) => {
  const stateFiles = getState().upload.audioFiles;

  files.forEach((file, i) => {
    const progressIndex = stateFiles.length + i;

    fetch(file.preview).then(response => response.blob()).then((blob) => {
      jsmediatags.read(blob, {
        onSuccess: (tag) => {
          const coverImageBytes = new Uint8Array(tag.tags.picture.data);
          const coverImageBlob = new Blob([coverImageBytes], { type: tag.tags.picture.format });
          const previewCoverImageUrl = URL.createObjectURL(coverImageBlob);
          const audioFiles = {
            id: shortid.generate(),
            artist: tag.tags.artist,
            album: tag.tags.album,
            previewCoverImageUrl,
            title: tag.tags.title,
          };

          dispatch({
            type: 'ADD_AUDIO_FILES',
            audioFiles,
          });

          uploadFile(file, progressIndex)(dispatch);
        },
        onError: () => {
          dispatch({
            type: 'ADD_AUDIO_FILES',
            audioFiles: {
              ...file,
              title: file.name,
            },
          });

          uploadFile(files, progressIndex)(dispatch);
        },
      });
    });
  });
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
