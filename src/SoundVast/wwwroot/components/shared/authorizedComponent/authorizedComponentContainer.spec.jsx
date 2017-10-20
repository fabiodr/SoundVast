import expect from 'expect';

import { mapStateToProps } from './authorizedComponentContainer';

const state = {
  account: {
    isLoggedIn: true,
  },
};

describe('authorizedComponentContainer', () => {
  it('should map state to props correctly', () => {
    const stateProps = mapStateToProps(state);

    expect(stateProps).toEqual({
      isLoggedIn: state.account.isLoggedIn,
    });
  });
});
