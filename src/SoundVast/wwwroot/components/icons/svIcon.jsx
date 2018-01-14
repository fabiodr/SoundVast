import React from 'react';
import PropTypes from 'prop-types';

const SVIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" height="520" width="520" xmlSpace="preserve" id="svg2" version="1.1">
    <metadata id="metadata8" />
    <defs id="defs6" />
    <g transform="matrix(1.3333333,0,0,-1.3333333,0,520)" id="g10">
      <g transform="scale(0.1)" id="g12">
        <path id="path16" style={{ fill: '#436ebf', fillOpacity: 1, fillRule: 'nonzero', sroke: 'none' }} d="m 958.227,1950 c 0,546.87 444.903,991.77 991.773,991.77 v 493.05 c -820.05,0 -1484.824,-664.77 -1484.824,-1484.82 0,-444.5 195.574,-843.09 505.066,-1115.211 L 1310.59,1192.7 c -215.3,182.07 -352.363,453.92 -352.363,757.3" />
        <path id="path18" style={{ fill: '#2b53ac', fillOpacity: 1, fillRule: 'nonzero', sroke: 'none' }} d="m 1950,3434.82 v -493.05 c 546.87,0 991.77,-444.9 991.77,-991.77 0,-546.87 -444.9,-991.77 -991.77,-991.77 -243.49,0 -466.62,88.35 -639.41,234.47 L 970.242,834.789 C 1231.73,604.879 1574.45,465.172 1950,465.172 c 820.05,0 1484.83,664.778 1484.83,1484.828 0,820.05 -664.78,1484.82 -1484.83,1484.82" />
        <path id="path20" style={{ fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', sroke: 'none' }} d="M 1566.91,2552.2 2609.95,1950 1566.91,1347.8 v 1204.4" />
      </g>
    </g>
  </svg>
);

SVIcon.defaultProps = {
  className: null,
};

SVIcon.propTypes = {
  className: PropTypes.string,
};

export default SVIcon;
