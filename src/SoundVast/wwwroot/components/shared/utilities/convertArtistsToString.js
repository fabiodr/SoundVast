export default (artists = []) => {
  let artistString = '';

  artists.forEach((artist, i) => {
    artistString += i === 0 ? artist : ` feat. ${artist}`;
  });

  return artistString;
};
