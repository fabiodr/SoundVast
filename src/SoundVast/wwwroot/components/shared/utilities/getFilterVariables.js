import normalizeBoolean from './normalizeBoolean';

export default location => ({
  newest: normalizeBoolean(location.query.newest),
  mostCommented: normalizeBoolean(location.query.mostCommented),
  mostPlayed: normalizeBoolean(location.query.mostPlayed),
  dateFrom: location.query.dateFrom && new Date(location.query.dateFrom).toISOString(),
  dateTo: location.query.dateFrom && new Date(location.query.dateTo).toISOString(),
  ratingFilter: {
    topRated: normalizeBoolean(location.query.topRated),
    minimumNumberOfRatingsThreshold: 0,
  },
});
