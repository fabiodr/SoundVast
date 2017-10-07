import { connect } from 'react-redux';

import GenreField from '../../../../../../../common/basicInfo/fields/genre/component';

const mapStateToProps = ({ genre }) => ({
  genres: genre.musicGenres,
});

export default connect(mapStateToProps)(GenreField);
