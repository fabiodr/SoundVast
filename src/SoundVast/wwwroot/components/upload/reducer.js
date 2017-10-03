import shortId from 'shortid';
import filePlaceholder from '../../images/logo/icon/SoundVast_Icon_310x310.png';

const liveStreamId = shortId.generate();
const defaultState = {
  audioFiles: [],
  coverImageFiles: {
    [liveStreamId]: {
      preview: filePlaceholder,
    },
  },
  liveStreams: [{
    id: liveStreamId,
  }],
};

const removeForm = (forms, index) => {
  const newForms = [...forms];

  newForms.splice(index, 1);

  return newForms;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_AUDIO_FILE': {
      const coverImageFiles = { ...state.coverImageFiles };

      coverImageFiles[action.audioFile.id] = {
        preview: filePlaceholder,
      };

      return {
        ...state,
        audioFiles: state.audioFiles.concat([action.audioFile]),
        coverImageFiles,
      };
    }
    case 'REMOVE_AUDIO_FILE':
      return {
        ...state,
        audioFiles: removeForm(state.audioFiles, action.index),
      };
    case 'UPDATE_COVER_IMAGE_FILE': {
      const coverImageFiles = { ...state.coverImageFiles };

      coverImageFiles[action.id] = action.file;

      return {
        ...state,
        coverImageFiles,
      };
    }
    case 'REMOVE_COVER_IMAGE_FILE': {
      const audioFiles = [...state.audioFiles];

      audioFiles[action.index].coverImagePreview = null;

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
    case 'ADD_LIVE_STREAM':
      return {
        ...state,
        liveStreams: state.liveStreams.concat([action.liveStream]),
      };
    case 'REMOVE_LIVE_STREAM':
      return {
        ...state,
        liveStreams: removeForm(state.liveStreams, action.index),
      };
    case 'SUBMIT_PENDING': {
      const audioFiles = [...state.audioFiles];

      audioFiles[action.index].isSubmitting = action.isSubmitting;

      return {
        ...state,
        audioFiles,
      };
    }
    default: return state;
  }
};
