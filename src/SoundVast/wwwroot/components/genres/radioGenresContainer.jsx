import React from 'react';
import { graphql } from 'react-relay';
import { compose, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import Genres from './genres';

const query = graphql`
  query radioGenresContainerQuery {
    liveStreamGenres {
      ...radioGenresContainer_genres
    }
  }
`;

const fragments = graphql`
  fragment radioGenresContainer_genres on Genre @relay(plural: true) {
    id,
    name,
    coverImageUrl
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
);

const GenresContainer = enhance(Genres);

export const routeConfig = {
  Component: GenresContainer,
  query,
  render: ({ props }) =>
    props && <GenresContainer genres={props.radioGenres} typeUrl="radios" />,
};

export default GenresContainer;
