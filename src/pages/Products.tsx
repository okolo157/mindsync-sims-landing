import { useState } from "react";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
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
  MessageSquare,
  ArrowRight,
  Shield,
  Gamepad2,
  Check
} from "lucide-react";
import { CTAButton } from "@/components/ui/ctaButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MODULE_INFO, CATEGORY_COLORS, getModulesByCategory, ModuleCategory } from "@/config/subscriptionTiers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

// Icon mapping based on MODULE_INFO strings
const ICON_MAP: Record<string, any> = {
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
  MessageSquare,
  Gamepad2,
};

// Detailed definitions for the modal
const MODULE_DETAILS: Record<string, { title: string; features: string[]; benefit: string }> = {
  "calendar-session-management": {
    title: "Session & Term Management",
    features: [
      "Configure academic sessions (e.g., 2024/2025)",
      "Define terms and semesters with start/end dates",
      "Automate session rollover and data archiving",
      "Manage school closure days and holidays"
    ],
    benefit: "Keeps your institution's timeline synchronized and ensures smooth transitions between academic periods."
  },
  "user-management": {
    title: "User Role & Access Control",
    features: [
      "Role-Based Access Control (RBAC)",
      "Granular permission settings for Admin, Staff, and Parents",
      "Activity audit logs for security tracking",
      "Bulk user import and account generation"
    ],
    benefit: "Ensures data security by giving the right people exactly the access they need, and nothing more."
  },
  "sis": {
    title: "Student Information System (SIS)",
    features: [
      "Comprehensive student profiles with biometric data",
      "Guardian and sibling relationship mapping",
      "Medical history and emergency contact records",
      "Document repository for birth certs, previous transcripts"
    ],
    benefit: "A central source of truth for every student, accessible instantly and securely."
  },
  "staff-management": {
    title: "Human Resources & Staff",
    features: [
      "Digital staff folders and employment history",
      "Qualification and certification tracking",
      "Department and designation assignment",
      "Staff attendance and disciplinary records"
    ],
    benefit: "Professionalizes your HR operations, making staff data management paperless and efficient."
  },
  "academics": {
    title: "Academic Curriculum Manager",
    features: [
      "Class and arm/section management (e.g., JSS1 A, JSS1 B)",
      "Subject allocation to specific classes",
      "Curriculum scheme of work planning",
      "Lesson plan submission and approval workflow"
    ],
    benefit: "Standardizes educational delivery across all classrooms and subjects."
  },
  "assessment": {
    title: "Grading & Assessments",
    features: [
      "Customizable grading scales and rubrics",
      "Score entry for CA tests, assignments, and exams",
      "Automated cumulative average calculation",
      "Instant report card generation (PDF)"
    ],
    benefit: "Eliminates calculation errors and reduces report card production time from weeks to seconds."
  },
  "timetable": {
    title: "Symbolic AI Timetable Engine",
    features: [
      "AI-driven Constraint Satisfaction (CSP) engine",
      "Heuristic-based prioritization (NP-hard solver)",
      "Geospatial travel-time pathfinding between buildings",
      "Stochastic optimization for 'Fitness Score' discovery",
      "Live Campus Map with real-time room occupancy",
      "Interactive Wizard for curriculum & constraint setup"
    ],
    benefit: "A sophisticated Symbolic AI engine that solves institutional complexity while respecting teacher quality-of-life and spatial constraints."
  },
  "calendar-events": {
    title: "School Events Calendar",
    features: [
      "Public and private event scheduling",
      "Automated reminders for upcoming events",
      "Category tagging (Sports, Cultural, Academic)",
      "Sync with dashboard widgets"
    ],
    benefit: "Keeps the entire school community informed and engaged with campus activities."
  },
  "attendance": {
    title: "Attendance Tracking",
    features: [
      "Daily class register marking",
      "Biometric or RFID integration support",
      "Absence SMS notifications to parents",
      "Attendance statistical reporting"
    ],
    benefit: "Improves student punctuality and safety with real-time tracking."
  },
  "billing": {
    title: "Student Billing & Fees",
    features: [
      "Define fee structures per class or category",
      "Generate invoices automatically",
      "Track partial payments and outstanding balances",
      "Issue digital receipts instantly"
    ],
    benefit: "Accelerates revenue collection and provides a clear financial picture of outstanding debts."
  },
  "payroll": {
    title: "Staff Payroll",
    features: [
      "Automated salary processing based on grade levels",
      "Deduction management (Tax, Pension, Loan)",
      "Payslip generation and email delivery",
      "Bank payment schedule export"
    ],
    benefit: "Ensures staff are paid accurately and on time, boosting morale and compliance."
  },
  "inventory": {
    title: "Inventory & Store",
    features: [
      "Track stock levels of stationary, uniforms, etc.",
      "Reorder level alerts",
      "Issuance and return tracking",
      "Supplier management"
    ],
    benefit: "Prevents pilferage and ensures essential school supplies are always available."
  },
  "fixed-assets": {
    title: "Fixed Asset Management",
    features: [
      "Registry of all school assets (Furniture, Electronics)",
      "Asset location tracking and depreciation",
      "Maintenance history logging",
      "Barcode/QR code tagging support"
    ],
    benefit: "Protects school property investments and aids in accurate financial auditing."
  },
  "transport-management": {
    title: "Transport & Logistics",
    features: [
      "Route creation and stop management",
      "Vehicle maintenance logs and fuel tracking",
      "Driver allocation and licensing info",
      "Student bus pass management"
    ],
    benefit: "Ensures safe and efficient transportation operations for students and staff."
  },
  "library": {
    title: "Library Management",
    features: [
      "Catalog books, journals, and digital media",
      "Issue and return management with due dates",
      "Overdue fine calculation",
      "OPAC (Online Public Access Catalog) for students"
    ],
    benefit: "Modernizes your library, encouraging reading culture through easy access to resources."
  },
  "finance": {
    title: "Advanced Finance (GL)",
    features: [
      "Double-entry General Ledger system",
      "Chart of Accounts customization",
      "Income statement and Balance sheet generation",
      "Budgeting and expense variance analysis"
    ],
    benefit: "Provides professional-grade accounting capabilities suitable for audits and strategic planning."
  },
  "sms": {
    title: "Communication Center",
    features: [
      "Bulk SMS and Email broadcasting",
      "Message templates for common notifications",
      "Delivery status reporting",
      "Targeted messaging (e.g., specific class parents)"
    ],
    benefit: "Bridges the gap between school and home with instant, reliable communication."
  },
  "LMS": {
    title: "Integrated LMS by TutorSmart",
    features: [
      "Powered by international provider TutorSmart",
      "Totally seamless single sign-on (SSO)",
      "World-class digital coursework and assignments",
      "Interactive multimedia learning materials"
    ],
    benefit: "Gives your school a world-class remote learning environment without making students juggle multiple logins."
  },
  "educational-games": {
    title: "Educational Games",
    features: [
      "Interactive learning games",
      "Math Sprint: Competitive arithmetic races",
      "Typing Master: Keyboard proficiency training",
      "Spelling Bee: Competitive spelling training games",
      "Geography Game: Learn about countries and capitals",
      "Real-time leaderboards and achievements"
    ],
    benefit: "Offers a completely different learning experience that makes kids actually want to practice their core skills."
  },
};

