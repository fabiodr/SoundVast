import React from 'react';
import PropTypes from 'prop-types';

import Form from './liveStreamFormContainer';

const UploadLiveStream = ({ liveStreams, addLiveStream, genres }) => (
  <div>
    {liveStreams.map((liveStream, i) => (
      <Form
        key={liveStream.id}
        form={`upload_${liveStream.id}`}
        id={liveStream.id}
        index={i}
        genres={genres}
      />
    ))}

    <a tabIndex={0} role="link" onClick={addLiveStream}>
      Add Live Stream
    </a>
  </div>
);

UploadLiveStream.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLiveStream: PropTypes.func.isRequired,
  liveStreams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UploadLiveStream;
