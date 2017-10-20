import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLogins from './socialLogins';
import SocialLoginsErrorMessage from './socialLoginsErrorMessage';
import SocialLoginsButton from './socialLoginsButton';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<SocialLogins {...props} />);

  return {
    wrapper,
    props,
  };
};
const loginProviders = [
  {
    authenticationScheme: 'facebook',
    displayName: 'Facebook',
  },
];

describe('SocialLogins', () => {
  it('should render no error message if there are login providers', () => {
    const { wrapper } = setup({ loginProviders });

    expect(wrapper.find(SocialLoginsErrorMessage).length).toBe(0);
  });

  it('should render error message if there are no login providers', () => {
    const { wrapper } = setup();

    expect(wrapper.find(SocialLoginsErrorMessage).length).toBe(1);
  });

  it('should render all social logins if there are login providers', () => {
    const { wrapper, props } = setup({ loginProviders });

    expect(wrapper.find(SocialLoginsButton).length).toBe(props.loginProviders.length);
  });

  it('should render an anti-forgery token', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });
});
