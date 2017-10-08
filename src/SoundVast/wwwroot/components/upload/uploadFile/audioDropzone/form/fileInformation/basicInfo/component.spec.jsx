import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import BasicInfo from './component';
import ImageDropzone from '../../../../../common/imageDropzone/container';
import NameField from '../../../../../common/basicInfo/fields/name/component';
import GenreField from './fields/genre/container';

const setup = (newProps) => {
  const props = {
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<BasicInfo {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('FileBasicInfo', () => {
  it('should render ImageDropzone', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ImageDropzone).length).toBe(1);
  });

  it('should render Name field', () => {
    const { wrapper } = setup();

    expect(wrapper.find(NameField).length).toBe(1);
  });

  it('should render Genre field', () => {
    const { wrapper } = setup();

    expect(wrapper.find(GenreField).length).toBe(1);
  });
});
