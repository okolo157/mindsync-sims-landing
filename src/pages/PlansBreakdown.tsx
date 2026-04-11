import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SubscriptionTier,
  SUBSCRIPTION_TIERS,
} from "@/config/subscriptionTiers";
import { TierComparisonView } from "@/components/Plans/TierComparisonView";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEO } from "@/components/SEO";

export default function PlansBreakdown() {
  const navigate = useNavigate();
  const { tier } = useParams<{ tier?: string }>();

  const [selectedTier] = useState<SubscriptionTier>(
    (tier as SubscriptionTier) || "pro"
  );
  // We can keep `selectedTier` if we want to use it for highlighting/CTA, 
  // though the comparison view shows all tiers.

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white">
      <SEO
        title="Plan Comparison | Mindsync"
        description="Detailed breakdown of features and modules for all Mindsync pricing tiers. Compare Basic, Standard, and Premium plans."
        canonicalUrl={`https://mindsync.solutions/plans/breakdown${tier ? `/${tier}` : ''}`}
      />
      <Navbar />
      <main className="pt-32 pb-10">
        {/* =========================
            NORMAL PAGE HEADER
        ========================== */}
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <Button
            variant="ghost"
            onClick={() => navigate("/plans")}
            className="gap-2 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </Button>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Plan Module Breakdown
              </h1>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                Explore features, limits, and modules included in each
                subscription tier.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            COMPARISON VIEW
        ========================== */}
        <TooltipProvider>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-6 pb-24"
          >
            <TierComparisonView />

            {/* CTA */}
            <div className="mt-20 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Ready to get started with{" "}
                {SUBSCRIPTION_TIERS[selectedTier]?.name || "us"}?
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/schedule-demo")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-6 rounded-2xl"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </TooltipProvider>
      </main>
      <Footer />
    </div>
  );
}
