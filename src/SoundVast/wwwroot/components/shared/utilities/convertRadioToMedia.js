export default radio => ({
  id: radio.audioId,
  title: radio.name,
  sources: {
    mp3: radio.liveStreamUrl,
  },
  poster: radio.coverImageUrl,
});
