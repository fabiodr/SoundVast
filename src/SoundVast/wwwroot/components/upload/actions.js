import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import trimFileExtension from '../shared/utilities/trimFileExtension';

const coverImagePlaceholderPath = '../../images/logo/icon/SV_Icon.svg';

export const uploadSong = file => () => fetch.postForm('/upload/uploadSong', { response: 'response' })({ file });

export const removeCoverImage = index => ({
  type: 'REMOVE_PREVIEW_IMAGE',
  index,
});

export const uploadCoverImage = (id, file) => dispatch =>
  fetch.postForm('/upload/uploadCoverImage')({ file })
    .then(json => dispatch({
      type: 'UPDATE_COVER_IMAGE',
      id,
      previewUrl: URL.createObjectURL(file),
      imagePath: json.imagePath,
    }));

const setCoverImagePlaceholder = id => dispatch =>
  fetch.get(coverImagePlaceholderPath, { response: 'blob' })
    .then((blob) => {
      const file = new File([blob], 'SoundVast', { type: blob.type });

      return dispatch(uploadCoverImage(id, file));
    });

export const uploadAudioFiles = files => (dispatch) => {
  files.forEach((file) => {
    fetch.get(file.preview, { response: 'blob' })
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

            dispatch(uploadSong(file));
          },
          onError: (error) => {
            console.log(error); // eslint-disable-line no-console

            audioFile.title = trimFileExtension(file.name);

            dispatch({
              type: 'ADD_AUDIO_FILE',
              audioFile,
            });

            dispatch(setCoverImagePlaceholder(audioFile.id));
            dispatch(uploadSong(file));
          },
        });
      });
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
