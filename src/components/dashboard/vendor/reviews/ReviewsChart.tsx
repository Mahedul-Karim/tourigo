"use client";

import React from "react";
import SectionHeading from "../../common/SectionHeading";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", goodReview: 186, badReview: 80 },
  { month: "February", goodReview: 305, badReview: 200 },
  { month: "March", goodReview: 237, badReview: 120 },
  { month: "April", goodReview: 73, badReview: 190 },
  { month: "May", goodReview: 209, badReview: 130 },
  { month: "June", goodReview: 214, badReview: 140 },
];
const chartConfig = {
  goodReview: {
    label: "Good Review",
    color: "var(--secondary)",
  },
  badReview: {
    label: "Bad Review",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const ReviewsChart = () => {
  return (
    <div>
      <SectionHeading>Reviews Statistics</SectionHeading>
      <div className="mt-6">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="badReview"
              type="natural"
              fill="var(--color-badReview)"
              fillOpacity={0.4}
              stroke="var(--color-badReview)"
              stackId="a"
            />
            <Area
              dataKey="goodReview"
              type="natural"
              fill="var(--color-goodReview)"
              fillOpacity={0.4}
              stroke="var(--color-goodReview)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ReviewsChart;
