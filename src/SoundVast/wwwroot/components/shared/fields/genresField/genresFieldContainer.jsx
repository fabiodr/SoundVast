import { compose } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import GenresField from './genresField';

const fragments = graphql`
  fragment genresFieldContainer_genres on Genre @relay(plural: true) {
    id,
    name,
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
);

export default enhance(GenresField);
