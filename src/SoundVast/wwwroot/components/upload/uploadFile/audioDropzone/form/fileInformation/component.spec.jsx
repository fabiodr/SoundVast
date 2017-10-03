import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TabPanel } from 'react-tabs';

import FileInformation from './component';

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

    expect(wrapper.find(TabPanel).length).toBe(1);
  });
});