export default function Products() {
  const navigate = useNavigate();
  const modulesByCategory = getModulesByCategory(Object.keys(MODULE_INFO));
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const activeModuleDetails = selectedModule ? MODULE_DETAILS[selectedModule] : null;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mindsync Modules",
    "description": "Explore the comprehensive suite of tools designed to handle every aspect of your institution's operations, from academics to finance.",
    "brand": {
      "@type": "Brand",
      "name": "Mindsync"
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="Modules & Features | Mindsync"
        description="Explore our comprehensive suite of educational modules. From Student Information to Advanced Finance, find the tools to run your school."
        canonicalUrl="https://mindsync.solutions/products"
      />
      <StructuredData data={productSchema} />
      <Navbar />

      {/* Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-20 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/50 dark:from-white dark:via-white/90 dark:to-white/50"
            >
              All Modules,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                One Platform.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600/90 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
            >
              Explore the comprehensive suite of tools designed to handle every aspect of your institution's operations, from academics to finance.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="relative z-10 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">

            {Object.entries(modulesByCategory).map(([category, modules], catIndex) => {
              const colors = CATEGORY_COLORS[category as ModuleCategory];

              // Skip empty categories
              if (modules.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center shadow-sm`}>
                      {/* You could map generic category icons here if desired */}
                      <div className={`w-4 h-4 rounded-full ${colors.text} bg-current opacity-50`} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white capitalize">
                      {category.replace("-", " ")}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 ml-4" />
                  </div>

                  {/* Modules List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module) => {
                      const Icon = ICON_MAP[module.icon] || Shield;

                      return (
                        <motion.div
                          key={module.id}
                          whileHover={{ y: -5 }}
                          className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`w-6 h-6 ${colors.text}`} />
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {module.name}
                          </h3>

                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                            {module.description}
                          </p>

                          <button
                            onClick={() => setSelectedModule(module.id)}
                            className="flex items-center text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-indigo-500 transition-colors mt-auto"
                          >
                            Learn more <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Module Detail Dialog */}
      <Dialog open={!!selectedModule} onOpenChange={(open: boolean) => !open && setSelectedModule(null)}>
        <DialogContent className="sm:max-w-[500px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          {activeModuleDetails && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                  {activeModuleDetails.title}
                </DialogTitle>
                <DialogDescription className="text-base text-slate-600 dark:text-slate-400 pt-2">
                  {activeModuleDetails.benefit}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Key Features</h4>
                <ul className="space-y-3">
                  {activeModuleDetails.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex gap-3">
                <CTAButton
                  onClick={() => navigate("/schedule-demo")}
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  See it in Action
                </CTAButton>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedModule(null)}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Ready to Customize Your Experience?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Choose the modules that fit your school's needs. Upgrade at any time as you grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton
                onClick={() => navigate("/plans")}
                className="px-8 h-14 text-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30"
              >
                View Plans & Pricing
              </CTAButton>
              <button
                onClick={() => navigate("/schedule-demo")}
                className="px-8 h-14 text-lg font-bold text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
