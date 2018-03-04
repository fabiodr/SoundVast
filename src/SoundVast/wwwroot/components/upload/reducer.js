const defaultState = {
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
    case 'UPDATE_COVER_IMAGE': {
      const coverImages = { ...state.coverImages };

      coverImages[action.id] = {
        previewUrl: action.previewUrl,
      };

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
