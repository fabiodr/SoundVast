import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Field } from 'redux-form';

import BasicInfo from '../common/basicInfo/basicInfo';
import genreTypeNames from '../../genre/genreTypeNames';
import Input from '../../shared/fields/input/input';
import NameField from '../../shared/fields/nameField/nameField';
import GenreField from '../../shared/fields/genreField/genreField';
import ValidationErrors from '../../shared/validation/validationErrors';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import CancelButton from '../common/cancelButton/cancelButton';

const Form = ({ errors: error, ...props }) => (
  <form onSubmit={props.handleSubmit} action="">
    <ValidationErrors errors={props.errors} />

    <Tabs>
      <TabList>
        <Tab>Basic info</Tab>
      </TabList>
      <TabPanel>
        <BasicInfo id={props.id}>
          <NameField id={props.id} />

          <label htmlFor={`artist_${props.id}`}>Artist
            <Field name="artist" id={`artist_${props.id}`} component={Input} />
          </label>

          <GenreField id={props.id} type={genreTypeNames.music} />
        </BasicInfo>
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
