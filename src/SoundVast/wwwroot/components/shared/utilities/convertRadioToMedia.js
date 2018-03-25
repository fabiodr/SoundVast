import convertImagesToSources from './convertImagesToSources';

export default (radio) => {
  const poster = convertImagesToSources(radio.coverImages);

  return {
    id: radio.audioId,
    title: radio.name,
    sources: radio.streamDatas.map(streamData => ({
      src: streamData.liveStreamUrl,
      contentType: streamData.contentType,
    })),
    poster: poster !== null ? poster['310x200'] : null,
  };
};
