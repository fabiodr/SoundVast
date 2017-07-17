export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_SOCIAL_LOGINS':
      return {
        ...state,
        loginProviders: action.loginProviders,
      };
    default: return state;
  }
};
