import { compose } from 'recompose';
import { connect } from 'react-redux';

import Comments from './comments';

const mapStateToProps = ({ jPlayers }) => ({
  comments: jPlayers.FooterPlaylist.media.comments,
});

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(Comments);
