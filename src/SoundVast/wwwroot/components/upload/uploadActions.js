import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';
import trimFileExtension from '../shared/utilities/trimFileExtension';

export const uploadFile = (jsonText, id) => (dispatch) => {
  const body = JSON.parse(jsonText);
  const eventSource = new EventSource(`upload/uploadProgress?progressId=${id}`);

  body.progressId = id;

  eventSource.onmessage = (e) => {
    const progressPercent = parseInt(e.data, 10);

    if (progressPercent === 100) {
      eventSource.close();
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent,
        message: 'Successfully uploaded.',
        id,
      });
    } else {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 50 + (progressPercent / 2),
        message: 'Uploading to SoundVast...',
        id,
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

export const tempStoreMp3File = (file, id) => (dispatch) => {
  const formData = new FormData();

  formData.set('file', file);

  fetchProgress('/upload/tempStoreMp3File', {
    method: 'post',
    body: formData,
  }, {
    readystatechange() {
      if (this.readyState === 4) {
        uploadFile(this.responseText, id)(dispatch);
      }
    },
  }, {
    load: () => {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 25,
        id,
        message: 'Converting to mp3...',
      });
    },
    progress: (e) => {
      if (e.lengthComputable) {
        const progressPercent = parseInt((e.loaded / e.total) * 25, 10);

        dispatch({
          type: 'UPDATE_UPLOAD_PROGRESS',
          progressPercent,
          id,
          message: 'Sending file to server...',
        });
      }
    },
  });
};

export const uploadAudioFiles = files => (dispatch) => {
  files.forEach((file) => {
    fetch(file.preview).then(response => response.blob()).then((blob) => {
      const audioFile = {
        id: shortid.generate(),
      };

      jsmediatags.read(blob, {
        onSuccess: (tag) => {
          audioFile.artist = tag.tags.artist;
          audioFile.album = tag.tags.album;
          audioFile.title = tag.tags.title;

          if (tag.tags.picture !== undefined) {
            const coverImageBytes = new Uint8Array(tag.tags.picture.data);
            const coverImageBlob = new Blob([coverImageBytes], { type: tag.tags.picture.format });
            const previewCoverImageUrl = URL.createObjectURL(coverImageBlob);

            audioFile.previewCoverImageUrl = previewCoverImageUrl;
          }

          dispatch({
            type: 'ADD_AUDIO_FILE',
            audioFile,
          });

          tempStoreMp3File(file, audioFile.id)(dispatch);
        },
        onError: () => {
          audioFile.title = trimFileExtension(file.name);

          dispatch({
            type: 'ADD_AUDIO_FILE',
            audioFile,
          });

          tempStoreMp3File(file, audioFile.id)(dispatch);
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
