import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';

export const uploadFile = (body, progressIndex) => dispatch =>
  fetch('/upload/upload', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }).then((response) => {
    if (response.ok) {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 100,
        index: progressIndex,
        message: 'Successfully uploaded file.',
      });
    }
  });

export const tempStoreMp3File = (file, progressIndex) => (dispatch) => {
  const formData = new FormData();

  formData.set('file', file);

  fetchProgress('/upload/tempStoreMp3File', {
    method: 'post',
    body: formData,
  }, {
    readystatechange() {
      if (this.readyState === 4) {
        dispatch({
          type: 'UPDATE_UPLOAD_PROGRESS',
          progressPercent: 75,
          index: progressIndex,
          message: 'Uploading to SoundVast...',
        });
        uploadFile(this.responseText, progressIndex)(dispatch);
      }
    },
  }, {
    load: () => {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 50,
        index: progressIndex,
        message: 'Converting to mp3...',
      });
    },
    progress: (e) => {
      if (e.lengthComputable) {
        const progressPercent = parseInt((e.loaded / e.total) * 25, 10);

        dispatch({
          type: 'UPDATE_UPLOAD_PROGRESS',
          progressPercent,
          index: progressIndex,
          message: 'Sending file to server...',
        });
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

          tempStoreMp3File(file, progressIndex)(dispatch);
        },
        onError: () => {
          dispatch({
            type: 'ADD_AUDIO_FILES',
            audioFiles: {
              ...file,
              title: file.name,
            },
          });

          tempStoreMp3File(files, progressIndex)(dispatch);
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
