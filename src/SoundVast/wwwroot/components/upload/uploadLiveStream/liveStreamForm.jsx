import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../shared/button/buttonContainer';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './liveStreamForm.less';
import BasicInfo from '../common/basicInfo/basicInfo';
import NameField from '../../shared/fields/nameField/nameField';
import GenresField from '../../shared/fields/genresField/genresFieldContainer';
import LiveStreamUrlField from '../../shared/fields/liveStreamUrlField/liveStreamUrlField';
import WebsiteUrlField from '../../shared/fields/websiteUrlField/websiteUrlField';
import TagsField from '../../shared/fields/tagsField/tagsField';
import CopyrightField from '../../shared/fields/copyrightField/copyrightField';
import CountryField from '../../shared/fields/countryField/countryField';

const LiveStreamForm = ({
  handleSubmit,
  id,
  genres,
  form,
  removeLiveStreamForm,
  change,
}) => (
  <form className={styles.liveStreamForm} onSubmit={handleSubmit} action="">
    <BasicInfo id={id} change={change}>
      <NameField id={id} />
      <LiveStreamUrlField id={id} />
      <WebsiteUrlField id={id} />
      <GenresField id={id} genres={genres} />
      <CountryField id={id} />
      <TagsField id={id} />
      <CopyrightField id={id} formName={form} />
    </BasicInfo>

    <div className={styles.buttonsContainer}>
      <SpinnerSubmit formName={form}>Save</SpinnerSubmit>
      <Button styleName="primary" onClick={removeLiveStreamForm}>Cancel</Button>
    </div>
  </form>
);

LiveStreamForm.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeLiveStreamForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

export default LiveStreamForm;
