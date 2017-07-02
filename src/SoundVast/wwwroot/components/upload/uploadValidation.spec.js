import expect from 'expect';

import uploadValidation from './uploadValidation';

describe('uploadValidation', () => {
  it('should return no errors if every field is valid', () => {
    const errors = uploadValidation({
      name: 'bubble.mp3',
    });

    expect(errors).toEqual({});
  });

  it('should have an error if name is blank', () => {
    const errors = uploadValidation({});

    expect(errors.name).toExist();
  });
});
