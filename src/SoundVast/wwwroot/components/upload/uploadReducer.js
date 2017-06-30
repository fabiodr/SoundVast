let fileKey = 0;

const defaultState = {
  files: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FILES': {
      action.files.forEach((file) => {
        const newFile = file;

        newFile.key = fileKey;
        fileKey += 1;
      });

      return {
        files: state.files.concat(action.files),
      };
    }
    case 'REMOVE_FILE': {
      const files = [...state.files];

      files.splice(action.index, 1);

      return {
        files,
      };
    }
    default: return state;
  }
};
