import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Popup from './popup';

const setup = (newProps) => {
  const props = {
    popupClass: 'test',
    children: <div className="@@test" />,
    ...newProps,
  };

  const wrapper = shallow(<Popup {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Popup', () => {
  let wrapper;
  let props;

  it('should render children', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.contains(props.children)).toBe(true);
  });
});
