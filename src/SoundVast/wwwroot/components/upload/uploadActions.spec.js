import expect from 'expect';
import configureStore from 'redux-mock-store';

import * as actions from './uploadActions';

const mockStore = configureStore();
const store = mockStore({});

describe('uploadActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  it('should add files', () => {
    const files = [
      { title: 'test.mp3' },
    ];
    store.dispatch(actions.addFiles(files));

    expect(calledActions).toEqual([
      {
        type: 'ADD_FILES',
        files,
      },
    ]);
  });

  it('should remove file', () => {
    const index = 0;
    store.dispatch(actions.removeFile(index));

    expect(calledActions).toEqual([
      {
        type: 'REMOVE_FILE',
        index,
      },
    ]);
  });
});
