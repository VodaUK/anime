import React from 'react';
import TinderCard from 'react-tinder-card';
import { motion } from 'framer-motion';
import { Anime } from '../App';

type AnimeSwiperProps = {
  animeList: Anime[];
  onSwipe: (animeId: number, direction: string) => void;
};

const AnimeSwiper: React.FC<AnimeSwiperProps> = ({ animeList, onSwipe }) => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      {animeList.map((anime) => (
        <TinderCard
          key={anime.id}
          onSwipe={(direction) => onSwipe(anime.id, direction)}
          preventSwipe={['up', 'down']}
        >
          <motion.div
            className="bg-gray-800 p-4 rounded shadow-lg relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={anime.coverImage} alt={anime.title} className="w-64 h-96 object-cover rounded" />
            <h2 className="text-xl mt-4 text-center">{anime.title}</h2>
          </motion.div>
        </TinderCard>
      ))}
    </div>
  );
};

export default AnimeSwiper;
