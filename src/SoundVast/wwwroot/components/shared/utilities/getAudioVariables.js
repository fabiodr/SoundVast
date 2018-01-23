import normalizeBoolean from './normalizeBoolean';

export default location => ({
  filter: {
    newest: normalizeBoolean(location.query.newest),
    mostCommented: normalizeBoolean(location.query.mostCommented),
    mostPlayed: normalizeBoolean(location.query.mostPlayed),
    dateFrom: location.query.dateFrom && new Date(location.query.dateFrom).toISOString(),
    dateTo: location.query.dateFrom && new Date(location.query.dateTo).toISOString(),
    ratingFilter: {
      topRated: normalizeBoolean(location.query.topRated),
      minimumNumberOfRatingsThreshold: 0,
    },
  },
  genre: location.query.genre,
  searchQuery: location.query.searchQuery,
});
