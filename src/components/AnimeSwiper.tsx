import React from 'react';
import TinderCard from 'react-tinder-card';
import { motion } from 'framer-motion';

type Anime = {
  id: number;
  title: string;
  coverImage: string;
};

type Props = {
  animeList: Anime[];
  onSwipe: (animeId: number, direction: string) => void;
};

const AnimeSwiper: React.FC<Props> = ({ animeList, onSwipe }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {animeList.map((anime) => (
        <TinderCard
          key={anime.id}
          onSwipe={(direction) => onSwipe(anime.id, direction)}
          className="absolute"
        >
          <motion.div
            className="bg-gray-800 p-4 rounded shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src={anime.coverImage} alt={anime.title} className="w-full rounded" />
            <h2 className="text-white text-xl mt-2">{anime.title}</h2>
          </motion.div>
        </TinderCard>
      ))}
    </div>
  );
};

export default AnimeSwiper;
