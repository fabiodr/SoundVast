import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BasicInfo from '../common/basicInfo/basicInfo';
import Metadata from '../common/metadata/metadata';
import FreeField from '../../shared/fields/freeField/freeField';
import NameField from '../../shared/fields/nameField/nameField';
import ArtistsField from '../../shared/fields/artistsField/artistsFieldContainer';
import AlbumField from '../../shared/fields/albumField/albumFieldContainer';
import ReleaseDateField from '../../shared/fields/releaseDateField/releaseDateField';
import GenresField from '../../shared/fields/genresField/genresFieldContainer';
import Button from '../../shared/button/button';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './uploadFileForm.less';
import CopyrightField from '../../shared/fields/copyrightField/copyrightField';

const Form = ({
  handleSubmit,
  id,
  form,
  removeMusicForm,
  genres,
}) => (
  <form className={styles.uploadFileForm} onSubmit={handleSubmit} action="">
    <Tabs>
      <TabList>
        <Tab>Basic info</Tab>
        <Tab>Metadata</Tab>
      </TabList>
      <TabPanel>
        <BasicInfo id={id}>
          <NameField id={id} />
          <ArtistsField id={id} />
          <AlbumField id={id} />
          <ReleaseDateField id={id} />
          <GenresField id={id} genres={genres} />
        </BasicInfo>
      </TabPanel>
      <TabPanel>
        <Metadata>
          <FreeField id={id} />
          <CopyrightField id={id} formName={form} />
        </Metadata>
      </TabPanel>
    </Tabs>

    <div className={styles.buttonsContainer}>
      <SpinnerSubmit formName={form}>Save</SpinnerSubmit>
      <Button onClick={removeMusicForm}>Cancel</Button>
    </div>
  </form>
);

Form.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeMusicForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
