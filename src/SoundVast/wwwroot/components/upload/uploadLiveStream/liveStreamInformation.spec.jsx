import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import LiveStreamInformation from './liveStreamInformation';
import BasicInfo from '../common/basicInfo/basicInfo';
import NameField from '../../shared/fields/nameField/nameField';
import GenreField from '../../shared/fields/genreField/genreField';

const setup = (newProps) => {
  const props = {
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<LiveStreamInformation {...props} />);
  const basicInfo = wrapper.find(BasicInfo);

  return {
    wrapper,
    props,
    basicInfo,
  };
};

describe('LiveStreamInformation', () => {
  describe('Basic Info', () => {
    it('should render Name field', () => {
      const { basicInfo } = setup();

      expect(basicInfo.find(NameField).length).toBe(1);
    });

    it('should render Genre field', () => {
      const { basicInfo } = setup();

      expect(basicInfo.find(GenreField).length).toBe(1);
    });
  });
});
