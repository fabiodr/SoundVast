export default song => ({
  id: song.audioId,
  title: song.name,
  artist: song.artist,
  sources: {
    mp3: `${window.location.origin}/song/stream?id=${song.audioId}`,
  },
  poster: song.coverImageUrl,
  free: song.free,
});
