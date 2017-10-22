import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FileBasicInfo from './fileBasicInfo';
import ValidationErrors from '../../../shared/form/validation/errors/component';
import SpinnerSubmit from '../../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import CancelButton from '../../common/cancelButton/cancelButton';

const Form = ({ errors: error, ...props }) => (
  <form onSubmit={props.handleSubmit} action="">
    <ValidationErrors errors={props.errors} />

    <Tabs>
      <TabList>
        <Tab>Basic info</Tab>
      </TabList>
      <TabPanel>
        <FileBasicInfo id={props.id} />
      </TabPanel>
    </Tabs>

    <SpinnerSubmit formName={props.form}>
      Save
    </SpinnerSubmit>
    <CancelButton remove={props.removeMusicForm} />
  </form>
);

Form.defaultProps = {
  errors: [],
  isSubmitting: false,
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeMusicForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
