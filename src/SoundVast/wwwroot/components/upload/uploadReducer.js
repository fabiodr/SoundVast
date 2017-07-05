let fileKey = 0;

const defaultState = {
  audioFiles: [],
};

const addFiles = (files, newFiles) => {
  newFiles.forEach((file) => {
    const newFile = file;

    newFile.key = fileKey;
    fileKey += 1;
  });

  return files.concat(newFiles);
};

const removeFile = (files, index) => {
  const newFiles = [...files];

  newFiles.splice(index, 1);

  return newFiles;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_AUDIO_FILES':
      return {
        ...state,
        audioFiles: addFiles(state.audioFiles, action.audioFiles),
      };
    case 'REMOVE_AUDIO_FILE':
      return {
        ...state,
        audioFiles: removeFile(state.audioFiles, action.index),
      };
    case 'UPDATE_COVER_IMAGE_FILE': {
      const audioFiles = [...state.audioFiles];

      audioFiles[action.index].previewCoverImage = action.preview;

      return {
        ...state,
        audioFiles,
      };
    }
    case 'REMOVE_COVER_IMAGE_FILE': {
      const audioFiles = [...state.audioFiles];

      audioFiles[action.index].previewCoverImage = null;

      return {
        ...state,
        audioFiles,
      };
    }
    default: return state;
  }
};
