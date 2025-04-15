import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ANIME = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

type Anime = {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
};

const AnimeLoader: React.FC<{ page: number; perPage: number; onData: (data: Anime[]) => void }> = ({ page, perPage, onData }) => {
  const { loading, error, data } = useQuery(GET_ANIME, { variables: { page, perPage } });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred.</p>;
  
  // Передача загруженных данных в родительский компонент
  onData(data.Page.media);
  return null;
};

export default AnimeLoader;
