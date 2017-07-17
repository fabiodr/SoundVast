import filePlaceholder from '../../images/logo/icon/SoundVast_Icon_310x310.png';

const defaultState = {
  audioFiles: [],
};

const removeFile = (files, index) => {
  const newFiles = [...files];

  newFiles.splice(index, 1);

  return newFiles;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_AUDIO_FILE':
      return {
        ...state,
        audioFiles: state.audioFiles.concat([{
          previewCoverImageUrl: filePlaceholder,
          ...action.audioFile,
        }]),
      };
    case 'REMOVE_AUDIO_FILE':
      return {
        ...state,
        audioFiles: removeFile(state.audioFiles, action.index),
      };
    case 'UPDATE_COVER_IMAGE_FILE': {
      const audioFiles = [...state.audioFiles];

      audioFiles[action.index].previewCoverImageUrl = action.preview;

      return {
        ...state,
        audioFiles,
      };
    }
    case 'REMOVE_COVER_IMAGE_FILE': {
      const audioFiles = [...state.audioFiles];

      audioFiles[action.index].previewCoverImageUrl = null;

      return {
        ...state,
        audioFiles,
      };
    }
    case 'UPDATE_UPLOAD_PROGRESS': {
      const audioFiles = [...state.audioFiles];
      const audioFile = audioFiles.find(x => x.id === action.id);

      audioFile.progress = {
        value: action.progressPercent,
        message: action.message,
      };

      return {
        ...state,
        audioFiles,
      };
    }
    default: return state;
  }
};