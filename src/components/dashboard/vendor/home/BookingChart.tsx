"use client";

import React from "react";
import SectionHeading from "../../common/SectionHeading";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", booked: 80 },
  { month: "February", booked: 150 },
  { month: "March", booked: 100 },
  { month: "April", booked: 200 },
  { month: "May", booked: 130 },
  { month: "June", booked: 140 },
];

const chartConfig = {
  booked: {
    label: "Booked",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const BookingChart = () => {
  return (
    <div>
      <SectionHeading>Booking Stats</SectionHeading>
      <div className="mt-6">
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray={"3 3"}/>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // ticks={[0, 100, 200, 250, 300]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--primary)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="booked"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--primary)"
              strokeWidth="1.5"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default BookingChart;
