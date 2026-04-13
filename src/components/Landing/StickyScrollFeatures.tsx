import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, BookOpen, ChevronRight, Wallet, Bus, Library, Gamepad2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import mathSprint from "@/assets/math_sprint.png";
import typingMaster from "@/assets/typing_master.png";

export const StickyScrollFeatures = () => {
    const navigate = useNavigate();
    const targetRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);

    // Measure the track width on mount and resize
    useEffect(() => {
        const updateWidth = () => {
            if (trackRef.current) {
                setTrackWidth(trackRef.current.scrollWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Calculate how many "viewports" worth of content we have.
    // We add a bit of extra height (e.g., 100vh) to ensure a smooth transition at the end.
    const containerHeight = useMemo(() => {
        if (trackWidth === 0) return "300vh";
        // Calculate the ratio of track width to viewport width
        // The scroll distance should roughly match the horizontal movement needed
        const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
        const ratio = trackWidth / viewportWidth;
        // We want to lock the scroll for long enough to see all content.
        // A ratio of 3 means the content is 3x as wide as the screen.
        // We might want 400vh in that case (100vh for entry/sticky start + 300vh for movement)
        return `${Math.max(200, Math.ceil((ratio + 1) * 100))}vh`;
    }, [trackWidth]);

    // We track the scroll progress of the entire target wrapper.
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Calculate precise horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${Math.max(0, trackWidth - (typeof window !== "undefined" ? window.innerWidth : 0))}px`]);

    return (
        <section
            ref={targetRef}
            className="relative bg-slate-50 dark:bg-[#030712] mb-12"
            style={{ height: containerHeight }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center overflow-visible py-[8vh] lg:py-[12vh]">

                {/* Sticky Header Section */}
                <div className="w-full max-w-7xl mx-auto px-4 flex-shrink-0 mt-8 mb-4 sm:mb-8 text-center lg:text-left z-10 lg:flex lg:justify-between lg:items-end">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                            Complete School OS
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
                            Beyond the core modules, everything else runs in perfect harmony. Scroll down to explore.
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 hidden lg:block">
                        <Button
                            onClick={() => navigate("/products")}
                            variant="outline"
                            className="rounded-full px-8 h-14 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-white transition-all group shadow-sm text-lg"
                        >
                            View All Modules <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                {/* Scrolling Content Area */}
                <div className="flex-grow w-full flex items-center xl:items-start overflow-visible relative">
                    <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] w-full h-1/2 left-0 top-1/2 -translate-y-1/2 pointer-events-none rounded-full" />

                    <motion.div
                        ref={trackRef}
                        style={{ x }}
                        className="flex gap-8 px-4 sm:px-12 md:px-24 py-8 w-max items-center h-full relative z-10"
                    >
                        {/* Card 1 - Student Management */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 shadow-inner">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Student Management</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    A 360-degree view of every student. Track admission history, medical records, and disciplinary actions in one secure digital vault.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Digital Profiles", "Admissions", "Medical Records", "Guardian Portal"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Academic Excellence */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 shadow-inner">
                                    <BookOpen className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Academic Excellence</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Flexible grading systems, automated report cards, and deep performance analytics. Take control of your curriculum.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Gradebook", "CBT", "Assignments", "Report Cards"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Staff & HR */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400 shadow-inner">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Staff & HR</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Manage teacher workloads, verify attendance, and handle complex leave requests with enterprise-grade HR tools.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Payroll", "Leave Mgmt", "Performance", "Workload"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Finance & Fee Tracking */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent dark:from-rose-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-6 text-rose-600 dark:text-rose-400 shadow-inner">
                                    <Wallet className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Finance & Fee Tracking</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Automate billing cycles, track pending balances, and generate sophisticated institutional ledger reports.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Invoicing", "Online Payments", "Receipts", "Defaulters"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border border-rose-100 dark:border-rose-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 5 - Transport & Logistics */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent dark:from-cyan-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400 shadow-inner">
                                    <Bus className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Transport & Logistics</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Manage entire school bus fleets, optimize routes, track vehicle maintenance, and guarantee student safety.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Route Planning", "Fleet Tracking", "Maintenance", "Manifests"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 6 - Library Management */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent dark:from-violet-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-6 text-violet-600 dark:text-violet-400 shadow-inner">
                                    <Library className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Library Asset Control</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Catalog completely digital inventories, effortlessly manage daily circulation policies, and trace overdue materials.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Cataloging", "Circulation", "Barcodes", "Overdue Fines"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 7 - Integrated LMS */}
                        <div className="w-[85vw] sm:w-[450px] lg:w-[500px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/10 opacity-50" />
                            <div className="relative z-10 flex flex-col h-full items-start justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 shadow-inner">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Integrated LMS</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Powered by TutorSmart, an international LMS provider. Give your students a world-class digital learning experience without the headache of jumping between platforms.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["TutorSmart Integration", "One-Click Login", "Global Standard", "Online Homework"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 8 - Educational Games */}
                        <div className="w-[85vw] sm:w-[500px] lg:w-[650px] min-h-[350px] sm:min-h-[380px] relative flex-shrink-0 group overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-6 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 to-transparent dark:from-fuchsia-900/10 opacity-50" />

                            <div className="relative z-10 flex flex-col h-full items-start justify-center flex-1">
                                <div className="w-14 h-14 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center mb-6 text-fuchsia-600 dark:text-fuchsia-400 shadow-inner">
                                    <Gamepad2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Educational Games</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-md leading-relaxed">
                                    Interactive learning games for a completely different learning experience. Watch student engagement soar when learning feels like playing.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {["Interactive", "Gaming monitoring", "Live Leaderboards"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-100 dark:border-fuchsia-900/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* App Icons Visual */}
                            <div className="relative z-10 hidden md:flex flex-col gap-4 items-center justify-center w-[160px] flex-shrink-0">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -5 }}
                                    className="relative w-28 h-28 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                                >
                                    <img src={mathSprint} alt="Math Sprint App Icon" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    className="relative w-28 h-28 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 -mt-6 ml-12"
                                >
                                    <img src={typingMaster} alt="Typing Master App Icon" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Final Card: End Spacer / CTA snippet inside scroll */}
                        <div className="w-[20vw] h-full flex items-center justify-center flex-shrink-0 opacity-50 lg:hidden">
                            {/* Visual buffer to allow scrolling slightly past last card on small screens */}
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Button Fallback */}
                <div className="w-full px-4 mb-8 flex justify-center lg:hidden z-10 flex-shrink-0">
                    <Button
                        onClick={() => navigate("/products")}
                        variant="outline"
                        className="w-full sm:w-auto rounded-full px-8 h-12 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all shadow-sm"
                    >
                        View All Modules <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

            </div>
        </section>
    );
};
