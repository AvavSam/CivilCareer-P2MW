import React from "react";
import { Search, Bell } from "lucide-react";
import { IconMenu2 } from "@tabler/icons-react";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4 md:w-1/2 md:pr-10">
        <button onClick={onToggleSidebar} className="rounded-lg p-2 hover:bg-gray-100 md:hidden">
          <IconMenu2 className="h-6 w-6 text-gray-800" />
        </button>
        <div className="flex flex-1 items-center">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Cari kursus atau materi..."
            className="ml-4 flex-1 rounded-lg border-none bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-500">
          <Bell className="h-6 w-6" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center space-x-4">
          <img
            src="https://as1.ftcdn.net/jpg/03/46/83/96/220_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="hidden font-medium text-gray-700 md:inline">User</span>
        </div>
      </div>
    </header>
  );
};
