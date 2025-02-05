import { create } from 'zustand';
import {
  Home,
  BookOpen,
  GraduationCap,
  Users,
  MessageSquare,
  Settings,
  FileQuestion,
} from "lucide-react";
import { MenuItem } from '@/components/layout/Sidebar/constant';

type MenuStore = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  menuItems: MenuItem[];
};

export const useMenuStore = create<MenuStore>((set) => ({
  activeMenu: 'dashboard',
  setActiveMenu: (menu) => set({ activeMenu: menu }),
  menuItems: [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: BookOpen, label: "Kursus Saya", path: "/courses" },
    { icon: GraduationCap, label: "Learning Path", path: "/learning-path" },
    { icon: FileQuestion, label: "Latihan Soal", path: "/exercises" },
    { icon: Users, label: "Mentor", path: "/mentors" },
    { icon: MessageSquare, label: "Forum Diskusi", path: "/forum" },
    { icon: Settings, label: "Pengaturan", path: "/settings" },
  ],
}));
