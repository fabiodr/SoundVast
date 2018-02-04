import React from 'react';
import { graphql } from 'react-relay';
import { compose } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import Genres from './genres';

const query = graphql`
  query genresContainerQuery {
    genres {
      ...genresContainer_genres
    }
  }
`;

const fragments = graphql`
  fragment genresContainer_genres on Genre @relay(plural: true) {
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
    props && <GenresContainer genres={props.genres} typeUrl="radios" />,
};

export default GenresContainer;
