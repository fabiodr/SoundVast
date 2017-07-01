import { connect } from 'react-redux';

import BasicInfo from './basicInfo';

export const mapStateToProps = ({ genre, upload }) => ({
  genres: genre.genres,
  initialValues: {
    coverImageFile: upload.coverImageFile,
  },
});

export default connect(mapStateToProps)(BasicInfo);
