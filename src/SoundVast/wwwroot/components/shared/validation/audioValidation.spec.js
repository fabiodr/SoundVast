import expect from 'expect';

import audioValidation from './audioValidation';

describe('audioValidation', () => {
  it('should return no errors if every field is valid', () => {
    const errors = audioValidation({
      name: 'bubble.mp3',
    });

    expect(errors).toEqual({});
  });

  it('should have an error if name is blank', () => {
    const errors = audioValidation({});

    expect(errors.name).toExist();
  });
});
