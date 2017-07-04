const fetchFilesMetadata = formData =>
  fetch('/upload/fetchFilesMetadata', {
    method: 'post',
    body: formData,
  });

export const uploadAudioFiles = (files) => {
  const formData = new FormData();

  files.forEach(file => formData.append('files', file));

  fetchFilesMetadata(formData);

  // return dispatch =>
  //   fetch('/upload/upload', {
  //     method: 'post',
  //     body: formData,
  //   }).then((response) => {
  //     if (response.ok) {
  //       dispatch({
  //         type: 'ADD_AUDIO_FILES',
  //         files,
  //       });
  //     }
  //   });
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
