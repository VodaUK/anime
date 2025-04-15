import React, { useState, useEffect } from 'react';
import AnimeLoader from './components/AnimeLoader';
import AnimeSwiper from './components/AnimeSwiper';
import { saveProgress, loadProgress } from './components/UserProgress';
import ExportList from './components/ExportList';
import ProgressBar from './components/ProgressBar';
import Onboarding from './components/Onboarding';

export interface Anime {
  id: number;
  title: string;
  coverImage: string;
}

const App: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 25;
  const [watched, setWatched] = useState<number[]>(loadProgress());
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [exportVisible, setExportVisible] = useState(false);

  const handleSwipe = (animeId: number, direction: string) => {
    // Допустим, свайп вправо означает, что аниме просмотрено
    if (direction === "right") {
      const newWatched = [...watched, animeId];
      setWatched(newWatched);
      saveProgress(newWatched);
    }
    // Удаляем карточку аниме после свайпа
    setAnimeList((prev) => prev.filter((anime) => anime.id !== animeId));
  };

  const handleDataLoaded = (data: Anime[]) => {
    setAnimeList((prev) => [...prev, ...data]);
  };

  // Если список карточек пуст, загружаем следующую страницу
  useEffect(() => {
    if (animeList.length === 0 && !exportVisible) {
      setPage((prev) => prev + 1);
    }
  }, [animeList, exportVisible]);

  // Демонстрационное условие: если просмотрено более 50 аниме — показываем экспорт списка
  useEffect(() => {
    if (watched.length >= 50) {
      setExportVisible(true);
    }
  }, [watched]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {showOnboarding ? (
        <Onboarding onFinish={() => setShowOnboarding(false)} />
      ) : exportVisible ? (
        <ExportList watched={watched} />
      ) : (
        <div>
          <AnimeSwiper animeList={animeList} onSwipe={handleSwipe} />
          <AnimeLoader page={page} perPage={perPage} onData={handleDataLoaded} />
          <ProgressBar current={watched.length} total={watched.length + animeList.length} />
        </div>
      )}
    </div>
  );
};

export default App;

