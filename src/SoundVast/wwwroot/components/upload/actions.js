import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import trimFileExtension from '../shared/utilities/trimFileExtension';

const coverImagePlaceholderPath = '../../images/logo/icon/SV_Icon.svg';

export const uploadSong = (id, file) => dispatch =>
  fetch.fetchProgress('/upload/uploadSong', {
    progress: (e) => {
      if (e.lengthComputable) {
        const progressPercent = parseInt((e.loaded / e.total) * 100, 10);

        dispatch({
          type: 'UPDATE_UPLOAD_PROGRESS',
          progressPercent,
          id,
          message: 'Uploading file...',
        });
      }
    },
  })({ file });

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

const readMediaTags = blob =>
  new Promise((resolve, reject) => jsmediatags.read(blob, {
    onSuccess: (tag) => {
      let coverImage = null;

      if (tag.tags.picture !== undefined) {
        const coverImageBytes = new Uint8Array(tag.tags.picture.data);

        coverImage = new File([coverImageBytes], tag.tags.title, {
          type: tag.tags.picture.format,
        });
      }

      resolve({
        tags: {
          artist: tag.tags.artist,
          album: tag.tags.album,
          title: tag.tags.title || trimFileExtension(blob.name),
        },
        coverImage,
      });
    },
    onError: (error) => {
      console.log(error); // eslint-disable-line no-console

      reject(error);
    },
  }));

export const uploadAudioFiles = files => (dispatch) => {
  files.forEach((file) => {
    fetch.get(file.preview, { response: 'blob' })
      .then((blob) => {
        const id = shortid.generate();
        const mediaTagsPromise = readMediaTags(blob);

        mediaTagsPromise.then((properties) => {
          if (properties.coverImage !== null) {
            dispatch(uploadCoverImage(id, properties.coverImage));
          } else {
            dispatch(setCoverImagePlaceholder(id));
          }

          dispatch({
            type: 'ADD_AUDIO_FILE',
            audioFile: {
              id,
              ...properties.tags,
            },
          });

          dispatch(uploadSong(id, file));
        });

        mediaTagsPromise.catch(() => {
          const title = trimFileExtension(file.name);

          dispatch({
            type: 'ADD_AUDIO_FILE',
            audioFile: {
              id,
              title,
            },
          });

          dispatch(setCoverImagePlaceholder(id));
          dispatch(uploadSong(id, file));
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
