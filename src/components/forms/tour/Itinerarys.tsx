import React, { useEffect, useState } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import AnimatedInput from "../inputs/AnimatedInput";
import AnimatedTextArea from "../inputs/AnimatedTextArea";

import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface Props {
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues, any>;
  isSubmitSuccessful: boolean;
}

type ItineraryType = {
  title: string;
  description: string;
};

const Itinerarys: React.FC<Props> = ({
  errors,
  isSubmitting,
  getValues,
  setValue,
  control,
  isSubmitSuccessful,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [itinerarys, setItinerarys] = useState<Array<ItineraryType>>(
    getValues("itinerarys") || []
  );

  useEffect(() => {
    if (isSubmitSuccessful) {
      setItinerarys([]);
    }
  }, [isSubmitSuccessful]);

  const props = {
    value:title,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
  };

  const desc = {
    value:description,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
  };

  const handleItineraryAdd = () => {
    const itinerary = {
      title,
      description,
    };

    const existingArray = [...itinerarys];

    existingArray.push(itinerary);
    setItinerarys(existingArray);
    setValue("itinerarys", existingArray);
    setTitle("");
    setDescription("");
  };

  const handleRemoveItinerary = (index: number) => {
    const existingArray = [...itinerarys];

    const filteredArray = existingArray.filter((_, i) => i !== index);
    setItinerarys(filteredArray);
    setValue("itinerarys", filteredArray);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <AnimatedInput
          labelBg="bg-white"
          label={"Title"}
          text={title}
          type="text"
          disabled={isSubmitting}
          {...props}
        />
        <AnimatedTextArea
          labelBg="bg-white"
          label={"Description"}
          text={description}
          disabled={isSubmitting}
          {...desc}
        />
        <Button type="button" onClick={handleItineraryAdd}>
          Add
        </Button>
      </div>
      {itinerarys.length > 0 && (
        <div className="flex flex-col gap-6 mt-4 border border-solid border-border rounded-lg px-2 py-6">
          {itinerarys.map((iti, i) => {
            const inputValue = {
              value: iti.title,
            };

            const textAreaValue = {
              value: iti.description,
            };

            return (
              <div className="flex flex-col gap-6" key={i}>
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Title"}
                  text={iti.title}
                  type="text"
                  disabled
                  {...inputValue}
                />
                <AnimatedTextArea
                  labelBg="bg-white"
                  label={"Description"}
                  text={iti.description}
                  disabled
                  {...textAreaValue}
                />
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={handleRemoveItinerary.bind(null, i)}
                >
                  Remove
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Itinerarys;
