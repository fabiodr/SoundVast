import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';
import trimFileExtension from '../shared/utilities/trimFileExtension';

export const uploadFile = (jsonText, progressIndex) => (dispatch) => {
  const body = JSON.parse(jsonText);
  const progressId = shortid.generate();
  const eventSource = new EventSource(`upload/uploadProgress?progressId=${progressId}`);

  body.progressId = progressId;

  eventSource.onmessage = (e) => {
    const progressPercent = parseInt(e.data, 10);

    if (progressPercent === 100) {
      eventSource.close();
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent,
        index: progressIndex,
        message: 'Successfully uploaded.',
      });
    } else {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 50 + (progressPercent / 2),
        index: progressIndex,
        message: 'Uploading to SoundVast...',
      });
    }
  };

  fetch('/upload/upload', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      eventSource.close();
    }
  }).catch(() => eventSource.close());
};

export const tempStoreMp3File = (file, progressIndex) => (dispatch) => {
  const formData = new FormData();

  formData.set('file', file);

  fetchProgress('/upload/tempStoreMp3File', {
    method: 'post',
    body: formData,
  }, {
    readystatechange() {
      if (this.readyState === 4) {
        uploadFile(this.responseText, progressIndex)(dispatch);
      }
    },
  }, {
    load: () => {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 25,
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
      const audioFiles = {
        id: shortid.generate(),
      };

      jsmediatags.read(blob, {
        onSuccess: (tag) => {
          audioFiles.artist = tag.tags.artist;
          audioFiles.album = tag.tags.album;
          audioFiles.title = tag.tags.title;

          if (tag.tags.picture !== undefined) {
            const coverImageBytes = new Uint8Array(tag.tags.picture.data);
            const coverImageBlob = new Blob([coverImageBytes], { type: tag.tags.picture.format });
            const previewCoverImageUrl = URL.createObjectURL(coverImageBlob);

            audioFiles.previewCoverImageUrl = previewCoverImageUrl;
          }

          dispatch({
            type: 'ADD_AUDIO_FILES',
            audioFiles,
          });

          tempStoreMp3File(file, progressIndex)(dispatch);
        },
        onError: () => {
          audioFiles.title = trimFileExtension(file.name);

          dispatch({
            type: 'ADD_AUDIO_FILES',
            audioFiles,
          });

          tempStoreMp3File(file, progressIndex)(dispatch);
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
