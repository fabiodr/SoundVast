import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Field } from 'redux-form';

import BasicInfo from '../common/basicInfo/basicInfo';
import genreTypeNames from '../../genre/genreTypeNames';
import Input from '../../shared/fields/input/input';
import NameField from '../../shared/fields/nameField/nameField';
import GenreField from '../../shared/fields/genreField/genreFieldContainer';

const LiveStreamInformation = ({ id }) => (
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

        <GenreField id={id} type={genreTypeNames.liveStream} />
      </BasicInfo>
    </TabPanel>
  </Tabs>
);

LiveStreamInformation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LiveStreamInformation;
