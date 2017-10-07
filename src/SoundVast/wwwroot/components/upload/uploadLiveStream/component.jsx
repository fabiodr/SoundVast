import React from 'react';
import PropTypes from 'prop-types';

import Form from './form/container';

const UploadLiveStream = ({ liveStreams, removeLiveStream, addLiveStream }) => (
  <div>
    {liveStreams.map(liveStream => (
      <Form
        key={liveStream.id}
        form={`upload_${liveStream.id}`}
        id={liveStream.id}
        remove={removeLiveStream}
      />
    ))}

    <a tabIndex={0} role="link" onClick={addLiveStream}>
      Add Live Stream
    </a>
  </div>
);

UploadLiveStream.propTypes = {
  addLiveStream: PropTypes.func.isRequired,
  removeLiveStream: PropTypes.func.isRequired,
  liveStreams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UploadLiveStream;
