import { compose } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import GenreField from './genreField';

const fragments = graphql`
  fragment radioGenresFieldContainer_genres on Genre @relay(plural: true) {
    id,
    name,
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
);

export default enhance(GenreField);
