export const loadProgress = (): number[] => {
  const data = localStorage.getItem('watchedAnimeIds');
  return data ? JSON.parse(data) : [];
};

export const saveProgress = (watchedAnimeIds: number[]) => {
  localStorage.setItem('watchedAnimeIds', JSON.stringify(watchedAnimeIds));
};
