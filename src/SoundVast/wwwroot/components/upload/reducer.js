import shortId from 'shortid';

const liveStreamId = shortId.generate();
const defaultState = {
  audioFiles: [],
  liveStreams: [{
    id: liveStreamId,
  }],
  coverImageFiles: {},
};

const removeForm = (forms, index) => {
  const newForms = [...forms];

  newForms.splice(index, 1);

  return newForms;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_AUDIO_FILE': {
      return {
        ...state,
        audioFiles: state.audioFiles.concat([action.audioFile]),
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
      const coverImageFiles = [...state.coverImageFiles];

      delete coverImageFiles[action.id];

      return {
        ...state,
        coverImageFiles,
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
    default: return state;
  }
};
