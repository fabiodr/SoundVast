import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import GenreField from '../../common/fields/genreField';

const mapStateToProps = ({ genre }) => ({
  genres: genre.genres,
});

const enhance = compose(
  connect(mapStateToProps),
  fragmentContainer(graphql`
    fragment genreFieldContainer_genres on Genre @relay(plural: true) {
      id,
      name,
      type,
    }
  `),
);

export default enhance(GenreField);
