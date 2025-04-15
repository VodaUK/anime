import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Anime } from '../App';

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

type AnimeLoaderProps = {
  page: number;
  perPage: number;
  onData: (data: Anime[]) => void;
};

const AnimeLoader: React.FC<AnimeLoaderProps> = ({ page, perPage, onData }) => {
  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { page, perPage },
  });

  useEffect(() => {
    if (data && data.Page && data.Page.media) {
      const newAnime = data.Page.media.map((anime: any) => ({
        id: anime.id,
        title: anime.title.romaji,
        coverImage: anime.coverImage.large,
      }));
      onData(newAnime);
    }
  }, [data, onData]);

  if (loading) return <p className="text-center mt-4">Загрузка аниме...</p>;
  if (error) return <p className="text-center mt-4">Ошибка загрузки.</p>;

  return null;
};

export default AnimeLoader;
