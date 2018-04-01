import normalizeBoolean from './normalizeBoolean';

export default location => ({
  filter: {
    newest: normalizeBoolean(location.query.newest),
  },
  genre: location.query.genre,
  searchQuery: location.query.searchQuery,
});
