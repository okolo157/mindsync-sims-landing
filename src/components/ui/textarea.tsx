import * as React from "react";

import { cn } from "@/lib/utils";
import { toSentenceCase } from "@/utils/textTransformUtils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  enableUppercaseDisplay?: boolean;
  transformValue?: (value: string) => string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      enableUppercaseDisplay = true, // Reverted to original default
      transformValue,
      onChange,
      ...props
    },
    ref
  ) => {
    // Use custom transformer or default to sentence case
    const transformer = transformValue || toSentenceCase;

    // Handle input change with transformation
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) {
        // If transformations are disabled, pass the event directly
        if (!enableUppercaseDisplay && !transformValue) {
          onChange(e);
          return;
        }

        // Apply transformation to the value before passing to parent
        const transformedValue = transformer(e.target.value as string);
        
        // Create a new event with the transformed value
        const event = {
          ...e,
          target: {
            ...e.target,
            value: transformedValue,
          },
        };
        
        onChange(event as React.ChangeEvent<HTMLTextAreaElement>);
      }
    };

    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          enableUppercaseDisplay ? "uppercase" : "",
          className
        )}
        ref={ref}
        {...props}
        onChange={handleChange}
        style={
          enableUppercaseDisplay
            ? { textTransform: "uppercase", ...props.style }
            : props.style
        }
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };