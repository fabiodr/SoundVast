import { requestSubscription, graphql } from 'react-relay';

import environment from '../app/environment/environment';

const subscription = graphql`
  subscription commentSubscription {
    commentAdded {
      id
    }
  }
`;

export default () => requestSubscription(
  environment, // see Environment docs
  {
    subscription,
    onError: error => console.error(error), // eslint-disable-line no-console
  },
);
