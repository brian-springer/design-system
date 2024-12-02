import { useState, useMemo } from "react"
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
  ComposedChart,
  ReferenceLine,
  Tooltip,
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
const getTimeRangeDays = (timeRange: string) => {
  switch (timeRange) {
    case "7d":
      return 7
    case "14d":
      return 14
    case "30d":
      return 30
    default:
      return 30
  }
}

const generateTimeRangeData = (timeRange: string) => {
  const days = getTimeRangeDays(timeRange)
  const now = new Date()
  
  return Array.from({ length: days }).map((_, i) => {
    const date = new Date(now)
    date.setDate(date.getDate() - (days - i - 1))
    
    // Base value with some randomization
    const baseValue = 500 + Math.random() * 200
    
    // Add trend based on position in the range
    const trendFactor = (i / days) * 300 // Gradually increase over time
    const randomVariation = (Math.random() - 0.5) * 100 // Add some noise
    
    return {
      name: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.round(baseValue + trendFactor + randomVariation)
    }
  })
}

// Generate different datasets based on time range
interface TrendData {
  name: string
  [key: string]: string | number
}

const generateDatasets = (timeRange: string) => {
  const baseData = generateTimeRangeData(timeRange)
  
  return {
    single: baseData.map(item => ({
      name: item.name,
      visitors: item.value
    })),
    multiple: baseData.map(item => ({
      name: item.name,
      desktop: Math.round(item.value * 0.6),
      mobile: Math.round(item.value * 0.4)
    })),
    stacked: baseData.map(item => ({
      name: item.name,
      desktop: Math.round(item.value * 0.5),
      mobile: Math.round(item.value * 0.3),
      tablet: Math.round(item.value * 0.2)
    })),
    negative: baseData.map(item => ({
      name: item.name,
      value: Math.round(item.value * (Math.random() > 0.5 ? 1 : -1))
    }))
  }
}

// Calculate trend from data
const calculateTrend = (data: TrendData[], timeRange: string) => {
  if (!data.length) {
    return {
      direction: "unchanged" as const,
      value: 0,
      period: timeRange
    }
  }

  const firstValue = Number(Object.values(data[0]).find(v => typeof v === 'number')) || 0
  const lastValue = Number(Object.values(data[data.length - 1]).find(v => typeof v === 'number')) || 0
  const difference = lastValue - firstValue
  const percentageChange = (difference / firstValue) * 100

  return {
    direction: difference > 0 ? "up" as const : difference < 0 ? "down" as const : "unchanged" as const,
    value: Math.abs(Math.round(percentageChange * 10) / 10),
    period: timeRange
  }
}

interface HistoricalDataPoint {
  name: string
  value: number
}

interface RegularDataPoint {
  name: string
  [key: string]: string | number  // Allow string indexing for dynamic keys
}

const generateHistoricalData = (timeRange: string) => {
  const days = getTimeRangeDays(timeRange)
  const now = new Date()
  return Array.from({ length: days }).map((_, i) => {
    const date = new Date(now)
    date.setDate(date.getDate() - (days - i - 1))
    return {
      name: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.floor(Math.random() * 1000)
    }
  })
}

interface BarChartConfigItem {
  color: string
  label?: string
}

interface BarChartData {
  [key: string]: BarChartConfigItem
}

interface BarChartProps {
  title?: string
  description?: string
  historicalData?: HistoricalDataPoint[]
  actual?: number
  projected?: number
  goal?: number
  data?: RegularDataPoint[]
  config?: BarChartData
  stacked?: boolean
  showLabels?: boolean
  onTimeRangeChange?: (range: string) => void
  trend?: {
    direction: "up" | "down" | "unchanged"
    value: number
    period: string
  }
  variant?: "default" | "destructive" | "secondary" | "negative"
}

// Multiple bars config
const multipleConfig: BarChartData = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-3))",
  },
} 

// Single bar config
const singleConfig: BarChartData = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
} 

// Stacked config
const stackedConfig: BarChartData = {
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
} 

