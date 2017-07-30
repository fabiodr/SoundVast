import React from 'react';
import PropTypes from 'prop-types';

const FooterPlayer = ({ songs }) => (
  <div />
);

FooterPlayer.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FooterPlayer;
