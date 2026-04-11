
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { SUBSCRIPTION_TIERS, SubscriptionTier } from "@/config/subscriptionTiers";
import { CTAButton } from "@/components/ui/ctaButton";
import { Check, HelpCircle, Smartphone, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

export default function Plans() {
  const navigate = useNavigate();

  const openBreakdown = (tier: SubscriptionTier) => {
    navigate(`/plans/breakdown/${tier}`);
  };

  const openComparison = () => {
    navigate("/plans/breakdown?view=compare");
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mindsync Pricing Plans",
    "description": "Simple, transparent pricing. Everything you need to run your school efficiently. No hidden fees."
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <SEO
        title="Pricing Plans | Mindsync"
        description="Flexible pricing plans for schools of all sizes. Choose between Basic, Standard, and Premium tiers with no hidden fees."
        canonicalUrl="https://mindsync.solutions/plans"
      />
      <StructuredData data={pricingSchema} />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 text-[#0F172A] dark:text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600/90 dark:text-slate-400">
              Everything you need to run your school efficiently. No hidden
              fees.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {Object.values(SUBSCRIPTION_TIERS).map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${tier.recommended
                    ? "border-indigo-500 bg-white/80 dark:bg-slate-900 scale-105 z-10 ring-1 ring-indigo-500/50 shadow-indigo-500/10"
                    : "border-white dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md"
                    }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-[#0F172A] dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 min-h-[48px]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Mobile App Badge */}
                  {tier.hasMobileApp && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="mb-6 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                            Mobile App Access
                          </p>
                          <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70">
                            Parent & Staff App Included
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      What's included
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className={`h-5 w-5 shrink-0 ${tier.recommended
                              ? "text-indigo-500"
                              : "text-slate-500"
                              }`}
                          />
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Modules
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tier.modules.slice(0, 6).map((mod, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-white/60 dark:bg-white/10 text-xs text-slate-600 dark:text-slate-300 border border-white dark:border-white/5 font-medium"
                        >
                          {mod.replace(/-/g, " ")}
                        </span>
                      ))}
                      {tier.modules.length > 6 && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 cursor-help flex items-center gap-1">
                              +{tier.modules.length - 6} more{" "}
                              <HelpCircle className="h-3 w-3" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-xs">
                              {tier.modules
                                .slice(6)
                                .join(", ")
                                .replace(/-/g, " ")}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>

                    {/* View Breakdown Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openBreakdown(tier.id)}
                      className="w-full mb-6 gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    >
                      <Eye className="w-4 h-4" />
                      Modules Breakdown
                    </Button>
                  </div>

                  <CTAButton
                    onClick={() => navigate("/schedule-demo")}
                    variant={tier.recommended ? "default" : "outline"}
                    className={`w-full ${tier.recommended
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : ""
                      }`}
                    size="lg"
                  >
                    Get Started with {tier.name}
                  </CTAButton>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>

          {/* Compare All Plans Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={openComparison}
              className="gap-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            >
              Compare All Plans in Detail
            </Button>
          </motion.div>

          <div className="mt-20 text-center bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Need a custom enterprise solution?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              For large districts and universities, we offer tailored plans with
              dedicated support, custom integrations, and SLA guarantees.
            </p>
            <CTAButton
              onClick={() => navigate("/contact")}
              variant="outline"
              size="lg"
              className="bg-white/60 dark:bg-transparent border-white dark:border-indigo-500/30 text-[#0F172A] dark:text-indigo-300 hover:bg-white/80 dark:hover:bg-indigo-900/40"
            >
              Contact Sales
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
