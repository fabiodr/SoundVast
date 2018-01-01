import normalizeBoolean from './normalizeBoolean';

export default location => ({
  newest: location.query.newest,
  ratingFilter: {
    topRated: normalizeBoolean(location.query.topRated),
    minimumNumberOfRatingsThreshold: 0,
    from: location.query.from,
    to: location.query.to,
  },
  commentFilter: {
    mostCommented: normalizeBoolean(location.query.mostCommented),
    from: location.query.from,
    to: location.query.to,
  },
  playedFilter: {
    mostPlayed: normalizeBoolean(location.query.mostPlayed),
    from: location.query.from,
    to: location.query.to,
  },
});
