import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  GraduationCap,
  UserCog,
  BookOpen,
  ClipboardCheck,
  Clock,
  CalendarDays,
  UserCheck,
  Receipt,
  Wallet,
  Package,
  Building,
  Bus,
  Library,
  PiggyBank,
  LucideIcon,
} from "lucide-react";
import { ModuleInfo, CATEGORY_COLORS } from "@/config/subscriptionTiers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ICON_MAP: Record<string, LucideIcon> = {
  Calendar,
  Users,
  GraduationCap,
  UserCog,
  BookOpen,
  ClipboardCheck,
  Clock,
  CalendarDays,
  UserCheck,
  Receipt,
  Wallet,
  Package,
  Building,
  Bus,
  Library,
  PiggyBank,
};

interface ModuleNodeProps {
  module: ModuleInfo;
  index: number;
  total: number;
  radius?: number;
  centerX?: number;
  centerY?: number;
  isConstellation?: boolean;
}

export const ModuleNode: React.FC<ModuleNodeProps> = ({
  module,
  index,
  total,
  radius = 180,
  centerX = 200,
  centerY = 200,
  isConstellation = true,
}) => {
  const Icon = ICON_MAP[module.icon] || BookOpen;
  const colors = CATEGORY_COLORS[module.category];

  // Calculate position for constellation view
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = isConstellation ? centerX + radius * Math.cos(angle) : 0;
  const y = isConstellation ? centerY + radius * Math.sin(angle) : 0;

  const nodeContent = (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
      transition={{
        delay: 0.3 + index * 0.08,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className={`${isConstellation ? "absolute" : "relative"} group cursor-pointer`}
      style={
        isConstellation
          ? {
            left: x,
            top: y,
            zIndex: 10,
          }
          : undefined
      }
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 12 }}
        className={`
          relative w-20 h-20 rounded-full
          flex items-center justify-center
          bg-white/10 dark:bg-white/5 backdrop-blur-xl
          border-2 ${colors.border}
          shadow-[0_0_20px_rgba(0,0,0,0.1)]
          transition-all duration-500
          group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]
          overflow-hidden
        `}
      >
        {/* Planet Core Gradient */}
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${colors.bg.replace('bg-', 'from-').replace('dark:bg-', 'dark:from-')} to-transparent`} />

        {/* Orbital Ring Decoration */}
        <div className="absolute inset-0 border border-white/10 rounded-full scale-90" />

        <Icon className={`w-8 h-8 ${colors.text} drop-shadow-md z-10`} />
      </motion.div>

      {/* Floating Label */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 text-center pointer-events-none">
        <span className={`
          block text-[10px] font-black uppercase tracking-widest
          ${colors.text} opacity-0 group-hover:opacity-100
          transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
        `}>
          {module.name}
        </span>
        <div className={`
          text-[9px] font-bold leading-tight
          text-slate-600 dark:text-slate-300
          group-hover:opacity-0 transition-opacity duration-300
          line-clamp-1 mt-0.5
        `}>
          {module.name}
        </div>
      </div>
    </motion.div>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{nodeContent}</TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
      >
        <div className="p-2">
          <p className="font-semibold text-sm text-slate-900 dark:text-white">
            {module.name}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            {module.description}
          </p>
          <span
            className={`inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}
          >
            {module.category.replace("-", " ")}
          </span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
