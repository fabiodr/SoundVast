import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Field } from 'redux-form';

import BasicInfo from '../common/basicInfo/basicInfo';
import Input from '../../shared/fields/input/input';
import NameField from '../../shared/fields/nameField/nameField';
import RadioGenresField from '../../shared/fields/genreField/radioGenresFieldContainer';

const LiveStreamInformation = ({ id, genres }) => (
  <Tabs>
    <TabList>
      <Tab>Basic info</Tab>
    </TabList>
    <TabPanel>
      <BasicInfo id={id}>
        <NameField id={id} />

        <label htmlFor={`liveStreamUrl_${id}`}>Live Stream Url *
          <Field name="liveStreamUrl" id={`liveStreamUrl_${id}`} component={Input} />
        </label>

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
