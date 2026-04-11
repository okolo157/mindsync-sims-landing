import { motion } from "framer-motion";
import { Check, Smartphone, Download, Bell, FileText, Bus, MessageSquare, UserCheck, Calendar } from "lucide-react";

export const MobileAppShowcase = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#030712] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Content Side */}
                    <div className="flex-1 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold mb-6">
                                <Smartphone className="w-4 h-4" />
                                <span>Mobile Experience</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                                School in Your Pocket
                            </h2>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Don't wait for parent-teacher conferences. Get real-time updates on grades, attendance, and school announcements directly on your phone.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Instant Push Notifications for Announcements",
                                    "Real-time Homework & Result Checking",
                                    "Secure Fee Payments via App",
                                    "Direct Teacher-Parent Messaging"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                                    <Download className="w-5 h-5" />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold opacity-80">Download on</div>
                                        <div className="text-sm font-bold leading-none">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                                    <Download className="w-5 h-5" />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold opacity-80">Get it on</div>
                                        <div className="text-sm font-bold leading-none">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side */}
                    {/* Visual Side */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2 relative h-[600px] items-center">
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[80px] -z-10" />

                        {/* CSS-Only Phone Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative w-[300px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden z-10"
                        >
                            {/* Screen Content - Coded UI */}
                            <div className="absolute top-0 w-full h-full bg-slate-50 dark:bg-slate-900 flex flex-col pt-12">
                                {/* App Header */}
                                <div className="px-6 mb-6 flex justify-between items-center">
                                    <div>
                                        <div className="text-xs text-slate-500 font-medium">Good Morning,</div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">Mrs. Adebayo 👋</div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                        <span className="text-xs font-bold text-indigo-600">JD</span>
                                    </div>
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="px-6 grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-indigo-500 p-4 rounded-2xl text-white">
                                        <div className="text-xs opacity-80 mb-1">Attendance</div>
                                        <div className="text-2xl font-bold">98%</div>
                                    </div>
                                    <div className="bg-purple-100 dark:bg-slate-800 p-4 rounded-2xl">
                                        <div className="text-xs text-slate-500 mb-1">Avg. Grade</div>
                                        <div className="text-2xl font-bold text-slate-900 dark:text-white">A-</div>
                                    </div>
                                </div>

                                {/* Recent Activity List */}
                                <div className="flex-1 bg-white dark:bg-slate-800/50 rounded-t-[2.5rem] p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="font-bold text-slate-900 dark:text-white">Recent Updates</h4>
                                        <span className="text-xs text-indigo-500 font-medium">See All</span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Item 1 */}
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">Math Assignment</div>
                                                <div className="text-xs text-slate-500">Submitted • 2 mins ago</div>
                                            </div>
                                        </div>
                                        {/* Item 2 */}
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                                <Bell className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">School Fee Due</div>
                                                <div className="text-xs text-slate-500">Reminder • 1 hr ago</div>
                                            </div>
                                        </div>
                                        {/* Item 3 */}
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                                <Smartphone className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">Bus Arrived</div>
                                                <div className="text-xs text-slate-500">Transport • 5 mins ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2 px-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <div className="w-1 h-1 rounded-full bg-slate-600" />
                            </div>
                        </motion.div>

                        {/* LEFT SIDE BADGES */}

                        {/* Badge 1: Academics (Upper Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute top-24 -left-2 md:-left-8 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce-slow z-30"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase">Academics</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">Report Card Ready</div>
                            </div>
                        </motion.div>

                        {/* Badge 2: Fees (Middle Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce-slow z-30"
                            style={{ animationDelay: '1.5s' }}
                        >
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                <Check className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase">Fees</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">Payment Received</div>
                            </div>
                        </motion.div>

                        {/* Badge 3: Chat (Lower Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-32 -left-2 md:-left-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce-slow z-30"
                            style={{ animationDelay: '0.5s' }}
                        >
                            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                                <MessageSquare className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase">Mr. Mensah</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">Sent a message</div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE BADGES */}

                        {/* Badge 4: Attendance (Upper Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="absolute top-32 -right-4 md:-right-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce-slow z-30"
                            style={{ animationDelay: '2s' }}
                        >
                            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                <UserCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase">Attendance</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">Marked Present</div>
                            </div>
                        </motion.div>

                        {/* Badge 5: Transport (Middle Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0 }}
                            className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-8 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce-slow z-30"
                            style={{ animationDelay: '1s' }}
                        >
                            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                                <Bus className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase">Transport</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">Bus Arrived</div>
                            </div>
                        </motion.div>

                        {/* Badge 6: Event (Lower Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 }}
                            className="absolute bottom-24 -right-2 md:right-0 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 animate-bounce-slow z-30"
                            style={{ animationDelay: '2.5s' }}
                        >
                            <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase">Event</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">Sports Day</div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};
