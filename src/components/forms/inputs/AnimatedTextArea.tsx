import React,{ forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormControl,FormLabel } from "@/components/ui/form";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props {
  label: string;
  text: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  labelBg?:string;
  disabled?:boolean;
}

const AnimatedTextArea: React.FC<Props> = forwardRef(({
  label,
  text,
  error,
  labelBg,
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
        className={`${labelBg ? labelBg : 'bg-background'}  peer-focus:-top-[15px] transition-all duration-300 left-[15px] font-normal absolute py-[5px] px-[7px] text-sm ${
          text ? "-top-[15px]" : "top-[10px]"
        }  text-dark-1`}
      >
        {label}
      </FormLabel>
    </div>
  );
});
AnimatedTextArea.displayName="AnimatedTextArea"

export default AnimatedTextArea;
