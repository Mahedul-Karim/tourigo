import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckMark from "./CheckMark";
import { useSearchParams } from "next/navigation";
import useSearchQuery from "@/hooks/useSearchQuery";

interface Props {
  name: string;
  filters?: {
    [key: string]: string | number;
  }[];
}

const RatingFilter: React.FC<Props> = ({ name, filters }) => {
  const searchParams = useSearchParams();

  const ratingQuery = searchParams.get("rating")
    ? searchParams
        .get("rating")!
        .split("-")
        .map((rat) => +rat)
    : [];

  const { setSearchQuery, deleteSearchQuery } = useSearchQuery();

  const handleRatingQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ratingQuery.length === 1 && ratingQuery.includes(+e.target.value)) {
      deleteSearchQuery("rating");
      return;
    }

    const ratingArray = !ratingQuery.includes(+e.target.value)
      ? [...ratingQuery, +e.target.value]
      : ratingQuery.filter((rat) => rat !== +e.target.value);

    setSearchQuery("rating", ratingArray.join("-"));
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={name} className="border-border">
        <AccordionTrigger className="hover:no-underline text-base text-dark-1 font-normal">
          {name}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {filters?.map((filter, index) => (
            <CheckMark
              key={index}
              checked={ratingQuery.includes(filter.value as number)}
              label={filter.label as string}
              value={filter.value}
              index={index}
              isRating
              onChange={handleRatingQuery}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RatingFilter;
