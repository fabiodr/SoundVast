import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TabPanel } from 'react-tabs';

import Upload from './component';
import AudioDropzone from './uploadFile/audioDropzone/container';
import UploadLiveStream from './uploadLiveStream/container';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Upload {...props} />).dive();

  return {
    wrapper,
    props,
  };
};

describe('Upload', () => {
  it('renders AudioDropzone in TabPanel', () => {
    const { wrapper } = setup();

    expect(wrapper.find(TabPanel).find(AudioDropzone).length).toBe(1);
  });

  it('renders UploadLiveStream in TabPanel', () => {
    const { wrapper } = setup();

    expect(wrapper.find(TabPanel).find(UploadLiveStream).length).toBe(1);
  });
});
