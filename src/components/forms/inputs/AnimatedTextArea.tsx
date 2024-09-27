import React,{ forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormControl,FormLabel } from "@/components/ui/form";

interface Props {
  label: string;
  text: string;
  error: string;
}

const AnimatedTextArea: React.FC<Props> = forwardRef(({
  label,
  text,
  error,
  ...props
},ref) => {
  return (
    <div className="relative">
      <FormControl>
        <Textarea
        ref={ref as any}
          {...props}
          className={`peer focus:border-dark-1 rounded-xl ${
            error ? "border-red-500" : "border-zinc-200"
          }`}
        />
      </FormControl>
      <FormLabel
        className={`bg-background peer-focus:-top-[18px] transition-all duration-300 left-[15px] font-normal absolute py-[5px] px-[7px] text-sm ${
          text ? "-top-[15px] xs:-top-[18px]" : "top-[10px]"
        } xs:text-base text-dark-1`}
      >
        {label}
      </FormLabel>
    </div>
  );
});
AnimatedTextArea.displayName="AnimatedTextArea"

export default AnimatedTextArea;
