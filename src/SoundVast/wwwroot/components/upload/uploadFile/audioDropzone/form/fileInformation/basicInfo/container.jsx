import { connect } from 'react-redux';

import BasicInfo from './component';

export const mapStateToProps = ({ genre }) => ({
  genres: genre.genres,
});

export default connect(mapStateToProps)(BasicInfo);
