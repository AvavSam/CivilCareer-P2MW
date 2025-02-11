import React from "react";
import { Play } from "lucide-react";
import { LearningPath } from "@/types/constants";
import Image from "next/image";

interface CourseCardProps {
  path: LearningPath;
  onClick: (path: LearningPath) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ path, onClick }) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm" onClick={() => onClick(path)}>
      <div className="relative h-48">
        <Image src={path.thumbnail} alt={path.title} width={100} height={100} className="h-full w-full object-cover" />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
          <Play className="h-12 w-12 text-white" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-gray-800">{path.title}</h3>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div className="h-2 rounded-full bg-blue-600" style={{ width: `${path.progress}%` }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">{path.progress}% selesai</p>
      </div>
    </div>
  );
};
