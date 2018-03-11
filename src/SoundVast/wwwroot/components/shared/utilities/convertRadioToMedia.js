import convertImagesToSources from './convertImagesToSources';

export default radio => ({
  id: radio.audioId,
  title: radio.name,
  sources: {
    mp3: radio.liveStreamUrl,
  },
  poster: convertImagesToSources(radio.coverImages)['310x200'],
});
