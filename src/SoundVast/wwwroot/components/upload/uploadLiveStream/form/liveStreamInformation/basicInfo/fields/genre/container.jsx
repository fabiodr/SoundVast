import { connect } from 'react-redux';

import GenreField from '../../../../../../common/basicInfo/fields/genre/component';

const mapStateToProps = ({ genre }) => ({
  genres: genre.liveStreamGenres,
});

export default connect(mapStateToProps)(GenreField);
