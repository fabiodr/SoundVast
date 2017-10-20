import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FileBasicInfo from './fileBasicInfo';
import ImageDropzone from '../../common/imageDropzone/imageDropzoneContainer';
import NameField from '../../common/fields/nameField';
import GenreField from '../../common/fields/genreField';

const setup = (newProps) => {
  const props = {
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<FileBasicInfo {...props} />);

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
