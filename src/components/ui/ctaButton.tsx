import { ArrowRight } from "lucide-react";
import { Button } from "./button";

import { cn } from "@/lib/utils";

export const CTAButton = ({
  children,
  onClick,
  size = "sm",
  className,
  icon: Icon = ArrowRight,
  iconClassName,
  variant,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
  size?: "sm" | "lg";
  className?: string;
  icon?: React.ElementType;
  iconClassName?: string;
  variant?:
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
  [key: string]: any;
}) => (
  <Button
    size={size}
    variant={variant}
    onClick={onClick}
    className={cn(
      "inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md rounded-lg transition-all duration-200 font-semibold",
      className
    )}
    aria-label={typeof children === "string" ? children : "Call to action"}
    {...props}
  >
    {children}
    <Icon className={cn("ml-2 h-4 w-4", iconClassName)} />
  </Button>
);
