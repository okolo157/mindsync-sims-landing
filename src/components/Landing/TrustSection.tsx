import { motion } from "framer-motion";
import { Shield, Server, Lock, FileCheck } from "lucide-react";

export const TrustSection = () => {
    return (
        <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1 space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
                        >
                            Enterprise-Grade Compliance & Security
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            We take data protection seriously. Mindsync is built from the ground up to meet stringent data residency and privacy requirements for educational institutions globally.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: Server, label: "Edge Data Residency", desc: "Adaptive regional hosting" },
                                { icon: Shield, label: "Regulatory Compliant", desc: "GDPR, NDPR & Global standards" },
                                { icon: Lock, label: "Bank-Grade Encryption", desc: "256-bit AES protection" },
                                { icon: FileCheck, label: "Daily Backups", desc: "Automated disaster recovery" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{item.label}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full relative"
                    >
                        {/* Visual representation of a secure vault or shield */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[100px]" />
                            <div className="relative z-10 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="text-xs font-mono text-slate-400">SECURE_CONNECTION_ESTABLISHED</div>
                                </div>

                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex justify-between text-green-600 dark:text-green-400">
                                        <span>STATUS:</span>
                                        <span>PROTECTED</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>ENCRYPTION:</span>
                                        <span>AES-256-GCM</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>LOCATION:</span>
                                        <span>GLOBAL_EDGE_DC_01</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>LAST_BACKUP:</span>
                                        <span>JUST NOW</span>
                                    </div>

                                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full mt-6 overflow-hidden">
                                        <motion.div
                                            className="h-full bg-green-500"
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                        />
                                    </div>
                                    <p className="text-center text-xs text-slate-400 mt-2">System Integrity Verified</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
