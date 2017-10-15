import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Songs from './songs';
import Song from './song/component';
import Audios from '../audios/component';

const setup = (newProps) => {
  const props = {
    songs: [
      { id: 0, name: 'bubble', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
    ],
    fetchNextSongs: expect.createSpy(),
    getPlaylist: expect.createSpy(),
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
  it('should render Song as a child of Audios', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Audios).find(Song).exists()).toBe(true);
  });

  it('should change document title to songs', () => {
    const { wrapper } = setup();

    expect(wrapper.prop('title')).toBe('Songs');
  });
});
