import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UploadLiveStream from './uploadLiveStream';
import Form from './liveStreamFormContainer';

const setup = (newProps) => {
  const props = {
    liveStreams: [
      {
        id: 'testId',
      },
      {
        id: 'testTwoId',
      },
    ],
    removeFile: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<UploadLiveStream {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UploadLiveStream', () => {
  it('should render no forms when no liveStreams', () => {
    const { wrapper } = setup({ liveStreams: [] });

    expect(wrapper.find(Form).length).toBe(0);
  });

  it('should render form for each liveStream', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(Form).length).toBe(props.liveStreams.length);
  });
});
