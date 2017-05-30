const defaultState = {
  isAdmin: false,
  isLoggedIn: false,
  userName: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_DETAILS':
      return {
        isAdmin: action.isAdmin,
        isLoggedIn: action.isLoggedIn,
        userName: action.userName,
      };
    default: return state;
  }
};
