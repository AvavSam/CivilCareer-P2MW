import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/icon/logo";
import { SidebarItem } from "./SidebarItem";
import { IconX } from "@tabler/icons-react";

interface MobileSidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  menuItems: { path: string; icon: React.ElementType; label: string }[];
  pathname: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ mobileOpen, setMobileOpen, menuItems, pathname }) => {
  return (
    <div className="md:hidden">
      <motion.div
        initial={false}
        animate={{
          width: mobileOpen ? "256px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
        className={cn(
          "fixed left-0 top-0 z-30 h-full overflow-hidden bg-white shadow-lg",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col p-4">
          <div className="mb-6 flex items-center justify-between">
            <Logo />
            <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 hover:bg-gray-100">
              <IconX className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                open={true}
                pathname={pathname}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
        </div>
      </motion.div>

      {mobileOpen && <div className="fixed inset-0 z-20 bg-black/20" onClick={() => setMobileOpen(false)} />}
    </div>
  );
};

export default MobileSidebar;
