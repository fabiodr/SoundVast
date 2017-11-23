import React from 'react';
import PropTypes from 'prop-types';

const DislikeIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 486.805 486.805">
    <path d="M485.9,241.402l-26.8-167c-5.2-41.9-34.5-66-80.4-66H243.6h-6.8h-65.9c-19.2,0-36.9,8.3-49.4,21.6c-4.5-5.5-11.4-8.9-19-8.9H24.7c-13.6,0-24.7,11.1-24.7,24.7v228.4c0,13.6,11.1,24.7,24.7,24.7h77.9c9,0,17-4.9,21.3-12.2l2.9,0.7c4.4,1.3,80.8,25,80.8,90.7v84.9c0,5.2,3.4,9.9,8.4,11.4c0.9,0.3,12.9,4,28.3,4c13.3,0,29.1-2.7,42.5-12.6c18.4-13.5,27.7-36.5,27.7-68.4v-75.8h32.4h56.9h15.8c15.6,0,31-5.8,43.3-16.2C480.9,290.002,489.8,265.402,485.9,241.402zM103.2,274.302c0,0.4-0.3,0.7-0.7,0.7H24.7c-0.4,0-0.7-0.3-0.7-0.7v-228.4c0-0.4,0.3-0.7,0.7-0.7h77.9c0.4,0,0.7,0.3,0.7,0.7v228.4H103.2z M447.3,287.202c-7.9,6.8-17.8,10.5-27.7,10.5h-15.8h-56.9h-44.5c-6.6,0-12,5.4-12,12v87.8c0,23.8-6,40.3-17.8,49c-13,9.6-30.8,8.6-41.1,7v-75.3c0-35.6-17.3-66.7-49.9-89.9c-23.9-16.9-47.6-23.7-48.6-24c-0.2,0-0.3-0.1-0.5-0.1l-5.2-1.2v-191.5c0.2-0.7,0.4-1.4,0.5-2.1c3.3-21,21.8-36.9,43.1-36.9h65.9h6.8h135.1c33.9,0,52.9,15.2,56.6,45.1c0,0.2,0,0.3,0.1,0.4l26.9,167.1C464.8,261.002,459,277.102,447.3,287.202z" />
  </svg>
);

DislikeIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default DislikeIcon;
