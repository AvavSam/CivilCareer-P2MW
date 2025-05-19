import React from 'react';
import Link from 'next/link';
import { Exercise } from '@/app/data/exercisesData';
import { Clock, BarChart2, FileQuestion } from 'lucide-react';

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exercises.map((exercise) => (
        <Link
          href={`/exercises/${exercise.id}`}
          key={exercise.id}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              {exercise.imageUrl ? (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${exercise.imageUrl})` }}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
              <div className={`absolute top-4 right-4 ${getDifficultyColor(exercise.difficulty)} px-2 py-1 rounded-full text-xs font-medium`}>
                {exercise.difficulty}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">{exercise.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{exercise.description}</p>

              <div className="flex items-center text-sm text-gray-500 mt-auto">
                <div className="flex items-center mr-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{exercise.estimatedTime}</span>
                </div>
                <div className="flex items-center mr-4">
                  <FileQuestion className="h-4 w-4 mr-1" />
                  <span>{exercise.questions} questions</span>
                </div>
                <div className="flex items-center">
                  <BarChart2 className="h-4 w-4 mr-1" />
                  <span>{exercise.completionRate}%</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
