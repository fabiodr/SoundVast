import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Music from './music';
import Audio from './audio/audio';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/infiniteScrollGrid';

const setup = (newProps) => {
  const props = {
    musicAudios: [
      { id: 0, name: 'bubble', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
      { id: 1, name: 'kalimba', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
    ],
    ...newProps,
  };

  const wrapper = shallow(<Music {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Music', () => {
  let wrapper;
  let props;

  it('should change document title to music', () => {
    ({ wrapper } = setup());

    expect((wrapper).prop('title')).toBe('Music');
  });

  it('should render Audio for each musicAudio in InfiniteScrollGrid', () => {
    ({ wrapper, props } = setup());

    expect((wrapper).find(InfiniteScrollGrid).find(Audio).length).toBe(props.musicAudios.length);
  });
});
