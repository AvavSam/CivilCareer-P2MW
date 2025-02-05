import React from 'react';
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMenuStore } from '@/store/useMenuStore';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { menuItems } = useMenuStore();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">CivilCareer</span>
        </div>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center space-x-3 rounded-lg p-3 ${
              pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
