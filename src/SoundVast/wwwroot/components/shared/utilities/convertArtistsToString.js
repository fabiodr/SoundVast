/**
 * @param {Object[]} artists
 * @param {string} artists[].name - The name of the artist.
 */
export default (artists = []) => {
  let artistString = '';

  artists.forEach((artist, i) => {
    artistString += i === 0 ? artist.name : ` feat. ${artist.name}`;
  });

  return artistString;
};
