import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { TrendingUp, TrendingDown, Minus, Clock, Calendar, CalendarDays, CalendarRange } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SplitButton } from "@/components/split-button"
import { ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import { ChartContainer } from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import React from "react"

// Utility function to format dates based on granularity
const formatDate = (date: Date, granularity: 'day' | 'week' | 'month' | 'quarter') => {
  switch (granularity) {
    case 'day':
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    case 'week':
      return `Week ${date.toLocaleDateString('en-US', { day: '2-digit' })}/${date.toLocaleDateString('en-US', { month: '2-digit' })}`
    case 'month':
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    case 'quarter':
      const quarter = Math.floor(date.getMonth() / 3) + 1
      return `Q${quarter} ${date.getFullYear()}`
  }
}

// Generate data for different time ranges
const generateTimeRangeData = (timeRange: string, baseValue: number, trend: 'up' | 'down' | 'flat' = 'flat') => {
  const now = new Date()
  let data: { date: string; value: number }[] = []
  
  switch (timeRange) {
    case "30d": {
      // Daily data for last 30 days
      data = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(now)
        date.setDate(date.getDate() - (29 - i))
        const trendFactor = trend === 'up' ? (i / 30) * 50 : 
                          trend === 'down' ? ((30 - i) / 30) * 50 : 0
        const randomVariation = (Math.random() - 0.5) * 20
        return {
          date: formatDate(date, 'day'),
          value: Math.round(baseValue + trendFactor + randomVariation)
        }
      })
      break
    }
    case "12m": {
      // Monthly data for last 12 months
      data = Array.from({ length: 12 }, (_, i) => {
        const date = new Date(now)
        date.setMonth(date.getMonth() - (11 - i))
        const trendFactor = trend === 'up' ? (i / 12) * 200 : 
                          trend === 'down' ? ((12 - i) / 12) * 200 : 0
        const randomVariation = (Math.random() - 0.5) * 50
        return {
          date: formatDate(date, 'month'),
          value: Math.round(baseValue + trendFactor + randomVariation)
        }
      })
      break
    }
    case "quarter": {
      // Weekly data for last quarter (13 weeks)
      data = Array.from({ length: 13 }, (_, i) => {
        const date = new Date(now)
        date.setDate(date.getDate() - (12 - i) * 7)
        const trendFactor = trend === 'up' ? (i / 13) * 100 : 
                          trend === 'down' ? ((13 - i) / 13) * 100 : 0
        const randomVariation = (Math.random() - 0.5) * 30
        return {
          date: formatDate(date, 'week'),
          value: Math.round(baseValue + trendFactor + randomVariation)
        }
      })
      break
    }
    case "ytd": {
      // Monthly data for year to date
      const currentMonth = now.getMonth()
      data = Array.from({ length: currentMonth + 1 }, (_, i) => {
        const date = new Date(now.getFullYear(), i, 1)
        const trendFactor = trend === 'up' ? (i / (currentMonth + 1)) * 150 : 
                          trend === 'down' ? ((currentMonth + 1 - i) / (currentMonth + 1)) * 150 : 0
        const randomVariation = (Math.random() - 0.5) * 40
        return {
          date: formatDate(date, 'month'),
          value: Math.round(baseValue + trendFactor + randomVariation)
        }
      })
      break
    }
  }
  return data
}

// Generate different datasets based on time range
const generateDatasets = (timeRange: string) => {
  const baseData = generateTimeRangeData(timeRange, 500, 'up')
  
  return {
    single: baseData.map(item => ({
      date: item.date,
      visitors: item.value
    })),
    multiple: baseData.map(item => ({
      date: item.date,
      desktop: Math.round(item.value * 0.6),
      mobile: Math.round(item.value * 0.4)
    })),
    stacked: baseData.map(item => ({
      date: item.date,
      desktop: Math.round(item.value * 0.5),
      mobile: Math.round(item.value * 0.3),
      tablet: Math.round(item.value * 0.2)
    })),
    negative: baseData.map(item => ({
      date: item.date,
      value: item.value * (Math.random() > 0.5 ? 1 : -1)
    }))
  }
}

