import React from "react";
import { LearningPath } from "@/types/constants";

interface LearningPathCardProps {
  path: LearningPath;
  onClick: (path: LearningPath) => void;
}

export const LearningPathCard: React.FC<LearningPathCardProps> = ({ path, onClick }) => {
  return (
    <div
      className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      onClick={() => onClick(path)}
    >
      <div className="flex items-start space-x-4">
        <img src={path.thumbnail} alt={path.title} className="h-24 w-24 rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="mb-2 font-semibold text-gray-800">{path.title}</h3>
          <p className="mb-3 text-sm text-gray-500">{path.description}</p>
          <div className="mb-2 h-2 w-full rounded-full bg-gray-200">
            <div className="h-2 rounded-full bg-blue-600" style={{ width: `${path.progress}%` }}></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{path.progress}% selesai</span>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Lanjutkan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
