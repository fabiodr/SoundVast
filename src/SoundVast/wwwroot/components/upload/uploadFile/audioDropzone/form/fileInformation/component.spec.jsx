import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TabPanel } from 'react-tabs';

import FileInformation from './component';
import BasicInfo from './basicInfo/component';

const setup = (newProps) => {
  const props = {
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<FileInformation {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('FileInformation', () => {
  it('should render BasicInfo', () => {
    const { wrapper } = setup();

    expect(wrapper.find(TabPanel).find(BasicInfo).length).toBe(1);
  });
});