// Calculate trend from data
const calculateTrend = (
  data: { date: string; [key: string]: string | number }[], 
  timeRange: string
): { direction: "up" | "down" | "unchanged"; value: number; period: string; } | undefined => {
  if (data.length < 2) return undefined
  
  // Get the first numeric value (excluding date)
  const getTotal = (item: any) => {
    const numericValues = Object.entries(item)
      .filter(([key, value]) => key !== 'date' && typeof value === 'number')
      .reduce((sum, [_, value]) => sum + (value as number), 0)
    return numericValues
  }

  const firstValue = getTotal(data[0])
  const lastValue = getTotal(data[data.length - 1])
  const percentChange = ((lastValue - firstValue) / firstValue) * 100

  return {
    value: Math.abs(Math.round(percentChange * 10) / 10),
    direction: percentChange > 0 ? "up" : percentChange < 0 ? "down" : "unchanged",
    period: timeRange === "30d" ? "month" : 
           timeRange === "12m" ? "year" : 
           timeRange === "quarter" ? "quarter" : "ytd"
  }
}

// Multiple bars config
const multipleConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

// Single bar config
const singleConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

// Stacked config
const stackedConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

// Negative config
const negativeConfig = {
  value: {
    label: "Profit/Loss",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const TIME_RANGES = [
  {
    label: "Last 30 days",
    value: "30d",
    icon: CalendarDays,
  },
  {
    label: "Last 12 months",
    value: "12m",
    icon: Calendar,
  },
  {
    label: "Last quarter",
    value: "quarter",
    icon: CalendarRange,
  },
  {
    label: "Year to date",
    value: "ytd",
    icon: Clock,
  },
]

interface BarChartProps {
  data: { date: string; [key: string]: string | number }[]
  config: ChartConfig
  title?: string
  description?: string
  trend?: {
    direction: "up" | "down" | "unchanged"
    value: number
    period: string
  }
  variant?: "default" | "destructive" | "secondary" | "negative"
  stacked?: boolean
  showLabels?: boolean
  onTimeRangeChange?: (range: string) => void
}

const getTrendBadge = (trend?: { direction: "up" | "down" | "unchanged", value: number, period: string }) => {
  if (!trend) return null
  
  const icon = {
    up: <TrendingUp className="h-3 w-3" />,
    down: <TrendingDown className="h-3 w-3" />,
    unchanged: <Minus className="h-3 w-3" />
  }[trend.direction]
  
  const variant: "default" | "destructive" | "secondary" = {
    up: "default",
    down: "destructive",
    unchanged: "secondary"
  }[trend.direction]
  
  return (
    <Badge variant={variant} className="ml-2 px-1.5 py-0.5 font-medium">
      <span className="flex items-center gap-1.5">
        {icon}
        {trend.value}% this {trend.period}
      </span>
    </Badge>
  )
}

const BarChartDemo = ({
  data,
  config,
  title,
  description,
  trend,
  variant = "default",
  stacked = false,
  showLabels = false,
  onTimeRangeChange,
}: BarChartProps) => {
  const [currentTimeRange, setCurrentTimeRange] = useState("30d")

  const handleTimeRangeChange = (value: string) => {
    setCurrentTimeRange(value)
    onTimeRangeChange?.(value)
  }

  const timeRangeOptions = TIME_RANGES.map((opt) => ({
    label: opt.label,
    value: opt.value,
    icon: <opt.icon size={16} />,
  }))

  const dataKeys = Object.keys(config)
  const isNegative = variant === "negative"

  const getBarFill = (entry: any) => {
    const value = entry?.value
    return value < 0 
      ? "#94a3b8" // slate-400
      : "#059669" // emerald-600
  }

  const getTrendIcon = () => {
    switch (trend?.direction) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-emerald-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      case "unchanged":
        return <Minus className="h-4 w-4 text-slate-500" />
      default:
        return null
    }
  }

  const getTrendText = () => {
    if (!trend) return null
    const prefix = trend.direction === "unchanged" ? "" : trend.direction === "up" ? "up by" : "down by"
    const className = {
      up: "text-emerald-500",
      down: "text-red-500",
      unchanged: "text-slate-500"
    }[trend.direction]
    
    return trend.direction === "unchanged" ? (
      <span className={className}>Unchanged this month</span>
    ) : (
      <span className={className}>
        {prefix} {Math.abs(trend.value)}% this month
      </span>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-base font-normal">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <SplitButton
            options={timeRangeOptions}
            variant="outline"
            value={currentTimeRange}
            onChange={handleTimeRangeChange}
            persistent={true}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ChartContainer config={config} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                {dataKeys.map((key, index) => {
                  const isTopBar = stacked && index === dataKeys.length - 1
                  const radius: [number, number, number, number] = isTopBar
                    ? [4, 4, 0, 0]
                    : [0, 0, 0, 0]

                  return (
                    <Bar
                      key={key}
                      dataKey={key}
                      fill={isNegative ? undefined : `hsl(var(--chart-${2 * index + 1}))`}
                      radius={radius}
                      maxBarSize={40}
                      stackId={stacked ? "stack" : undefined}
                    >
                      {isNegative && data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarFill(entry)} />
                      ))}
                      {showLabels && (
                        <LabelList
                          dataKey={key}
                          position="top"
                          className="fill-slate-900 dark:fill-slate-100"
                        />
                      )}
                    </Bar>
                  )
                })}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2 text-sm">
        {getTrendBadge(trend)}
      </CardFooter>
    </Card>
  )
}

