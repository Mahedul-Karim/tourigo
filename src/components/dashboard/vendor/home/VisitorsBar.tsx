'use client';

import React from 'react'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

  const chartData = [
    { month: "January", visited: 186, wishlist: 80 },
    { month: "February", visited: 305, wishlist: 200 },
    { month: "March", visited: 237, wishlist: 120 },
    { month: "April", visited: 73, wishlist: 190 },
    { month: "May", visited: 209, wishlist: 130 },
    { month: "June", visited: 214, wishlist: 140 },
  ]
  const chartConfig = {
    visited: {
      label: "Visited",
      color: "var(--primary)",
    },
    wishlist: {
      label: "Wishlist",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

const VisitorsBar = () => {
  return (
    <div className='mt-6'>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="visited" fill="var(--color-visited)" radius={4} />
            <Bar dataKey="wishlist" fill="var(--color-wishlist)" radius={4} />
          </BarChart>
        </ChartContainer>
    </div>
  )
}

export default VisitorsBar