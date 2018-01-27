import { compose, withHandlers } from 'recompose';

import ArtistsField from './artistsField';

const handlers = {
  loadArtists: () => (input) => {
    if (!input) return Promise.resolve({ options: [] });

    return fetch.get(`/artist/artistsForSelect?input=${input}`)
      .then(json => ({ options: json.artists }));
  },
};

const enhance = compose(
  withHandlers(handlers),
);

export default enhance(ArtistsField);
