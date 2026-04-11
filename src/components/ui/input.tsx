import * as React from "react";

import { cn } from "@/lib/utils";
import { toSentenceCase } from "@/utils/textTransformUtils";

interface InputProps extends React.ComponentProps<"input"> {
  enableUppercaseDisplay?: boolean;
  transformValue?: (value: string) => string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      enableUppercaseDisplay = true, // Reverted to original default
      transformValue,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    // Use custom transformer or default to sentence case
    const transformer = transformValue || toSentenceCase;

    // Handle input change with transformation
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
            name: e.target.name,
          },
        };
        
        onChange(event as React.ChangeEvent<HTMLInputElement>);
      }
    };

    // Spread all other props except the ones we're handling specially
    const inputProps = {
      ...props,
      value: value,
      onChange: handleChange,
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          enableUppercaseDisplay ? "uppercase" : "",
          className
        )}
        ref={ref}
        {...inputProps}
        style={
          enableUppercaseDisplay
            ? { textTransform: "uppercase", ...props.style }
            : props.style
        }
      />
    );
  }
);
Input.displayName = "Input";

export { Input };