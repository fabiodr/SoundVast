import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audios from './audios';
import Audio from '../audio/audio';
import InfiniteScrollGrid from '../../content/infiniteScrollGrid/infiniteScrollGrid';

const setup = (newProps) => {
  const props = {
    musicAudios: [
      { id: 0, name: 'bubble', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
      { id: 1, name: 'kalimba', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
    ],
    fetchMusic: expect.createSpy(),
    hasMore: true,
    ...newProps,
  };

  const wrapper = shallow(<Audios {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('MusicAudios', () => {
  let wrapper;
  let props;

  it('should render Audio for each musicAudio', () => {
    ({ wrapper, props } = setup());

    expect((wrapper).find(InfiniteScrollGrid).find(Audio).length).toBe(props.musicAudios.length);
  });
});
