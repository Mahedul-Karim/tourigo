import React, { forwardRef } from "react";
import { FormControl, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  label: string;
  text: string;
  error?: string;
  type:string;
  labelBg?: string;
  disabled?:boolean;
}
const AnimatedInput: React.FC<Props> = forwardRef(
  ({ label, text, error, labelBg,type,disabled, ...props }, ref) => {
    return (
      <div className="relative">
        <FormControl>
          <Input
            ref={ref as any}
            {...props}
            className={`peer focus:border-dark-1 rounded-xl ${
              error ? "border-red-500" : "border-zinc-200"
            } h-[45px] bg-white`}
            type={type}
            disabled={disabled}
          />
        </FormControl>
        <FormLabel
          className={`${
            labelBg ? labelBg : "bg-background"
          } peer-focus:-top-[15px] transition-all duration-300 left-[15px] font-normal absolute py-[5px] px-[7px] text-sm ${
            text ? "-top-[15px]" : "top-[7px]"
          } ${disabled ? 'text-dark-0' : 'text-dark-1'} `}
        >
          {label}
        </FormLabel>
      </div>
    );
  }
);

AnimatedInput.displayName = "AnimatedInput";

export default AnimatedInput;
