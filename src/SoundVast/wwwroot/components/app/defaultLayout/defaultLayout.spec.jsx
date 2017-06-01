import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import DefaultLayout from './defaultLayout';
import User from '../../user/userContainer';
import Header from '../../header/header';

const MockComponent = () => null;

const setup = (newProps) => {
  const props = {
    component: MockComponent,
    ...newProps,
  };

  const route = shallow(
    <MemoryRouter>
      <DefaultLayout {...props} />
    </MemoryRouter>,
  ).dive().dive();

  const matchProps = {
    url: 'test',
  };

  const wrapper = shallow(route.prop('render')(matchProps));

  return {
    wrapper,
    props,
    matchProps,
  };
};

describe('Header', () => {
  let wrapper;
  let props;
  let matchProps;

  it('should render User', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(User).length).toBe(1);
  });

  it('should render Header', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should render Component', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(props.component).length).toBe(1);
  });

  it('Component should pass down matchProps', () => {
    ({ wrapper, props, matchProps } = setup());

    expect(wrapper.find(props.component).prop('url')).toBe(matchProps.url);
  });
});
