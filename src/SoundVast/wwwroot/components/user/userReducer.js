const defaultState = {
  isAdmin: false,
  isLoggedIn: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_USER_DETAILS':
      return {
        isAdmin: action.isAdmin,
        isLoggedIn: action.isLoggedIn,
        userName: action.userName,
      };
    default: return state;
  }
};
