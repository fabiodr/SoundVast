import React from 'react';
import { graphql } from 'react-relay';
import { compose, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import Genres from './genres';
import genreType from './genreType';

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
    coverImages {
      dimention
      imageUrl
    }
  }
`;

const createProps = ({ genres }) => {
  const sortedGenres = {};

  Object.keys(genreType).forEach((key) => {
    sortedGenres[key] = genres.filter(x => x.type === genreType[key]);
  });

  return {
    genres: sortedGenres,
  };
};

const enhance = compose(
  fragmentContainer(fragments),
  withProps(createProps),
);

const GenresContainer = enhance(Genres);

export const routeConfig = {
  Component: GenresContainer,
  query,
  render: ({ props }) =>
    props && <GenresContainer genres={props.genres} typeUrl="radios" />,
};

export default GenresContainer;
