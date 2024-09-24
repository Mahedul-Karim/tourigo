import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-md border border-zinc-200 bg-transparent p-4 text-xs xs:text-sm shadow-sm placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none",
          className
        )}
        ref={ref}
        rows={5}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
