
import {
    WifiOff,
    ShieldCheck,
    Zap,
    Globe2
} from "lucide-react";

export const Differentiation = () => {
    const features = [
        {
            title: "Built for Global Resilience",
            description: "Optimized for diverse connectivity environments and international payment infrastructures.",
            icon: Globe2,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Offline-First Architecture",
            description: "Keep working even when the internet goes down. Data syncs automatically when connection is restored.",
            icon: WifiOff,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        {
            title: "Bank-Grade Security",
            description: "NDPR compliant with local data residency. Your school's data never leaves the secure vault.",
            icon: ShieldCheck,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
        {
            title: "Lightning Fast",
            description: "Zero bloat. Pages load instantly, ensuring your staff spends less time waiting and more time working.",
            icon: Zap,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        }
    ];

    return (
        <div className="py-20 relative overflow-hidden bg-white dark:bg-[#030712]">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Why Schools Choose Mindsync
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            More than just features. We provide the infrastructure for excellence.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
