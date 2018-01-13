import { compose, withProps } from 'recompose';

import CommentHeader from './commentHeader';
import getTimeAgo from '../../shared/utilities/getTimeAgo';

const createProps = ({ dateAdded }) => ({
  dateAdded: getTimeAgo(new Date(dateAdded)),
});

export default compose(
  withProps(createProps),
)(CommentHeader);
