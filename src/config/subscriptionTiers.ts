// Subscription tier configuration for the multi-tenant system

export type SubscriptionTier = "basic" | "pro" | "advanced";

export type ModuleCategory = "academic" | "student-services" | "finance" | "operations" | "core";

export interface ModuleInfo {
  id: string;
  name: string;
  description: string;
  category: ModuleCategory;
  icon: string;
}

export interface TierConfig {
  id: SubscriptionTier;
  name: string;
  description: string;
  modules: string[];
  features: string[];
  recommended?: boolean;
  hasMobileApp?: boolean;
}

// Category colors for visual grouping
export const CATEGORY_COLORS: Record<ModuleCategory, { bg: string; text: string; border: string }> = {
  academic: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-700 dark:text-indigo-300",
    border: "border-indigo-300 dark:border-indigo-700"
  },
  "student-services": {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-300 dark:border-emerald-700"
  },
  finance: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-300 dark:border-amber-700"
  },
  operations: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-300 dark:border-rose-700"
  },
  core: {
    bg: "bg-slate-100 dark:bg-slate-800/50",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-300 dark:border-slate-600"
  },
};

// Detailed module information
export const MODULE_INFO: Record<string, ModuleInfo> = {
  "calendar-session-management": {
    id: "calendar-session-management",
    name: "Session Management",
    description: "Manage academic sessions, terms, and school calendar",
    category: "core",
    icon: "Calendar",
  },
  "user-management": {
    id: "user-management",
    name: "User Management",
    description: "Manage users, roles, and access permissions",
    category: "core",
    icon: "Users",
  },
  "sis": {
    id: "sis",
    name: "Student Information",
    description: "Complete student records, enrollment, and profiles",
    category: "student-services",
    icon: "GraduationCap",
  },
  "staff-management": {
    id: "staff-management",
    name: "Staff Management",
    description: "Staff profiles, employment data, and assignments",
    category: "core",
    icon: "UserCog",
  },
  "academics": {
    id: "academics",
    name: "Academics",
    description: "Classes, subjects, curriculum, and course management",
    category: "academic",
    icon: "BookOpen",
  },
  "assessment": {
    id: "assessment",
    name: "Assessment",
    description: "Exams, grading, report cards, and academic tracking",
    category: "academic",
    icon: "ClipboardCheck",
  },
  "timetable": {
    id: "timetable",
    name: "Timetable",
    description: "AI-driven scheduling with geospatial travel-time awareness",
    category: "academic",
    icon: "Clock",
  },
  "calendar-events": {
    id: "calendar-events",
    name: "Calendar Events",
    description: "School events, holidays, and activity scheduling",
    category: "core",
    icon: "CalendarDays",
  },
  "billing": {
    id: "billing",
    name: "Billing",
    description: "Fee management, invoicing, and payment tracking",
    category: "finance",
    icon: "Receipt",
  },
  "payroll": {
    id: "payroll",
    name: "Payroll",
    description: "Salary processing, deductions, and staff payments",
    category: "finance",
    icon: "Wallet",
  },
  "inventory": {
    id: "inventory",
    name: "Inventory",
    description: "Stock management, supplies, and procurement",
    category: "operations",
    icon: "Package",
  },
  "fixed-assets": {
    id: "fixed-assets",
    name: "Fixed Assets",
    description: "Asset tracking, depreciation, and maintenance",
    category: "operations",
    icon: "Building",
  },
  "transport-management": {
    id: "transport-management",
    name: "Transport",
    description: "Bus routes, drivers, and student transport",
    category: "operations",
    icon: "Bus",
  },
  "library": {
    id: "library",
    name: "Library",
    description: "Book catalog, borrowing, and library management",
    category: "student-services",
    icon: "Library",
  },
  "finance": {
    id: "finance",
    name: "Finance",
    description: "General ledger, budgeting, and financial reports",
    category: "finance",
    icon: "PiggyBank",
  },
  "sms": {
    id: "sms",
    name: "SMS Center",
    description: "Send SMS notifications and manage templates",
    category: "core",
    icon: "MessageSquare",
  },
  "LMS": {
    id: "LMS",
    name: "Integrated LMS",
    description: "World-class digital learning powered by TutorSmart",
    category: "academic",
    icon: "GraduationCap",
  },
  "educational-games": {
    id: "educational-games",
    name: "Educational Games",
    description: "Kahoot-style interactive learning games",
    category: "academic",
    icon: "Gamepad2",
  },
};

