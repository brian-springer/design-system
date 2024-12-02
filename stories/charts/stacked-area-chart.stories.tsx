import type { Meta, StoryObj } from "@storybook/react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const StackedAreaChart = () => {
  return (
    <Card className="w-full max-w-6xl">
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div style={{ width: '100%', height: 400, minWidth: '800px' }}>
            <ResponsiveContainer>
              <AreaChart
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                  top: 12,
                  bottom: 12,
                }}
              >
                <CartesianGrid vertical={false} className="stroke-sky-50/20" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                  className="text-sm text-sky-800 dark:text-sky-200"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  className="text-sm text-sky-800 dark:text-sky-200"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="mobile"
                  type="monotone"
                  fill="hsl(var(--chart-3))"
                  fillOpacity={0.4}
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                  stackId="1"
                />
                <Area
                  dataKey="desktop"
                  type="monotone"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.4}
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none text-slate-900 dark:text-slate-100">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-sm text-muted-foreground">
              Total visitors are up 5.2% from last month
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

const meta: Meta<typeof StackedAreaChart> = {
  title: "Charts/StackedAreaChart",
  component: StackedAreaChart,
  parameters: {
    layout: "padded",
    viewport: {
      defaultViewport: 'desktop',
    },
    chromatic: {
      viewports: [1200],
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StackedAreaChart>

export const Default: Story = {}