const meta: Meta<typeof BarChartDemo> = {
  title: "Charts/BarChart",
  component: BarChartDemo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BarChartDemo>

export const Single: Story = {
  render: () => {
    const [data, setData] = useState(() => {
      const baseData = generateDatasets("30d")
      // Modify some values to create different trends
      const modifiedData = baseData.single.map((item, index) => {
        const value = item.visitors as number
        if (index < baseData.single.length / 3) {
          return { ...item, visitors: value * 1.2 } // Upward trend
        } else if (index < (baseData.single.length * 2) / 3) {
          return { ...item, visitors: value * 0.8 } // Downward trend
        }
        return item // Unchanged trend
      })
      return { ...baseData, single: modifiedData }
    })

    const trend = calculateTrend(data.single, "30d")

    const handleTimeRangeChange = (timeRange: string) => {
      const newData = generateDatasets(timeRange)
      // Apply the same modifications to maintain the trend pattern
      const modifiedData = newData.single.map((item, index) => {
        const value = item.visitors as number
        if (index < newData.single.length / 3) {
          return { ...item, visitors: value * 1.2 }
        } else if (index < (newData.single.length * 2) / 3) {
          return { ...item, visitors: value * 0.8 }
        }
        return item
      })
      setData({ ...newData, single: modifiedData })
    }

    return (
      <BarChartDemo
        title="Total Revenue"
        description="Revenue across all products"
        data={data.single}
        config={singleConfig}
        trend={trend}
        onTimeRangeChange={handleTimeRangeChange}
      />
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [data, setData] = useState(generateDatasets("30d"))

    const trend = calculateTrend(data.multiple, "30d")

    return (
      <BarChartDemo
        title="Revenue by Channel"
        description="Compare revenue across different channels"
        data={data.multiple}
        config={multipleConfig}
        trend={trend}
      />
    )
  },
}

export const Stacked: Story = {
  render: () => {
    const [data, setData] = useState(generateDatasets("30d"))

    const trend = calculateTrend(data.stacked, "30d")

    return (
      <BarChartDemo
        title="Revenue by Product"
        description="Compare revenue across product lines"
        data={data.stacked}
        config={stackedConfig}
        stacked={true}
        trend={trend}
      />
    )
  },
}

export const WithLabels: Story = {
  render: () => {
    const [data, setData] = useState(generateDatasets("30d"))

    const trend = calculateTrend(data.single, "30d")

    return (
      <BarChartDemo
        title="Monthly Revenue"
        description="Revenue for the current month"
        data={data.single}
        config={singleConfig}
        showLabels={true}
        trend={trend}
      />
    )
  },
}

export const Negative: Story = {
  render: () => {
    const [data, setData] = useState(generateDatasets("30d"))

    const trend = calculateTrend(data.negative, "30d")

    return (
      <BarChartDemo
        title="Profit/Loss"
        description="Track profit and loss over time"
        data={data.negative}
        config={negativeConfig}
        variant="negative"
        trend={trend}
      />
    )
  },
}
