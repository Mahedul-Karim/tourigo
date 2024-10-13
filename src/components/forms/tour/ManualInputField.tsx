import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";

interface Props {
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const ManualInputField: React.FC<Props> = ({ getValues, setValue }) => {
  const [highlights, setHighlights] = useState<Array<string>>([]);

  const [text, setText] = useState<string>("");

  const handleDelete = (index: number) => {
    const exisitngHighlight = [...highlights];

    const newHighlight = exisitngHighlight.filter((_, i) => i !== index);
    setHighlights(newHighlight);
    setValue("highlight", newHighlight);
  };

  return (
    <div className="mt-[20px] flex flex-col gap-4">
      <div className="border border-solid border-border rounded-xl px-3 py-1 flex items-center justify-between h-[45px] text-sm">
        <input
          type="text"
          className="grow focus:outline-none"
          placeholder="Highlights..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="text-secondary font-semibold"
          onClick={() => {
            const exisitngHighlight = [...highlights];

            exisitngHighlight.push(text);

            setHighlights(exisitngHighlight);
            setValue("highlight", exisitngHighlight);
            setText("");
          }}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-2 text-sm text-dark-1">
        {highlights.length > 0 &&
          highlights.map((high, i) => (
            <p className="flex items-center justify-between" key={i}>
              <span>
                {i + 1}. {high}
              </span>
              <button onClick={handleDelete.bind(null,i)} type="button">
                <RxCross1 />
              </button>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ManualInputField;
