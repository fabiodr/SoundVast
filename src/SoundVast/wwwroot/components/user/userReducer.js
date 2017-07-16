export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_DETAILS':
      return {
        ...state,
        isAdmin: action.isAdmin,
        isLoggedIn: action.isLoggedIn,
        userName: action.userName,
      };
    default: return state;
  }
};
