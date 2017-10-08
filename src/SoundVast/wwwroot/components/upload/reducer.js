const defaultState = {
  audioFiles: [],
  liveStreams: [],
  coverImages: {},
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
    case 'REMOVE_MUSIC_FORM':
      return {
        ...state,
        audioFiles: removeForm(state.audioFiles, action.index),
      };
    case 'UPDATE_COVER_IMAGE': {
      const coverImages = { ...state.coverImages };

      coverImages[action.id] = action.file;
      coverImages[action.id].previewUrl = URL.createObjectURL(action.file);

      return {
        ...state,
        coverImages,
      };
    }
    case 'REMOVE_COVER_IMAGE': {
      const coverImages = [...state.coverImages];

      delete coverImages[action.id];

      return {
        ...state,
        coverImages,
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
    case 'REMOVE_LIVE_STREAM_FORM':
      return {
        ...state,
        liveStreams: removeForm(state.liveStreams, action.index),
      };
    default: return state;
  }
};
