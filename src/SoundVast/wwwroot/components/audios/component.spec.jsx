import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audios from './component';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/component';

const setup = (newProps) => {
  const props = {
    audios: [
      { id: 0, name: 'bubble', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
      { id: 1, name: 'kalimba', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
    ],
    getPlaylist: expect.createSpy(),
    fetchNextAudios: expect.createSpy(),
    hasMore: true,
    children: <div className="@@audio" />,
    ...newProps,
  };

  const wrapper = shallow(<Audios {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Audios', () => {
  it('should render child for each audio in InfiniteScrollGrid', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(InfiniteScrollGrid).find('.@@audio').length).toBe(props.audios.length);
  });
});
