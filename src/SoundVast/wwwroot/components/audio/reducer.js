export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      localStorage.setItem('showingSideBar', true);

      return {
        ...state,
        showingSideBar: true,
      };
    case 'HIDE_SIDEBAR':
      localStorage.setItem('showingSideBar', false);

      return {
        ...state,
        showingSideBar: false,
      };
    default: return state;
  }
};

