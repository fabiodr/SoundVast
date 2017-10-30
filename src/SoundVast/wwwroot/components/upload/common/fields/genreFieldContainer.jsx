import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import GenreField from '../../common/fields/genreField';

const mapStateToProps = ({ genre }) => ({
  genres: genre.genres,
});

const fragment = graphql`
  fragment genreFieldContainer_genres on Genre @relay(plural: true) {
    id,
    name,
    type,
  }
`;

const enhance = compose(
  connect(mapStateToProps),
  fragmentContainer(fragment),
);

export default enhance(GenreField);
