import React from 'react';
import { Play } from 'lucide-react';
import { Course } from '../constants';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="relative h-48">
        <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
          <Play className="h-12 w-12 text-white" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-gray-800">{course.title}</h3>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div className="h-2 rounded-full bg-blue-600" style={{ width: `${course.progress}%` }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">{course.progress}% selesai</p>
      </div>
    </div>
  );
};
