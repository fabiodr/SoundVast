import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BasicInfo from '../common/basicInfo/basicInfo';
import NameField from '../../shared/fields/nameField/nameField';
import ArtistsField from '../../shared/fields/artistsField/artistsField';
import AlbumField from '../../shared/fields/albumField/albumField';
import SongGenresField from '../../shared/fields/genreField/songGenresFieldContainer';
import ValidationErrors from '../../shared/validation/validationErrors';
import CancelButton from '../../shared/button/cancelButton';
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
          <ArtistsField id={id} />
          <AlbumField id={id} />
          <SongGenresField id={id} genres={genres} />
        </BasicInfo>
      </TabPanel>
    </Tabs>

    <SaveButton formName={form} />
    <CancelButton onClick={removeMusicForm} />
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
