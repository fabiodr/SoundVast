import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLogins from './socialLogins';
import SocialLoginsErrorMessage from './errorMessage/socialLoginsErrorMessage';
import SocialLoginsForm from './form/socialLoginsForm';
import loginProviders from './socialLoginsMockData.spec';

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

describe('SocialLogins', () => {
  let wrapper;

  it('should render social logins form if there are login providers', () => {
    ({ wrapper } = setup({ loginProviders }));

    expect(wrapper.find(SocialLoginsForm).length).toBe(1);
  });

  it('should render no social logins form if there are no login providers', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SocialLoginsForm).length).toBe(0);
  });

  it('should render no error message if there are login providers', () => {
    ({ wrapper } = setup({ loginProviders }));

    expect(wrapper.find(SocialLoginsErrorMessage).length).toBe(0);
  });

  it('should render error message if there are no login providers', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SocialLoginsErrorMessage).length).toBe(1);
  });
});
