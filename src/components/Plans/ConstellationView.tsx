import React from "react";
import { motion } from "framer-motion";
import { ModuleNode } from "./ModuleNode";
import {
  SubscriptionTier,
  SUBSCRIPTION_TIERS,
  MODULE_INFO,
  CATEGORY_COLORS,
} from "@/config/subscriptionTiers";
import { Smartphone } from "lucide-react";

interface ConstellationViewProps {
  tier: SubscriptionTier;
}

const TIER_COLORS = {
  basic: {
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
    ring: "ring-blue-500/50",
  },
  pro: {
    gradient: "from-indigo-500 to-purple-500",
    glow: "shadow-purple-500/30",
    ring: "ring-purple-500/50",
  },
  advanced: {
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/30",
    ring: "ring-amber-500/50",
  },
};

export const ConstellationView: React.FC<ConstellationViewProps> = ({ tier }) => {
  const tierConfig = SUBSCRIPTION_TIERS[tier];
  const tierColors = TIER_COLORS[tier];
  const modules = tierConfig.modules
    .map((id) => MODULE_INFO[id])
    .filter(Boolean);

  // Unique modules to display
  const uniqueModules = [...new Map(modules.map((m) => [m.id, m])).values()];

  // Fixed virtual coordinate system (800x800)
  const centerX = 400;
  const centerY = 400;
  const radius = 320;
  const viewBoxSize = 800;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative overflow-visible">
      {/* Background Stars Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Constellation Container - Perfectly Centered and Adaptive */}
      <div
        className="relative w-[800px] h-[800px] flex-shrink-0 origin-center"
        style={{
          transform: `scale(calc(min(85vw, 75vh) / 800))`,
          marginTop: 'env(safe-area-inset-top)',
          marginBottom: 'env(safe-area-inset-bottom)'
        }}
      >
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          {uniqueModules.map((module, index) => {
            const angle = (index / uniqueModules.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const colors = CATEGORY_COLORS[module.category];

            return (
              <g key={module.id}>
                <motion.line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.15"
                  className={colors.text}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
                {/* Animated pulse along the line */}
                <motion.circle
                  r="2"
                  fill="white"
                  initial={{ offset: 0 }}
                  animate={{ cx: [centerX, x], cy: [centerY, y] }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                  className="opacity-40"
                />
              </g>
            );
          })}
        </svg>

        {/* Center Hub - The Solar Core */}
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`
            absolute
            left-1/2 top-1/2
            w-40 h-40 rounded-full
            bg-gradient-to-br ${tierColors.gradient}
            flex flex-col items-center justify-center
            shadow-[0_0_80px_-10px_rgba(99,102,241,0.6)]
            ring-[12px] ring-white/10
            z-20
          `}
        >
          {/* Internal Glow Pulse */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-white rounded-full blur-xl"
          />

          <span className="relative text-white font-black text-2xl tracking-tighter">{tierConfig.name}</span>
          <span className="relative text-white/80 text-[10px] font-bold uppercase tracking-wider mt-1">
            {uniqueModules.length} Modules
          </span>
          {tierConfig.hasMobileApp && (
            <div className="relative flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
              <Smartphone className="w-3 h-3 text-white" />
              <span className="text-[9px] font-bold text-white">MOBILE READY</span>
            </div>
          )}
        </motion.div>

        {/* Module Nodes */}
        {uniqueModules.map((module, index) => (
          <ModuleNode
            key={module.id}
            module={module}
            index={index}
            total={uniqueModules.length}
            radius={radius}
            centerX={centerX}
            centerY={centerY}
          />
        ))}
      </div>

    </div>
  );
};
