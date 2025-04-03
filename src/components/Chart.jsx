"use client"

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", Cash: 186, Online: 80 },
  { month: "February", Cash: 305, Online: 200 },
  { month: "March", Cash: 237, Online: 120 },
  { month: "April", Cash: 73, Online: 190 },
  { month: "May", Cash: 209, Online: 130 },
  { month: "June", Cash: 214, Online: 140 },
]

const chartConfig = {
  Cash: {
    label: "Cash",
    color: "#2563eb",
  },
  Online: {
    label: "Online",
    color: "#60a5fa",
  },
}

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[150px] md:w-full w-3/8">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="Cash" fill="var(--color-Cash)" radius={4} />
        <Bar dataKey="Online" fill="var(--color-Online)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

