import reqwest from 'reqwest';

export default () => dispatch =>
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
