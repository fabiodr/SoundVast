import { compose, withProps, defaultProps, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import GenreField from './genreField';
import genreTypeNames from '../../../shared/utilities/genreTypeNames';

const fragments = graphql`
  fragment genreFieldContainer_genres on Genre @relay(plural: true) {
    id,
    name,
    type,
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
  defaultProps({
    type: null,
  }),
  setPropTypes({
    type: PropTypes.oneOf(Object.keys(genreTypeNames).map(key => genreTypeNames[key])),
  }),
  withProps(
    ({ type, genres }) => ({
      genres: type !== null ? genres.filter(genre => genre.type.toLowerCase() === type) : genres,
    }),
  ),
);

export default enhance(GenreField);
