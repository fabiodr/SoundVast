import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputCheckboxField from '../inputField/inputCheckboxField';
import InputRadioButton from '../inputField/inputRadioButton';
import styles from './creativeCommonsGroup.less';

const CreativeCommonsGroup = ({ id }) => (
  <div className={styles.creativeCommonsGroup}>
    <Field
      component={InputCheckboxField}
      name="creativeCommonsAttribution"
      id={`createCommons_attribution_${id}`}
      label="Attribution"
      checked
    />

    <Field
      component={InputCheckboxField}
      name="creativeCommonsNoncommercial"
      id={`createCommons_noncommercial_${id}`}
      label="Noncommercial"
    />

    <Field
      component={InputRadioButton}
      name="creativeCommonsRadioButtonGroup"
      id={`creativeCommons_derivative_${id}`}
      customValue="Derivative"
      label="No Derivative Works"
    />

    <Field
      component={InputRadioButton}
      name="creativeCommonsRadioButtonGroup"
      id={`creativeCommons_share_${id}`}
      customValue="Share"
      label="Share Alike"
    />
  </div>
);

CreativeCommonsGroup.defaultProps = {
  id: 0,
};

CreativeCommonsGroup.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CreativeCommonsGroup;

