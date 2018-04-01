export default radio => ({
  id: radio.audioId,
  title: radio.name,
  sources: {
    mp3: radio.streamDatas.map(streamData => streamData.liveStreamUrl),
  },
  poster: radio.coverImageUrl !== null ? `${radio.coverImageUrl}_310x200.jpg` : null,
});
