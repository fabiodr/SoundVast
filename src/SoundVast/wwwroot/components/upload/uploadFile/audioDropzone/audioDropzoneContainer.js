import { compose, withState, withHandlers } from 'recompose';

import AudioDropzone from './audioDropzone';

let fileKey = 0;

export const onDrop = ({ addFiles }) => (files) => {
  addFiles((stateFiles) => {
    const allFiles = stateFiles.concat(files);

    allFiles.forEach((file) => {
      const newFile = file;

      newFile.key = fileKey;
      fileKey += 1;
    });

    return allFiles;
  });
};

export default compose(
  withState('files', 'addFiles', []),
  withHandlers({
    onDrop,
  }),
)(AudioDropzone);
