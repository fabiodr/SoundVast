import React from 'react';
import PropTypes from 'prop-types';

import styles from './upload.less';
import UploadLiveStream from './uploadLiveStream/uploadLiveStreamContainer';

const Upload = ({ genres }) => (
  <div className={styles.upload}>
    <div className={styles.title}>Upload radio stations.</div>

    <UploadLiveStream genres={genres} />
  </div>
);

Upload.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Upload;
