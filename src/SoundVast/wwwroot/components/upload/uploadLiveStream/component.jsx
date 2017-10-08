import React from 'react';
import PropTypes from 'prop-types';

import Form from './form/container';

const UploadLiveStream = ({ liveStreams, addLiveStream }) => (
  <div>
    {liveStreams.map((liveStream, i) => (
      <Form
        key={liveStream.id}
        form={`upload_${liveStream.id}`}
        id={liveStream.id}
        index={i}
      />
    ))}

    <a tabIndex={0} role="link" onClick={addLiveStream}>
      Add Live Stream
    </a>
  </div>
);

UploadLiveStream.propTypes = {
  addLiveStream: PropTypes.func.isRequired,
  liveStreams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UploadLiveStream;
