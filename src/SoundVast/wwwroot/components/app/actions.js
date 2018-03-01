export const setUser = user => ({
  type: 'SET_USER',
  user,
});

export const setCoverImagePlaceholder = () => dispatch =>
  fetch.get('/upload/getPlaceholderImage')
    .then(json => dispatch({
      type: 'UPDATE_PLACEHOLDER_IMAGE',
      imagePlaceholderUrl: json.imagePath,
    }));
