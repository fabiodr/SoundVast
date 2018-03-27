import convertImagesToSources from './convertImagesToSources';

export default (radio) => {
  const poster = convertImagesToSources(radio.coverImages);

  return {
    id: radio.audioId,
    title: radio.name,
    sources: {
      mp3: radio.streamDatas.map(streamData => streamData.liveStreamUrl),
    },
    poster: poster !== null ? poster['310x200'] : null,
  };
};
