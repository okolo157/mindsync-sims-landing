import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Zap, Bus, ShieldAlert, CreditCard, ArrowUpRight, Navigation, Map, Check } from "lucide-react";
import CountUp from 'react-countup';
import { useState, useEffect } from "react";

import busImage from "@/assets/bus.png";
import timetableImage from "@/assets/timetable-visual.png";

const TRANSACTIONS = [
    { id: 1, type: "Registration", amount: "$250.00", status: "Successful", time: "Just now" },
    { id: 2, type: "Tuition Fee", amount: "$1,450.00", status: "Successful", time: "2m ago" },
    { id: 3, type: "Library Fine", amount: "$15.00", status: "Successful", time: "5m ago" },
    { id: 4, type: "Uniform Pmt", amount: "$120.00", status: "Successful", time: "12m ago" },
];

const ROUTES = [
    { id: 1, name: "London Central", status: "Active", students: 24 },
    { id: 2, name: "Dubai District 4", status: "En Route", students: 31 },
    { id: 3, name: "Singapore Heights", status: "Pick-up", students: 19 },
];



export const PowerFeatures = () => {
    const [txIndex, setTxIndex] = useState(0);
    const [routeIndex, setRouteIndex] = useState(0);

    useEffect(() => {
        const txInterval = setInterval(() => {
            setTxIndex((prev) => (prev + 1) % TRANSACTIONS.length);
        }, 3000);

        const routeInterval = setInterval(() => {
            setRouteIndex((prev) => (prev + 1) % ROUTES.length);
        }, 4000);



        return () => {
            clearInterval(txInterval);
            clearInterval(routeInterval);
        };
    }, []);

    return (
        <div className="py-20 sm:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        The Powerhouse Modules
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Drive revenue, ensure safety, and solve complexity with our specialized core systems.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Finance Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold mb-6">
                                <Wallet className="w-4 h-4" />
                                <span>Financial Operating System</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                                Complete Financial Control
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                A unified power-suite for your school's finances. Seamlessly manage student billing, staff payroll, and daily expenses—all flowing automatically into a professional General Ledger.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Smart Billing & Multi-Channel Payment Recording",
                                    "Comprehensive Staff Payroll & Tax Management",
                                    "Double-Entry General Ledger & Financial Reporting",
                                    "Budget Controls & Real-time Expense Tracking"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <CreditCard className="w-3 h-3 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] -mr-32 -mt-32" />

                            <div className="space-y-8 relative z-10">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <div className="text-sm text-slate-500 font-medium">Global Revenue (YTD)</div>
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                                            <CountUp
                                                end={124250000}
                                                duration={2.5}
                                                separator=","
                                                enableScrollSpy
                                                scrollSpyOnce
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                        <ArrowUpRight className="w-3 h-3" />
                                        <span>+18%</span>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-white/5 min-h-[100px] flex flex-col justify-center">
                                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-3 tracking-widest">Live Activity</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={txIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center">
                                                    <CreditCard className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900 dark:text-white">{TRANSACTIONS[txIndex].type}</div>
                                                    <div className="text-[10px] text-slate-500">{TRANSACTIONS[txIndex].time}</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-green-600">{TRANSACTIONS[txIndex].amount}</div>
                                                <div className="text-[10px] text-slate-500">{TRANSACTIONS[txIndex].status}</div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 transition-colors hover:border-indigo-500/30"
                                    >
                                        <div className="text-xs text-slate-500 mb-1">Fee Collection</div>
                                        <div className="text-lg font-semibold text-indigo-600">96.4%</div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 mt-2 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "96.4%" }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="bg-indigo-500 h-full"
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 transition-colors hover:border-green-500/30"
                                    >
                                        <div className="text-xs text-slate-500 mb-1">Currency Support</div>
                                        <div className="text-lg font-semibold text-green-600">USD, NGN, GHS...</div>
                                        <div className="text-[10px] text-slate-400 mt-2">15+ Currencies</div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Timetable Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold mb-6">
                                <Zap className="w-4 h-4" />
                                <span>Timetable and Scheduling</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                                AI Timetable Engine
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Solve NP-hard scheduling problems in seconds. Our AI engine combines constraint satisfaction with heuristic search to generate perfect, conflict-free school timetables.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Constraint-Based AI Engine",
                                    "Heuristic-Driven Optimization Logic",
                                    "Geospatial travel-time pathfinding",
                                    "Real-time Campus Occupancy & Maps"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <img
                                src={timetableImage}
                                alt="AI Timetable Optimization and Campus Map"
                                className="w-full rounded-2xl shadow-xl border border-slate-100 dark:border-white/5"
                            />
                        </motion.div>
                    </div>

                    {/* Transport Section */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-semibold mb-6">
                                <Bus className="w-4 h-4" />
                                <span>Transport & Logistics</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                                Global Safety Standards
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Manage your fleet efficiently while giving parents peace of mind regardless of location. Our advanced transport system handles route optimization and student safety worldwide.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Live Bus Tracking & Parent Notifications",
                                    "Automated Global Route Optimization",
                                    "Vehicle Maintenance Scheduling & Fuel Tracking",
                                    "International Safety Compliance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                                            <ShieldAlert className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full relative"
                        >
                            <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full" />
                            <div className="relative group overflow-hidden rounded-2xl">
                                <img
                                    src={busImage}
                                    alt="Diverse group of students boarding school bus"
                                    className="relative w-full rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 z-10 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-4 min-w-[200px]"
                            >
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                        <Navigation className="w-5 h-5 animate-pulse" />
                                    </div>
                                    <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-25" />
                                </div>
                                <div className="flex-1">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={routeIndex}
                                            initial={{ opacity: 0, x: 5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -5 }}
                                        >
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Route: {ROUTES[routeIndex].name}</div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">{ROUTES[routeIndex].status}</div>
                                                <div className="text-[10px] text-green-600 font-bold">{ROUTES[routeIndex].students} Students</div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest">Live GPS Signal</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
