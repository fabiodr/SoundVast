import React from 'react';
import { graphql } from 'react-relay';
import { compose, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import Genres from './genres';
import genreTypeNames from '../shared/utilities/genreTypeNames';

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
    type,
    coverImageUrl
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
  withProps(({ type }) => {
    if (type === genreTypeNames.liveStream) {
      return {
        typeUrl: 'radios',
      };
    }

    if (type === genreTypeNames.music) {
      return {
        typeUrl: 'songs',
      };
    }

    throw new Error('genre type url not set up for this genre type');
  }),
);

const GenresContainer = enhance(Genres);

export const routeConfig = {
  Component: GenresContainer,
  query,
  render: ({ props }) => (
    props && <GenresContainer genres={props.genres} type={props.params.type} />
  ),
  prepareVariables: ({ type }) => ({ type }),
};

export default GenresContainer;
