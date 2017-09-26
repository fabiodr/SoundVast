import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audio from './component';
import PlayState from './playState/container';
import Like from '../../rating/like/container';
import Dislike from '../../rating/dislike/container';

const setup = (newProps) => {
  const props = {
    id: 0,
    isCurrent: false,
    coverImageUrl: 'test.jpg',
    children: <div className="@@children" />,
    playOnClick: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Audio {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Audio', () => {
  it('should pass coverImageUrl to image src', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('img').prop('src')).toBe(props.coverImageUrl);
  });

  it('should render PlayState', () => {
    const { wrapper } = setup();

    expect(wrapper.find(PlayState).exists()).toBe(true);
  });

  it('should call playOnClick on button click', () => {
    const { wrapper, props } = setup();
    const button = wrapper.find('.imageContainer');

    button.simulate('click');

    expect(props.playOnClick).toHaveBeenCalled();
  });

  it('should render children', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.@@children').exists()).toBe(true);
  });

  it('should render Like', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Like).exists()).toBe(true);
  });

  it('should render Dislike', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Dislike).exists()).toBe(true);
  });
});
