"use client";

import React from "react";
import { Pie, PieChart,Legend } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import SectionHeading from "../../common/SectionHeading";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--primary)",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  
} satisfies ChartConfig;

const BookingPie = () => {
  return (
    <div>
      <SectionHeading>Top Bookings</SectionHeading>
      <div className="mt-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto min-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Legend verticalAlign="top" />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default BookingPie;
