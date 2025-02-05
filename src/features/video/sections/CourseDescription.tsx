import React from "react";

interface CourseDescriptionProps {
  description: string;
}

export const CourseDescription: React.FC<CourseDescriptionProps> = ({ description }) => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Tentang Kursus</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
        Mulai Latihan Soal
      </button>
    </div>
  );
};
