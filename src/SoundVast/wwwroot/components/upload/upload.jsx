import React from 'react';
import PropTypes from 'prop-types';

import styles from './upload.less';
import UploadLiveStream from './uploadLiveStream/uploadLiveStreamContainer';

const Upload = ({ liveStreamGenres }) => (
  <div className={styles.upload}>
    <div className={styles.title}>Upload radio stations.</div>

    <UploadLiveStream genres={liveStreamGenres} />
  </div>
);

Upload.propTypes = {
  liveStreamGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Upload;
