import React from 'react';
import { motion } from 'framer-motion';

type FullScreenPreviewProps = {
  anime: {
    id: number;
    title: string;
    coverImage: string;
  } | null;
  onClose: () => void;
};

const FullScreenPreview: React.FC<FullScreenPreviewProps> = ({ anime, onClose }) => {
  if (!anime) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-800 p-4 rounded"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={anime.coverImage} alt={anime.title} className="w-full h-auto rounded" />
        <h2 className="text-2xl mt-4 text-center">{anime.title}</h2>
      </motion.div>
    </div>
  );
};

export default FullScreenPreview;
