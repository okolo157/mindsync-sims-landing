import { useEffect } from "react";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import {
  CheckCircle2,
  Clock,
  Globe,
  Video,
} from "lucide-react";
import { SEO } from "@/components/SEO";

export default function ScheduleDemo() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script exists, we might need to re-initialize the widget if it doesn't auto-load
      // @ts-ignore
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/okolodubem9/30min',
          parentElement: document.querySelector('.calendly-inline-widget'),
        });
      }
    }

    return () => {
      // We don't necessarily want to remove the script as it might be used if the user returns
      // but we should ensure no duplicate registrations happen
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-300 overflow-x-hidden">
      <SEO
        title="Schedule a Demo | Mindsync"
        description="Book a 30-minute deep dive to see how Mindsync streamlines institutional management. Interactive demo with product specialists."
        canonicalUrl="https://mindsync.solutions/schedule-demo"
      />
      <Navbar />

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Content: Info */}
            <div className="lg:col-span-2 space-y-8 pt-4">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0F172A] to-[#0F172A]/70 dark:from-white dark:to-slate-400">
                  Book a Deep Dive
                </h1>
                <p className="text-lg text-slate-600/90 dark:text-slate-400 leading-relaxed">
                  Experience how Mindsync streamlines institutional management.
                  In this 30-minute session, we'll walk you through the platform
                  and answer your specific questions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "30-Minute Tour",
                    desc: "Quick, effective walkthrough of key modules."
                  },
                  {
                    icon: Video,
                    title: "Interactive Demo",
                    desc: "Live Q&A with our product specialists."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Tailored Solutions",
                    desc: "See features relevant to your institution's size."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                      <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-semibold text-indigo-900 dark:text-indigo-300">Global Availability</span>
                </div>
                <p className="text-sm text-indigo-700/70 dark:text-indigo-400/70">
                  Scheduling is automatically adjusted to your local timezone.
                  Pick a slot that works best for you.
                </p>
              </div>
            </div>

            {/* Right Content: Calendly Widget */}
            <div className="lg:col-span-3">
              <div className="bg-white/60 dark:bg-white/[0.02] border border-white dark:border-white/10 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-none backdrop-blur-md overflow-hidden min-h-[700px] relative">
                {/* Loading Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-600 rounded-full animate-spin" />
                    <p className="text-sm text-slate-500 animate-pulse text-center">
                      Fast tracking your demo...
                    </p>
                  </div>
                </div>

                {/* Calendly Inline Widget */}
                <div
                  className="calendly-inline-widget w-full h-[650px] sm:h-[700px] relative z-10"
                  data-url="https://calendly.com/okolodubem9/30min"
                  style={{ minWidth: '320px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
