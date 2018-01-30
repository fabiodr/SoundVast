import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BasicInfo from '../common/basicInfo/basicInfo';
import NameField from '../../shared/fields/nameField/nameField';
import RadioGenresField from '../../shared/fields/genresField/radioGenresFieldContainer';
import liveStreamUrlField from '../../shared/fields/liveStreamUrlField/liveStreamUrlField';

const LiveStreamInformation = ({ id, genres }) => (
  <Tabs>
    <TabList>
      <Tab>Basic info</Tab>
    </TabList>
    <TabPanel>
      <BasicInfo id={id}>
        <NameField id={id} />
        <liveStreamUrlField id={id} />
        <RadioGenresField id={id} genres={genres} />
      </BasicInfo>
    </TabPanel>
  </Tabs>
);

LiveStreamInformation.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default LiveStreamInformation;
