import React from 'react';
import PropTypes from 'prop-types';

import FlexWrapFix from './flexWrapFix';
import GridCell from './gridCell';

const GridContent = ({ children }) => ([
  React.Children.map(children, child => (
    <GridCell>
      {child}
    </GridCell>
  )),
  <FlexWrapFix key={0} numberOfGhostElements={6} />,
]);

GridContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridContent;
