import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Field } from 'redux-form';

import BasicInfo from '../common/basicInfo/basicInfo';
import genreTypeNames from '../../shared/utilities/genreTypeNames';
import Input from '../../shared/fields/input/input';
import NameField from '../../shared/fields/nameField/nameField';
import GenreField from '../../shared/fields/genreField/genreFieldContainer';
import ValidationErrors from '../../shared/validation/validationErrors';
import CancelButton from '../common/cancelButton/cancelButton';
import SaveButton from '../common/saveButton/saveButton';

const Form = ({
  handleSubmit,
  errors,
  id,
  form,
  removeMusicForm,
  genres,
}) => (
  <form onSubmit={handleSubmit} action="">
    <ValidationErrors errors={errors} />

    <Tabs>
      <TabList>
        <Tab>Basic info</Tab>
      </TabList>
      <TabPanel>
        <BasicInfo id={id}>
          <NameField id={id} />

          <label htmlFor={`artist_${id}`}>Artist
            <Field name="artist" id={`artist_${id}`} component={Input} />
          </label>

          <GenreField id={id} type={genreTypeNames.music} genres={genres} />
        </BasicInfo>
      </TabPanel>
    </Tabs>

    <SaveButton formName={form} />
    <CancelButton remove={removeMusicForm} />
  </form>
);

Form.defaultProps = {
  errors: [],
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeMusicForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
