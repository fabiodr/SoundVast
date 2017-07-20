import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SoundVastTitle from './soundVastTitle';

const setup = (newProps) => {
  const props = {
    title: 'testTitle',
    ...newProps,
  };

  const wrapper = shallow(<SoundVastTitle {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SoundVastTitle', () => {
  let wrapper;
  let props;

  it('should render custom props', () => {
    const children = <div className="@@test" />;
    const className = 'test';
    ({ wrapper, props } = setup({ children, className }));

    expect(wrapper.find('.@@test').length).toBe(1);
    expect(wrapper.prop('className')).toBe(className);
  });

  it('should render title with custom title', () => {
    ({ wrapper, props } = setup());

    wrapper.dive();

    expect(document.title).toContain(props.title);
  });

  it('should render title with SoundVast prefix', () => {
    ({ wrapper, props } = setup());

    wrapper.dive();

    expect(document.title).toContain('SoundVast');
  });
});
