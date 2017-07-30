export default (response) => {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response;
};
