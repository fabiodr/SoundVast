const defaultState = {
  audioFiles: [],
  progressPercents: [],
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
        audioFiles: state.audioFiles.concat(action.audioFiles),
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
    case 'ADD_UPLOAD_PROGRESS': {
      return {
        ...state,
        progressPercents: Object.assign([], state.progressPercents, action.progressPercents),
      };
    }
    default: return state;
  }
};
