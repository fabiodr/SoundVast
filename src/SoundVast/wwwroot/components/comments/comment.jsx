import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ userName, date, body }) => (
  <div>
    <div>
      <span>{userName}</span>
      <span>{date}</span>
    </div>
    <div>{body}</div>
  </div>
);

Comments.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comments;
