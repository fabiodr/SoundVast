import expect from 'expect';

import formReducer from './formReducer';

describe('formReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = formReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({});
  });

  it('should generate an anti forgery token', () => {
    const actionProps = {
      antiForgeryToken: '0#DERG£%%FDD£',
    };
    const state = formReducer(null, {
      type: 'GENERATE_ANTI_FORGERY_TOKEN',
      ...actionProps,
    });

    expect(state).toEqual(actionProps);
  });
});
