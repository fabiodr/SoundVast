export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_UPLOADS':
      return {
        ...state,
        userAudios: action.userAudios,
      };
    default: return state;
  }
};
