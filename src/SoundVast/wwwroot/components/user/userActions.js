import reqwest from 'reqwest';

export const getUserDetails = () => dispatch =>
reqwest({
  url: 'account/userdetails',
  method: 'post',
  success: (data) => {
    dispatch({
      type: 'USER_DETAILS',
      ...data,
    });
  },
});
