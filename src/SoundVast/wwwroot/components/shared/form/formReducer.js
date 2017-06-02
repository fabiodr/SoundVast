export default (state = {}, action) => {
  switch (action.type) {
    case 'GENERATE_ANTI_FORGERY_TOKEN':
      return {
        antiForgeryToken: action.antiForgeryToken,
      };
    default: return state;
  }
};
