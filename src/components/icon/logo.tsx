import { Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <Link href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <Building2 className="h-8 w-8 text-blue-600" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre text-xl font-bold text-gray-800"
      >
        CivilCareer
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <Building2 className="h-8 w-8 text-blue-600" />
    </Link>
  );
};
