import React from 'react';

type ProgressBarProps = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="absolute bottom-4 left-0 right-0 px-4">
      <div className="bg-gray-700 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-center text-sm mt-1">{percentage}% просмотрено</p>
    </div>
  );
};

export default ProgressBar;
