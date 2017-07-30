import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LinkDropdown from './component';

const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    title: 'test-dropdown',
    setDropdownVisibility: expect.createSpy(),
    isDropdownVisible: true,
    ...newProps,
  };

  const wrapper = shallow(<LinkDropdown {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('LinkDropdown', () => {
  let wrapper;
  let props;

  it('should render children in a list', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('ul .@@test').length).toBe(1);
  });

  it('should render title in a button', () => {
    ({ props, wrapper } = setup());

    expect(wrapper.find('button span').text()).toBe(props.title);
  });

  it('button onClick should toggle list', () => {
    ({ props, wrapper } = setup());

    wrapper.find('button').simulate('click');

    expect(props.setDropdownVisibility).toHaveBeenCalledWith(!props.isDropdownVisible);
  });

  it('should not render a list when isDropdownVisible is false', () => {
    ({ props, wrapper } = setup({ isDropdownVisible: false }));

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button span').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(0);
  });
});
