import React from 'react';
import { CalendarClock, BellPlus } from 'lucide-react';

interface ComingSoonCardProps {
  title?: string;
  description?: string;
  estimatedRelease?: string;
  imageUrl?: string;
}

export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  title = "Coming Soon",
  description = "We're working on exciting new content for you. Stay tuned!",
  estimatedRelease = "Soon",
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col border-2 border-dashed border-gray-300">
      <div className="h-48 bg-gray-100 relative flex items-center justify-center">
        {imageUrl ? (
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${imageUrl})` }} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50">
            <CalendarClock className="h-16 w-16 text-blue-300 mb-2" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
          Coming Soon
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-blue-600">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarClock className="h-4 w-4 mr-1" />
            <span>Estimated release: {estimatedRelease}</span>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
            <BellPlus className="h-4 w-4 mr-1" />
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
};
