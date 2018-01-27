import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BasicInfo from '../common/basicInfo/basicInfo';
import NameField from '../../shared/fields/nameField/nameField';
import ArtistsField from '../../shared/fields/artistsField/artistsFieldContainer';
import AlbumField from '../../shared/fields/albumField/albumFieldContainer';
import ReleaseDateField from '../../shared/fields/releaseDateField/releaseDateField';
import SongGenresField from '../../shared/fields/genresField/songGenresFieldContainer';
import ValidationErrors from '../../shared/validation/validationErrors';
import Button from '../../shared/button/button';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';

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
          <ReleaseDateField id={id} />
          <SongGenresField id={id} genres={genres} />
        </BasicInfo>
      </TabPanel>
    </Tabs>

    <SpinnerSubmit formName={form}>Save</SpinnerSubmit>
    <Button onClick={removeMusicForm}>Cancel</Button>
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