export const SUBSCRIPTION_TIERS: Record<SubscriptionTier, TierConfig> = {
  basic: {
    id: "basic",
    name: "Basic",
    description: "Essential modules for school management",
    hasMobileApp: false,
    modules: [
      "calendar-session-management",
      "user-management",
      "sis",
      "staff-management",
      "academics",
      "assessment",
      "timetable",
      "LMS",
      "educational-games",
    ],
    features: [
      "Academic Session Management",
      "User & Role Management",
      "Student Information System",
      "Staff Management",
      "Class & Subject Management",
      "Assessment & Grading",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro",
    description: "Advanced features for growing schools",
    hasMobileApp: true,
    modules: [
      "calendar-session-management",
      "user-management",
      "sis",
      "staff-management",
      "academics",
      "assessment",
      "calendar-events",
      "billing",
      "payroll",
      "timetable",
      "sms",
      "LMS",
      "educational-games",
    ],
    features: [
      "All Basic features",
      "Calendar Events",
      "Billing & Payments",
      "Payroll Management",
      "Mobile App Access",
    ],
    recommended: true,
  },
  advanced: {
    id: "advanced",
    name: "Advanced",
    description: "Complete solution with all features",
    hasMobileApp: true,
    modules: [
      "calendar-session-management",
      "user-management",
      "sis",
      "staff-management",
      "academics",
      "assessment",
      "calendar-events",
      "billing",
      "payroll",
      "inventory",
      "fixed-assets",
      "transport-management",
      "library",
      "timetable",
      "finance",
      "sms",
      "LMS",
      "educational-games",
    ],
    features: [
      "All Pro features",
      "Inventory Management",
      "Fixed Assets Management",
      "Transport Management",
      "Library System",
      "Finance Management",
      "Mobile App Access",
    ],
  },
};

// Module dependencies - modules that require other modules to function
export const MODULE_DEPENDENCIES: Record<string, string[]> = {
  billing: ["sis"],
  "transport-management": ["sis"],
  library: ["sis"],
  payroll: ["staff-management"],
  assessment: ["academics"],
  timetable: ["academics", "staff-management"],
  sms: ["sis"],
};

// Get all modules for a specific tier
export const getModulesForTier = (tier: SubscriptionTier): string[] => {
  return SUBSCRIPTION_TIERS[tier]?.modules || [];
};

// Get unique modules for a tier (not in lower tiers)
export const getUniqueModulesForTier = (tier: SubscriptionTier): string[] => {
  const tierModules = SUBSCRIPTION_TIERS[tier].modules;

  if (tier === "basic") return tierModules;

  const lowerTier = tier === "pro" ? "basic" : "pro";
  const lowerModules = SUBSCRIPTION_TIERS[lowerTier].modules;

  return tierModules.filter(m => !lowerModules.includes(m));
};

// Get modules grouped by category
export const getModulesByCategory = (modules: string[]): Record<ModuleCategory, ModuleInfo[]> => {
  const grouped: Record<ModuleCategory, ModuleInfo[]> = {
    core: [],
    academic: [],
    "student-services": [],
    finance: [],
    operations: [],
  };

  modules.forEach(moduleId => {
    const info = MODULE_INFO[moduleId];
    if (info) {
      grouped[info.category].push(info);
    }
  });

  return grouped;
};

// Get the tier that contains all specified modules
export const getTierForModules = (modules: string[]): SubscriptionTier => {
  const tiers: SubscriptionTier[] = ["advanced", "pro", "basic"];

  for (const tier of tiers) {
    const tierModules = SUBSCRIPTION_TIERS[tier].modules;
    const hasAllModules = modules.every((m) => tierModules.includes(m));
    if (hasAllModules) {
      return tier;
    }
  }

  return "basic";
};

// Check if a module is included in a tier
export const isModuleInTier = (
  moduleId: string,
  tier: SubscriptionTier
): boolean => {
  return SUBSCRIPTION_TIERS[tier].modules.includes(moduleId);
};

// Validate module selection respects dependencies
export const validateModuleSelection = (
  modules: string[]
): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  for (const module of modules) {
    const dependencies = MODULE_DEPENDENCIES[module];
    if (dependencies) {
      for (const dependency of dependencies) {
        if (!modules.includes(dependency)) {
          errors.push(
            `Module "${module}" requires "${dependency}" to be enabled`
          );
        }
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Get required modules for a given module
export const getRequiredModules = (moduleId: string): string[] => {
  return MODULE_DEPENDENCIES[moduleId] || [];
};

// Get all modules as a flat list
export const getAllModules = (): string[] => {
  return SUBSCRIPTION_TIERS.advanced.modules;
};

// Get module tier badge color
export const getTierBadgeColor = (tier: SubscriptionTier): string => {
  switch (tier) {
    case "basic":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    case "pro":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "advanced":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
};
