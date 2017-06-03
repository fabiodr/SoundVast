import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import DocumentTitle from 'react-document-title';

import FrontPage from './frontPage';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<FrontPage {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('FrontPage', () => {
  let wrapper;

  it('should change document title to front page', () => {
    ({ wrapper } = setup());

    wrapper.find(DocumentTitle).dive();

    expect(document.title).toBe('Front Page - SoundVast');
  });
});
