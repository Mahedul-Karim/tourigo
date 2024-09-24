import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckMark from "./CheckMark";

import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";

interface Props {
  name: string;
  filters?: {
    [key: string]: string;
  }[];
  isPrice?: boolean;
}

const CheckFilter: React.FC<Props> = ({ name, filters, isPrice = false }) => {
  const [rangeValue, setRangeValue] = useState<number[]>([0, 100]);


  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={name} className="border-border">
        <AccordionTrigger className="hover:no-underline text-sm xs:text-base text-dark-1 font-normal">
          {name}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {isPrice && (
            <>
              <Slider
                defaultValue={rangeValue}
                onValueChange={(e) => {
                  setRangeValue(e);
                }}
                max={100}
                step={1}
                className="pt-[18px]"
              />
              <p className="mt-2 text-xs xs:text-sm text-dark-0 mx-auto">
                Price:<span className="text-xs xs:text-sm ml-2 text-dark-1">{rangeValue[0] + "-" + rangeValue[1]}</span>
              </p>
            </>
          )}
          {!isPrice &&
            filters?.map((filter, index) => (
              <CheckMark
                key={index}
                label={filter.label}
                value={filter.value}
                index={index}
              />
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CheckFilter;
