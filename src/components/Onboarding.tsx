import React from 'react';

type OnboardingProps = {
  onFinish: () => void;
};

const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Добро пожаловать в Anime Tracker</h1>
      <p className="mb-8 text-center">
        Свайпай карточки, чтобы отметить просмотренные аниме. Нажми вправо, если смотрел, влево – если нет. После завершения тебе будет доступен экспорт списка.
      </p>
      <button
        onClick={onFinish}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Начать
      </button>
    </div>
  );
};

export default Onboarding;
