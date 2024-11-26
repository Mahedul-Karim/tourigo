import React, { memo, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decenmber",
];

interface Props {
  startDate: number;
  setStartDate: (val: number) => void;
}

const Calendar: React.FC<Props> = ({ startDate, setStartDate }) => {
  const currentDate = new Date();

  const selectedDate = new Date(startDate);

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const firstDayofCurrentMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const lastDayofCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDay();

  const lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

  const lastDateofCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const dates: { date: number; isActive: boolean }[] = [];

  for (let i = firstDayofCurrentMonth; i > 0; i--) {
    dates.push({ date: lastDateofLastMonth - i + 1, isActive: false });
  }

  for (let i = 1; i <= lastDateofCurrentMonth; i++) {
    dates.push({ date: i, isActive: true });
  }
  for (let i = lastDayofCurrentMonth; i < 6; i++) {
    dates.push({ date: i - lastDayofCurrentMonth + 1, isActive: false });
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <button
          className="text-dark-1  disabled:text-gray-400 bg-light size-6 xs:size-8 grid place-items-center rounded-full hover:bg-primary disabled:hover:bg-light hover:text-white transition-all duration-300"
          onClick={prevMonth}
          disabled={currentDate.getMonth() === currentMonth}
        >
          <FaChevronLeft className="text-xs xs:text-sm" />
        </button>
        <p className="text-dark-1 text-sm xs:text-base font-medium">
          {MONTHS.at(currentMonth)}, {currentYear}
        </p>
        <button
          className="text-dark-1  disabled:text-gray-400 bg-light size-6 xs:size-8 grid place-items-center rounded-full hover:bg-primary disabled:hover:bg-light hover:text-white transition-all duration-300"
          onClick={nextMonth}
        >
          <FaChevronRight className="text-xs xs:text-sm" />
        </button>
      </div>
      <div className="grid grid-cols-7 mt-5">
        {DAYS.map((day, i) => (
          <div key={i} className="font-normal text-xs xs:text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-4">
        {dates.map((date, i) => {
          const isDisabled =
            !date.isActive ||
            (currentDate.getMonth() === currentMonth &&
              date.date < currentDate.getDate());

          return (
            <div key={i}>
              <button
                type="button"
                className={`mb-4 disabled:text-gray-400 disabled:hover:bg-transparent hover:bg-primary hover:text-white hover:transition-all hover:duration-300 w-8 h-8 rounded-full text-xs xs:text-sm ${
                  (date.date === +selectedDate.getDate() &&
                  !isDisabled && selectedDate.getMonth() === currentMonth) &&
                  "bg-primary text-white"
                }`}
                disabled={isDisabled}
                onClick={() => {
                  const selectDate = +new Date(
                    currentYear,
                    currentMonth,
                    date.date
                  );

                  setStartDate(selectDate);
                }}
              >
                {date.date}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Calendar);
