import React from "react";
import { motion } from "framer-motion";
import { Check, X, Smartphone, ArrowRight } from "lucide-react";
import {
  SUBSCRIPTION_TIERS,
  MODULE_INFO,
  CATEGORY_COLORS,
  SubscriptionTier,
  ModuleCategory,
} from "@/config/subscriptionTiers";

const ALL_MODULES = Object.keys(MODULE_INFO);

const TIER_ORDER: SubscriptionTier[] = ["basic", "pro", "advanced"];

const TIER_STYLES = {
  basic: {
    header: "bg-gradient-to-r from-blue-500 to-cyan-500",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  pro: {
    header: "bg-gradient-to-r from-indigo-500 to-purple-500",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  },
  advanced: {
    header: "bg-gradient-to-r from-amber-500 to-orange-500",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
};

// Group modules by category
const modulesByCategory = ALL_MODULES.reduce((acc, moduleId) => {
  const info = MODULE_INFO[moduleId];
  if (!acc[info.category]) acc[info.category] = [];
  acc[info.category].push(info);
  return acc;
}, {} as Record<ModuleCategory, (typeof MODULE_INFO)[string][]>);

export const TierComparisonView: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Header Row */}
        {/* Header Row */}
        <div className="grid grid-cols-4 gap-4 mb-6 pt-2">
          <div className="p-4">
            <h3 className="font-semibold text-slate-700 dark:text-slate-300">
              Features & Modules
            </h3>
          </div>
          {TIER_ORDER.map((tier, index) => {
            const config = SUBSCRIPTION_TIERS[tier];
            const styles = TIER_STYLES[tier];
            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  p-4 pb-5 rounded-2xl text-center text-white
                  ${styles.header}
                  ${config.recommended ? "ring-2 ring-offset-2 ring-purple-400 dark:ring-offset-slate-900" : ""}
                `}
              >
                <h3 className="font-bold text-lg">{config.name}</h3>
                <p className="text-sm text-white/80 mt-1">
                  {config.modules.length} modules
                </p>
                {config.recommended && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile App Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-4 gap-4 mb-6 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Mobile App Access
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Parent & Staff Apps
              </p>
            </div>
          </div>
          {TIER_ORDER.map((tier) => {
            const hasMobile = SUBSCRIPTION_TIERS[tier].hasMobileApp;
            return (
              <div key={tier} className="flex items-center justify-center">
                {hasMobile ? (
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Check className="w-5 h-5" />
                    <span className="text-sm font-medium">Included</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-400">
                    <X className="w-5 h-5" />
                    <span className="text-sm">Not included</span>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Category Sections */}
        {Object.entries(modulesByCategory).map(([category, modules], catIndex) => {
          const colors = CATEGORY_COLORS[category as ModuleCategory];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + catIndex * 0.1 }}
              className="mb-6"
            >
              {/* Category Header */}
              <div className={`flex items-center gap-2 mb-3 px-4 py-2 rounded-lg ${colors.bg}`}>
                <div className={`w-3 h-3 rounded-full ${colors.bg} ${colors.border} border-2`} />
                <span className={`font-semibold text-sm capitalize ${colors.text}`}>
                  {category.replace("-", " ")}
                </span>
              </div>

              {/* Module Rows */}
              {modules.map((module, modIndex) => (
                <div
                  key={module.id}
                  className={`
                    grid grid-cols-4 gap-4 py-3 px-4
                    ${modIndex % 2 === 0 ? "bg-slate-50/50 dark:bg-slate-800/20" : ""}
                    rounded-lg
                  `}
                >
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">
                      {module.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {module.description}
                    </p>
                  </div>
                  {TIER_ORDER.map((tier) => {
                    const isIncluded = SUBSCRIPTION_TIERS[tier].modules.includes(module.id);
                    return (
                      <div key={tier} className="flex items-center justify-center">
                        {isIncluded ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <X className="w-4 h-4 text-slate-400" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          );
        })}

        {/* Upgrade Path */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700"
        >
          {TIER_ORDER.map((tier, index) => {
            const styles = TIER_STYLES[tier];
            return (
              <React.Fragment key={tier}>
                <span className={`px-4 py-2 rounded-full font-semibold text-sm ${styles.badge}`}>
                  {SUBSCRIPTION_TIERS[tier].name}
                </span>
                {index < TIER_ORDER.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
