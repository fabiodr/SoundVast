import { graphql, commitMutation } from 'react-relay';

import { environment } from '../../../app/environment/environment';

const mutation = graphql`
  mutation saveSongMutation($formValues: SongInput!) {
    saveSong(song: $formValues) {
      id
    }
  }
`;

export default (formValues) => {
  commitMutation(environment, {
    mutation,
    variables: formValues,
  });
};
