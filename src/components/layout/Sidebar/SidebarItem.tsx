import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface SidebarItemProps {
  item: { path: string; icon: React.ElementType; label: string };
  open: boolean;
  pathname: string;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ item, open, pathname, onClick }) => {
  return (
    <Link
      href={item.path}
      className={cn(
        "flex items-center space-x-3 rounded-lg p-3",
        pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      <item.icon className="h-6 w-6 flex-shrink-0" />
      <motion.span
        animate={{
          display: open ? "inline-block" : "none",
          opacity: open ? 1 : 0,
        }}
        className="whitespace-pre font-medium"
      >
        {item.label}
      </motion.span>
    </Link>
  );
};
