import React from 'react';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';
import { LessonData } from '../constants';

interface LessonListProps {
  lessons: LessonData[];
}

export const LessonList: React.FC<LessonListProps> = ({ lessons }) => {
  return (
    <div className="bg-white h-[400px] overflow-y-auto rounded-lg p-4">
      <h2 className="mb-4 font-semibold text-black">Daftar Materi</h2>
      {lessons.map((lesson, index) => (
        <div
          key={index}
          className="mb-2 flex items-center rounded-lg p-3 hover:bg-gray-50"
        >
          {lesson.completed ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Circle className="h-5 w-5 text-gray-400" />
          )}
          <div className="ml-3 flex-1">
            <p className="text-gray-700">{lesson.title}</p>
            <p className="text-sm text-gray-500">{lesson.duration}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      ))}
    </div>
  );
};