// Negative config
const negativeConfig: BarChartData = {
  value: {
    label: "Profit/Loss",
    color: "hsl(var(--chart-1))",
  },
} 

const TIME_RANGES = [
  {
    label: "7 days",
    value: "7d",
    icon: Calendar,
  },
  {
    label: "14 days",
    value: "14d",
    icon: Calendar,
  },
  {
    label: "30 days",
    value: "30d",
    icon: Calendar,
  },
] as const

const getTrendBadge = (trend?: { direction: "up" | "down" | "unchanged", value: number, period: string }) => {
  if (!trend) return null
  
  const icon = {
    up: <TrendingUp className="h-3 w-3" />,
    down: <TrendingDown className="h-3 w-3" />,
    unchanged: <Minus className="h-3 w-3" />
  }[trend.direction]
  
  const variantMap = {
    up: "default",
    down: "destructive",
    unchanged: "secondary"
  } as const
  
  const variant = variantMap[trend.direction]
  
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
  title = "Performance Metrics",
  description = "Historical and projected performance analysis",
  historicalData = [],
  actual,
  projected,
  goal,
  data,
  config,
  stacked = false,
  showLabels = false,
  onTimeRangeChange,
  trend,
  variant = "default"
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

  const renderChart = () => {
    const isHistorical = Boolean(historicalData?.length)
    const chartHeight = 350

    const formatXAxis = (value: string) => {
      const date = new Date(value)
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric'
      })
    }

    if (isHistorical) {
      if (!actual || !projected || !goal) return null

      const defaultConfig = {
        value: {
          color: "hsl(var(--primary))",
          label: "Value"
        }
      }

      return (
        <ChartContainer config={defaultConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height={chartHeight}>
            <ComposedChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis 
                dataKey="name" 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
                minTickGap={30}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]} 
                maxBarSize={40}
              />
              <ReferenceLine 
                y={actual} 
                stroke="hsl(var(--primary))" 
                label={{ value: "Actual", position: "right", fill: "hsl(var(--primary))" }} 
              />
              <ReferenceLine 
                y={projected} 
                stroke="hsl(var(--secondary))" 
                label={{ value: "Projected", position: "right", fill: "hsl(var(--secondary))" }} 
              />
              <ReferenceLine 
                y={goal} 
                stroke="hsl(var(--destructive))" 
                label={{ value: "Goal", position: "right", fill: "hsl(var(--destructive))" }} 
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      )
    }

    if (!data?.length || !config) return null

    const processedConfig = Object.entries(config).reduce((acc, [key, value]) => {
      acc[key] = {
        color: value.color || `hsl(var(--chart-${Object.keys(acc).length * 2 + 1}))`,
        label: value.label
      }
      return acc
    }, {} as BarChartData)

    return (
      <ChartContainer config={processedConfig} className="h-full w-full">
        <ResponsiveContainer width="100%" height={chartHeight}>
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
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
              minTickGap={30}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {Object.keys(processedConfig).map((key, index) => {
              const isTopBar = stacked && index === Object.keys(processedConfig).length - 1
              const radius: [number, number, number, number] = isTopBar
                ? [4, 4, 0, 0]
                : [0, 0, 0, 0]

              return (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={variant === "negative" ? undefined : processedConfig[key].color}
                  radius={radius}
                  maxBarSize={40}
                  stackId={stacked ? "stack" : undefined}
                >
                  {variant === "negative" && data.map((entry, index) => {
                    const value = Number(entry[key])
                    return (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={value < 0 ? "hsl(var(--destructive))" : "hsl(var(--primary))"}
                      />
                    )
                  })}
                  {showLabels && (
                    <LabelList
                      dataKey={key}
                      position="top"
                      className="fill-foreground text-xs"
                    />
                  )}
                </Bar>
              )
            })}
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
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
          {onTimeRangeChange && (
            <SplitButton
              options={timeRangeOptions}
              variant="outline"
              value={currentTimeRange}
              onChange={handleTimeRangeChange}
              persistent={true}
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          {renderChart()}
        </div>
      </CardContent>
      {trend && (
        <CardFooter className="flex items-center gap-2 text-sm">
          {getTrendBadge(trend)}
        </CardFooter>
      )}
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
    const [timeRange, setTimeRange] = useState("30d")
    const [data, setData] = useState(() => {
      const baseData = generateDatasets("30d")
      const modifiedData = baseData.single.map((item, index) => {
        const value = item.visitors as number
        if (index < baseData.single.length / 3) {
          return { ...item, visitors: value * 1.2 }
        } else if (index < (baseData.single.length * 2) / 3) {
          return { ...item, visitors: value * 0.8 }
        }
        return item
      })
      return { ...baseData, single: modifiedData }
    })

    const trend = calculateTrend(data.single, timeRange)

    const handleTimeRangeChange = (newTimeRange: string) => {
      setTimeRange(newTimeRange)
      const newData = generateDatasets(newTimeRange)
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
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>Revenue across all products</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChartDemo
            data={data.single}
            config={singleConfig}
            trend={trend}
            onTimeRangeChange={handleTimeRangeChange}
          />
        </CardContent>
      </Card>
    )
  }
}

export const WithLabels: Story = {
  render: () => {
    const [timeRange, setTimeRange] = useState("30d")
    const data = useMemo(() => {
      const days = getTimeRangeDays(timeRange)
      return Array.from({ length: days }, (_, i) => ({
        name: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        value: Math.floor(Math.random() * 1000) + 500
      }))
    }, [timeRange])

    return (
      <Card>
        <CardHeader>
          <CardTitle>Revenue Performance</CardTitle>
          <CardDescription>Monthly revenue analysis and projections</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChartDemo
            data={data}
            config={{
              value: {
                color: "hsl(var(--primary))"
              }
            }}
            showLabels={true}
            trend={{
              direction: "down",
              value: 5,
              period: "month"
            }}
            onTimeRangeChange={setTimeRange}
          />
        </CardContent>
      </Card>
    )
  }
}


export const Multiple: Story = {
  render: () => {
    const [timeRange, setTimeRange] = useState("30d")
    const [data, setData] = useState(() => generateDatasets("30d"))

    const handleTimeRangeChange = (newTimeRange: string) => {
      setTimeRange(newTimeRange)
      setData(generateDatasets(newTimeRange))
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Device Usage</CardTitle>
          <CardDescription>Device usage by platform</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChartDemo
            data={data.multiple}
            config={multipleConfig}
            onTimeRangeChange={handleTimeRangeChange}
          />
        </CardContent>
      </Card>
    )
  }
}

export const Stacked: Story = {
  render: () => {
    const [timeRange, setTimeRange] = useState("30d")
    const [data, setData] = useState(() => generateDatasets("30d"))

    const handleTimeRangeChange = (newTimeRange: string) => {
      setTimeRange(newTimeRange)
      setData(generateDatasets(newTimeRange))
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Device Usage (Stacked)</CardTitle>
          <CardDescription>Device usage by platform</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChartDemo
            data={data.stacked}
            config={stackedConfig}
            stacked
            showLabels
            onTimeRangeChange={handleTimeRangeChange}
          />
        </CardContent>
      </Card>
    )
  }
}

export const Negative: Story = {
  render: () => {
    const [timeRange, setTimeRange] = useState("30d")
    const [data, setData] = useState(() => generateDatasets("30d"))

    const handleTimeRangeChange = (newTimeRange: string) => {
      setTimeRange(newTimeRange)
      setData(generateDatasets(newTimeRange))
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Profit/Loss</CardTitle>
          <CardDescription>Monthly profit and loss</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChartDemo
            data={data.negative}
            config={negativeConfig}
            variant="negative"
            onTimeRangeChange={handleTimeRangeChange}
          />
        </CardContent>
      </Card>
    )
  }
}
