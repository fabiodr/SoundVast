import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import expect from 'expect';
import Dropzone from 'react-dropzone';

import ImageDropzoneContainer from './container';
import { updateCoverImageFile, removeCoverImageFile } from '../../actions';

let store;
const setup = (newProps) => {
  const props = {
    id: 'test',
    ...newProps,
  };
  const wrapper = shallow(
    <ImageDropzoneContainer {...props} />,
    { context: { store } },
  ).dive().dive();

  return {
    wrapper,
    props,
  };
};

describe('ImageDropzoneContainer', () => {
  let state;

  beforeEach(() => {
    state = {
      upload: {
        coverImageFiles: {},
      },
    };
    store = configureMockStore()(state);
  });

  it('updates the cover image file on drop', () => {
    expect.spyOn(store, 'dispatch');

    const { wrapper } = setup();
    const dropzone = wrapper.find(Dropzone);
    const files = [
      new File('test.jpg'),
    ];

    dropzone.simulate('drop', files);

    expect(store.dispatch).toHaveBeenCalledWith(updateCoverImageFile);
  });
});
