import convertArtistsToString from './convertArtistsToString';

export default song => ({
  id: song.audioId,
  title: song.name,
  artist: convertArtistsToString(song.artists),
  sources: {
    mp3: `${window.location.origin}/song/stream?id=${song.audioId}`,
  },
  poster: song.coverImageUrl,
  free: song.free,
});
