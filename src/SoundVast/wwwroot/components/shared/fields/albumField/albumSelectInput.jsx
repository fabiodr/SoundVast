import React from 'react';

import CreateableSelectInput from '../select/creatableSelectInput';
import ImageOption from '../select/imageOptionContainer';
import ImageValue from '../select/imageValue';

const AlbumSelectInput = ({ ...props }) => (
  <CreateableSelectInput
    {...props}
    options={[]}
    optionComponent={ImageOption}
    valueComponent={ImageValue}
    simpleValue
    placeholder=""
  />
);

export default AlbumSelectInput;
