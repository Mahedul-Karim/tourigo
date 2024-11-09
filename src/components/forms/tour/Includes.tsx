import CheckMark from "@/components/tours/all-tours/filters/CheckMark";
import React, { useEffect, useState } from "react";
import {
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { Button } from "@/components/ui/button";

interface Props {
  setValue: UseFormSetValue<FieldValues>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  getValues: UseFormGetValues<FieldValues>;
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

const Includes: React.FC<Props> = ({
  setValue,
  isSubmitting,
  isSubmitSuccessful,
  getValues,
}) => {
  const [includes, setIncludes] = useState<Array<string>>(
    getValues("includes") || []
  );

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIncludes([]);
    }
  }, [isSubmitSuccessful]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const existingArray = [...includes];

    let newArray;

    if (existingArray.includes(e.target.value)) {
      newArray = existingArray.filter((inc) => inc !== e.target.value);
    } else {
      newArray = [...existingArray, e.target.value];
    }

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
            checked={includes.includes(inc)}
          />
        ))}
      </div>
      <Button
        type="submit"
        className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary"
        disabled={isSubmitting}
        size={"lg"}
      >
        {"Create Tour"}
      </Button>
    </div>
  );
};

export default Includes;
