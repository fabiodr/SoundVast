import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TabPanel } from 'react-tabs';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Upload from './upload';
import AudioDropzone from './uploadFile/audioDropzoneContainer';
import UploadLiveStream from './uploadLiveStream/uploadLiveStreamContainer';

let state;
const setup = (newProps) => {
  const props = {
    ...newProps,
  };
  const store = configureMockStore([thunk])(state);
  const base = shallow(<Upload {...props} />,
    {
      context: { store },
      lifecycleExperimental: true,
    },
  );

  const wrapper = base.dive().dive().dive().dive();

  return {
    base,
    wrapper,
    store,
    props,
  };
};

describe.only('Upload', () => {
  beforeEach(() => {
    state = {
      account: {
        isLoggedIn: true,
      },
    };
  });

  it('adds a livestream on load', () => {
    const { store } = setup();
    const actions = store.getActions();

    expect(actions[0].type).toBe('ADD_LIVE_STREAM');
  });

  it('is an authorizedComponent', () => {
    const { base } = setup();

    expect(base.name()).toContain('AuthorizedComponent');
  });

  it('renders AudioDropzone in TabPanel', () => {
    const { wrapper } = setup();

    expect(wrapper.find(TabPanel).find(AudioDropzone).length).toBe(1);
  });

  it('renders UploadLiveStream in TabPanel', () => {
    const { wrapper } = setup();

    expect(wrapper.find(TabPanel).find(UploadLiveStream).length).toBe(1);
  });
});
