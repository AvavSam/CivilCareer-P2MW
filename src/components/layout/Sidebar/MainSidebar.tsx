import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/store/useMenuStore";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

interface SidebarProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onOpenChange }) => {
  const pathname = usePathname();
  const { menuItems } = useMenuStore();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isOpen !== undefined) {
      setMobileOpen(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    onOpenChange?.(mobileOpen);
  }, [mobileOpen, onOpenChange]);

  return (
    <>
      <DesktopSidebar open={open} menuItems={menuItems} pathname={pathname} onToggle={() => setOpen(!open)} />
      <MobileSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} menuItems={menuItems} pathname={pathname} />
    </>
  );
};
