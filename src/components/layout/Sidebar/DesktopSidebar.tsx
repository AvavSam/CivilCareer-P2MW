import React from "react";
import { motion } from "framer-motion";
import { Logo, LogoIcon } from "@/components/icon/logo";
import { SidebarItem } from "./SidebarItem";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface DesktopSidebarProps {
  open: boolean;
  menuItems: { path: string; icon: React.ElementType; label: string }[];
  pathname: string;
  onToggle: () => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ open, menuItems, pathname, onToggle }) => {
  return (
    <motion.div
      className="hidden h-full w-64 bg-white px-4 py-4 shadow-lg md:flex md:flex-col"
      animate={{
        width: open ? "256px" : "80px",
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex-shrink-0">{open ? <Logo /> : <LogoIcon />}</div>

        <nav className="mt-8 flex flex-1 flex-col gap-2">
          {menuItems.map((item, index) => (
            <SidebarItem key={index} item={item} open={open} pathname={pathname} />
          ))}
        </nav>

        <div className="mt-auto border-t pt-4">
          <button onClick={onToggle} className="flex items-center justify-center rounded-lg p-2 hover:bg-gray-100">
            {open ? (
              <PanelLeftClose className="h-5 w-5 text-gray-600" />
            ) : (
              <PanelLeftOpen className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopSidebar;
