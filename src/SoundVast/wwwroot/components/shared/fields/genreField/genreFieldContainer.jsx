import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fragment } from 'relay-modern-hoc';
import { graphql } from 'react-relay';

import GenreField from './genreField';

const mapStateToProps = ({ genre }) => ({
  genres: genre.genres,
});

const fragments = graphql`
  fragment genreFieldContainer_genres on Genre @relay(plural: true) {
    id,
    name,
    type,
  }
`;

const enhance = compose(
  fragment(fragments),
  connect(mapStateToProps),
);

export default enhance(GenreField);
