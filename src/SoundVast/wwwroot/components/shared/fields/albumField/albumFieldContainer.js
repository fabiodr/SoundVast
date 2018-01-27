import { compose, withHandlers } from 'recompose';

import AlbumField from './albumField';

const handlers = {
  loadAlbums: () => (input) => {
    if (!input) return Promise.resolve({ options: [] });

    return fetch.get(`/album/albumsForSelect?input=${input}`)
      .then(json => ({ options: json.albums }));
  },
};

const enhance = compose(
  withHandlers(handlers),
);

export default enhance(AlbumField);
