import React from 'react';

type ExportListProps = {
  watched: number[];
};

const ExportList: React.FC<ExportListProps> = ({ watched }) => {
  const exportText = JSON.stringify(watched, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportText).then(() => {
      alert('Список скопирован в буфер обмена!');
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Экспорт просмотренных аниме</h1>
      <textarea
        readOnly
        value={exportText}
        className="w-full h-64 p-2 rounded border border-gray-600 bg-gray-800 text-white"
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={handleCopy}
      >
        Копировать в буфер обмена
      </button>
    </div>
  );
};

export default ExportList;
