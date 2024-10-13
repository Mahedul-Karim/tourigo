import CheckMark from "@/components/tours/all-tours/filters/CheckMark";
import React, { useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface Props {
  setValue: UseFormSetValue<FieldValues>;
  isSubmitting: boolean;
}

const includesArray = [
  "Beverages, drinking water, morning tea and buffet lunch",
  "Hotel pickup and drop-off by air-conditioned minivan",
  "InsuranceTransfer to a private pier",
  "Soft drinks",
  "Tour Guide",
  "Towel",
  "Alcoholic Beverages",
];

const Includes: React.FC<Props> = ({ setValue, isSubmitting }) => {
  const [includes, setIncludes] = useState<Array<string>>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const existingArray = [...includes];

    let newArray;

    if (existingArray.includes(e.target.value)) {
      newArray = existingArray.filter((inc) => inc !== e.target.value);
    } else {
      newArray = [...existingArray, e.target.value];
    }

    console.log(newArray);
    setIncludes(newArray);
    setValue("includes", newArray);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {includesArray.map((inc, i) => (
          <CheckMark
            label={inc}
            value={inc}
            index={i}
            key={i}
            onChange={handleOnChange}
          />
        ))}
      </div>
      <Button
        type="submit"
        className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary"
        disabled={isSubmitting}
        size={"lg"}
      >
        {isSubmitting ? "Creating..." : "Create Tour"}
      </Button>
    </div>
  );
};

export default Includes;
