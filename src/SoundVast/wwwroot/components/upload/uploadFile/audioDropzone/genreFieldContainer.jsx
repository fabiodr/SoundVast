import { connect } from 'react-redux';

import GenreField from '../../common/fields/genreField';

const mapStateToProps = ({ genre }) => ({
  genres: genre.musicGenres,
});

export default connect(mapStateToProps)(GenreField);
