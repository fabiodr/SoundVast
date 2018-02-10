import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputRadioButtonGroup from '../inputField/inputRadioButtonGroup';
import CreativeCommonsGroup from './creativeCommonsGroupContainer';
import styles from './copyrightField.less';

const CopyrightField = ({ id, formName }) => {
  const creativeCommonsValue = 'CreativeCommons';

  return (
    <div>
      <Field
        component={InputRadioButtonGroup}
        name="copyright"
        groupClassName={styles.radioButtonGroup}
        options={[
          { label: 'All Rights Reserved', id: `allRightsReserved_${id}`, customValue: 'AllRightsReserved' },
          { label: 'Creative Commons', id: `creativeCommons_${id}`, customValue: creativeCommonsValue },
        ]}
      />
      <CreativeCommonsGroup formName={formName} creativeCommonsValue={creativeCommonsValue} />
    </div>
  );
};

CopyrightField.defaultProps = {
  id: 0,
};

CopyrightField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  formName: PropTypes.string.isRequired,
};

export default CopyrightField;
