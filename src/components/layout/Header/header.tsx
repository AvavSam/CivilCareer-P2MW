import React from "react";
import { Search, Bell } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex flex-1 items-center">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Cari kursus atau materi..."
          className="ml-4 flex-1 rounded-lg border-none bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-500">
          <Bell className="h-6 w-6" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-medium text-gray-700">User</span>
        </div>
      </div>
    </header>
  );
};
