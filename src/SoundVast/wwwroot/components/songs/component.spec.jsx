import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Songs from './component';
import Song from './song/container';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/component';

const setup = (newProps) => {
  const props = {
    songs: [
      { id: 0, name: 'bubble', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
      { id: 1, name: 'kalimba', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
    ],
    fetchSongs: expect.createSpy(),
    hasMore: true,
    ...newProps,
  };

  const wrapper = shallow(<Songs {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Songs', () => {
  let wrapper;
  let props;

  it('should render Song for each song', () => {
    ({ wrapper, props } = setup());

    expect((wrapper).find(InfiniteScrollGrid).find(Song).length).toBe(props.songs.length);
  });

  it('should change document title to songs', () => {
    ({ wrapper } = setup());

    expect((wrapper).prop('title')).toBe('Songs');
  });
});
