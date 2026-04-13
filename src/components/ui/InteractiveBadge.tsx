import React from 'react';
import { cn } from "@/lib/utils";

/**
 * InteractiveBadge Component
 * A highly stylized, animated badge for status indicators, new features, or premium labels.
 * Mirror version for the SIMS project.
 */

interface InteractiveBadgeProps {
  children?: React.ReactNode;
  variant?: 'premium' | 'new' | 'live' | 'beta';
  className?: string;
  showPulse?: boolean;
}

export const InteractiveBadge: React.FC<InteractiveBadgeProps> = ({
  children,
  variant = 'new',
  className,
  showPulse = false
}) => {
  const variantStyles = {
    premium: "bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    new: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]",
    live: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    beta: "bg-slate-500/10 text-slate-500 border-slate-500/20 shadow-[0_0_15px_rgba(107,114,128,0.1)]",
  };

  const pulseStyles = {
    premium: "bg-amber-500",
    new: "bg-indigo-500",
    live: "bg-emerald-500",
    beta: "bg-slate-500",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border backdrop-blur-md transition-all duration-500 group hover:scale-105 hover:bg-opacity-20 select-none cursor-default overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none transition-transform duration-1000" />
      
      {showPulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", pulseStyles[variant])}></span>
          <span className={cn("relative inline-flex rounded-full h-1.5 w-1.5", pulseStyles[variant])}></span>
        </span>
      )}
      
      <span className="relative z-10">{children || variant}</span>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div 
          className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
          style={{ animationDuration: '3s' }}
        />
      </div>
    </div>
  );
};
