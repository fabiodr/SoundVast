import { compose, withHandlers } from 'recompose';

import TagsField from './tagsField';

const handlers = {
  loadTags: () => (input) => {
    if (!input) return Promise.resolve({ options: [] });

    return fetch.get(`/artist/tagsForSelect?input=${input}`)
      .then(json => ({ options: json.tags }));
  },
};

const enhance = compose(
  withHandlers(handlers),
);

export default enhance(TagsField);
