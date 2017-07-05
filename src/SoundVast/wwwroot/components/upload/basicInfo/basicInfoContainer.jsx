import { connect } from 'react-redux';

import BasicInfo from './basicInfo';

export const mapStateToProps = ({ genre }) => ({
  genres: genre.genres,
});

export default connect(mapStateToProps)(BasicInfo);
