'use client'

import React from 'react'
import SectionHeading from "../../common/SectionHeading";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
  import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
  import { GitCommitVertical, TrendingUp } from "lucide-react"

  const chartData = [
    { month: "January", sales: 186  },
    { month: "February", sales: 305 },
    { month: "March", sales: 237 },
    { month: "April", sales: 73 },
    { month: "May", sales: 209 },
    { month: "June", sales: 214 },
  ]
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "var(--primary)",
    },
    
  } satisfies ChartConfig

const SalesChart = () => {
  return (
    <div>
        <SectionHeading>Average Sales</SectionHeading>
        <div className="mt-6"><ChartContainer config={chartConfig}>
          <LineChart
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="sales"
              type="natural"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="var(--primary-light)"
                    stroke="var(--primary)"
                    
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer></div>
    </div>
  )
}

export default SalesChart