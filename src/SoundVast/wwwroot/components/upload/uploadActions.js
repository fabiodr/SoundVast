import jsmediatags from 'jsmediatags';
import fs from 'fs';

export const uploadAudioFiles = (files) => {
  const formData = new FormData();

//   fs.read("./Miaow-07-Bubble.m4a", () => {
// debugger
//   });

  files.forEach((file) => {
    formData.append('files', file);

    jsmediatags.read("./Miaow-07-Bubble.m4a", {
      onSuccess: (tag) => {
        console.log(tag);
      },
      onError: (error) => {
        console.log(':(', error.type, error.info);
      },
    });
  });

  return dispatch =>
    fetch('/upload/upload', {
      method: 'post',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        dispatch({
          type: 'ADD_AUDIO_FILES',
          files,
        });
      }
    });
};

export const removeAudioFile = index => ({
  type: 'REMOVE_AUDIO_FILE',
  index,
});

export const updateCoverImageFile = (file, index) => ({
  type: 'UPDATE_COVER_IMAGE_FILE',
  file,
  index,
});

export const removeCoverImageFile = index => ({
  type: 'REMOVE_COVER_IMAGE_FILE',
  index,
});
