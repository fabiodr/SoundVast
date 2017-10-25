import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';
import trimFileExtension from '../shared/utilities/trimFileExtension';
import notOkError from '../shared/fetch/notOkError/notOkError';
import validationError from '../shared/fetch/validationError/validationError';
import { showGenericErrorPopup } from '../shared/popup/actions';

const coverImagePlaceholderPath = '../../images/logo/icon/SV_Icon.svg';

export const uploadMp3 = (jsonText, id) => (dispatch) => {
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

  fetch('/upload/uploadMp3', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(notOkError)
    .then((response) => {
      if (!response.ok) {
        eventSource.close();
      }
    })
    .catch((error) => {
      dispatch(showGenericErrorPopup(error));
      eventSource.close();
    });
};

export const convertToMp3 = (file, id) => (dispatch) => {
  const formData = new FormData();

  formData.set('file', file);

  fetchProgress('/upload/convertToMp3', {
    method: 'post',
    body: formData,
  }, {
      readystatechange() {
        if (this.readyState === 4) {
          dispatch(uploadMp3(this.responseText, id));
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

export const removeCoverImage = index => ({
  type: 'REMOVE_PREVIEW_IMAGE',
  index,
});

export const uploadCoverImage = (id, file) => (dispatch) => {
  const formData = new FormData();

  formData.set('file', file);

  return fetch('/upload/uploadCoverImage', {
    method: 'post',
    body: formData,
  }).then(validationError)
    .then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'UPDATE_COVER_IMAGE',
      id,
      previewUrl: URL.createObjectURL(file),
      imagePath: json.imagePath,
    }))
    .catch(error => dispatch(showGenericErrorPopup(error)));
};

const setCoverImagePlaceholder = id => dispatch =>
  fetch(coverImagePlaceholderPath)
    .then(res => res.blob())
    .then((blob) => {
      const file = new File([blob], 'SoundVast', { type: blob.type });

      return dispatch(uploadCoverImage(id, file));
    });

export const uploadAudioFiles = files => (dispatch) => {
  files.forEach((file) => {
    fetch(file.preview)
      .then(notOkError)
      .then(response => response.blob())
      .then((blob) => {
        const audioFile = {
          id: shortid.generate(),
        };

        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            audioFile.artist = tag.tags.artist;
            audioFile.album = tag.tags.album;
            audioFile.title = tag.tags.title;

            dispatch({
              type: 'ADD_AUDIO_FILE',
              audioFile,
            });

            if (tag.tags.picture !== undefined) {
              const coverImageBytes = new Uint8Array(tag.tags.picture.data);
              const coverImage = new File([coverImageBytes], audioFile.title, {
                type: tag.tags.picture.format,
              });

              dispatch(uploadCoverImage(audioFile.id, coverImage));
            } else {
              dispatch(setCoverImagePlaceholder(audioFile.id));
            }

            dispatch(convertToMp3(file, audioFile.id));
          },
          onError: (error) => {
            console.log(error); // eslint-disable-line no-console

            audioFile.title = trimFileExtension(file.name);

            dispatch({
              type: 'ADD_AUDIO_FILE',
              audioFile,
            });

            dispatch(setCoverImagePlaceholder(audioFile.id));
            dispatch(convertToMp3(file, audioFile.id));
          },
        });
      })
      .catch(error => dispatch(showGenericErrorPopup(error)));
  });
};

export const removeMusicForm = index => ({
  type: 'REMOVE_MUSIC_FORM',
  index,
});

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

// const submit = (url, id, { __RequestVerificationToken, ...values }) => dispatch =>
//   dispatch(uploadCoverImage(id)).then(coverImageUrl =>
//     fetch(url, {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         RequestVerificationToken: __RequestVerificationToken,
//       },
//       body: JSON.stringify({
//         ...values,
//         coverImageUrl,
//       }),
//       credentials: 'same-origin',
//     }).then(validationError)
//       .then(notOkError)
//       .catch(error => dispatch(showGenericErrorPopup(error))));

// export const submitLiveStream = (id, values) => dispatch => dispatch(submit('/upload/saveLiveStream', id, values));

// export const submitFile = (id, values) => dispatch => dispatch(submit('/upload/saveSong', id, values));
