import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import CheckMark from "./CheckMark";

  interface Props {
    name: string;
    filters?: {
      [key: string]: string | number;
    }[];
  }


const RatingFilter:React.FC<Props> = ({name,filters}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={name} className="border-border">
        <AccordionTrigger className="hover:no-underline text-base text-dark-1 font-normal">
          {name}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          
          {
            filters?.map((filter, index) => (
              <CheckMark
                key={index}
                label={filter.label as string}
                value={filter.value}
                index={index}
                isRating
              />
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default RatingFilter