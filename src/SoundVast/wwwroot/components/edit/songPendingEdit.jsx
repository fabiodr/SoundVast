import React from 'react';
import PropTypes from 'prop-types';

import SoundVastTitle from '../shared/title/soundVastTitle';
import CoverImage from '../audio/coverImage';

const SongPendingEdit = ({ songsPendingEdit }) => (
  <SoundVastTitle title="Review songs">
    <div>
      {songsPendingEdit.edges.map(({ node }) => (
        <div key={node.audioPendingEditId}>
          <div>
            {node.name}
            <CoverImage coverImageUrl={node.coverImageUrl} />
          </div>
          <div>
            {node.audio.name}
            <CoverImage coverImageUrl={node.audio.coverImageUrl} />
          </div>
        </div>
      ))}
    </div>
  </SoundVastTitle>
);

SongPendingEdit.propTypes = {
  songsPendingEdit: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        songPendingEdit: PropTypes.shape({
          audioPendingEditId: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          artist: PropTypes.string,
          coverImageUrl: PropTypes.string.isRequired,
          free: PropTypes.bool.isRequired,
          genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
          contributor: PropTypes.shape({
            userName: PropTypes.string.isRequired,
          }),
          audio: PropTypes.shape({
            name: PropTypes.string.isRequired,
            artist: PropTypes.string,
            coverImageUrl: PropTypes.string.isRequired,
            free: PropTypes.bool.isRequired,
            genre: PropTypes.shape({
              name: PropTypes.string.isRequired,
            }).isRequired,
          }),
        }),
      }),
    })),
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default SongPendingEdit;
