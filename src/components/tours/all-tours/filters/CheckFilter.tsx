import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckMark from "./CheckMark";

import { Slider } from "@/components/ui/slider";
import useSearchQuery from "@/hooks/useSearchQuery";
import { useSearchParams } from "next/navigation";

interface Props {
  name: string;
  filters?: {
    [key: string]: string;
  }[];
  isPrice?: boolean;
  field: string;
  inputName?: string;
}

let timeout: any;

const CheckFilter: React.FC<Props> = ({
  name,
  filters,
  isPrice = false,
  field,
}) => {
  const [rangeValue, setRangeValue] = useState<number[]>([0, 10000]);

  const searchParams = useSearchParams();

  const query = searchParams.get(field) || "";

  const { setSearchQuery, deleteSearchQuery } = useSearchQuery();

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === query) {
      deleteSearchQuery(field);
      return;
    }

    setSearchQuery(field, e.target.value);
  };
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
                  if (timeout) {
                    clearTimeout(timeout);
                  }

                  timeout = setTimeout(() => {
                    
                    setSearchQuery(field,e.join("-"));
                  }, 300);

                  setRangeValue(e);
                }}
                max={10000}
                step={100}
                className="pt-[18px]"
              />
              <p className="mt-2 text-xs xs:text-sm text-dark-0 mx-auto">
                Price:
                <span className="text-xs xs:text-sm ml-2 text-dark-1">
                  {rangeValue[0] + "-" + rangeValue[1]}
                </span>
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
                checked={query == filter.value}
                onChange={handleSearchQuery}
              />
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CheckFilter;
