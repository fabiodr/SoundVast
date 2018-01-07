import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose, withHandlers, setPropTypes, defaultProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const fragments = graphql`
  fragment commentBoxContainer_audio on Audio {
    id
    audioId
    name
  }
`;

const handlers = {
  onSubmit: ({ audio }) => (input) => {
    commentMutation(input, audio);
  },
};

export default compose(
  defaultProps({
    cancel: Function.prototype,
  }),
  setPropTypes({
    cancel: PropTypes.func,
  }),
  fragmentContainer(fragments),
  withHandlers(handlers),
  reduxForm(),
  withHandlers({
    cancel: ({ reset, cancel }) => (...args) => {
      reset();
      cancel(...args);
    },
  }),
)(CommentBox);
