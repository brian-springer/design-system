import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

// Chart configuration
const chartConfig = {
  volume: {
    label: "Volume",
    color: "#e0f2fe", // sky-100
  },
  trend: {
    label: "Trend",
    color: "#0369a1", // sky-700
  },
  revenue: {
    label: "Revenue",
    color: "#22c55e", // green-500
  },
  profit: {
    label: "Profit",
    color: "#f43f5e", // rose-500
  },
  target: {
    label: "Target",
    color: "#8b5cf6", // violet-500
  }
} satisfies ChartConfig

// Style configuration
const chartStyles = {
  bar: {
    primary: {
      fill: "#e0f2fe",     // sky-100
      stroke: "#7dd3fc",   // sky-300
    },
    secondary: {
      fill: "#bbf7d0",     // green-200
      stroke: "#86efac",   // green-300
    }
  },
  line: {
    primary: {
      stroke: "#0369a1",   // sky-700
      activeDot: "#0ea5e9" // sky-500
    },
    secondary: {
      stroke: "#f43f5e",   // rose-500
      activeDot: "#fda4af" // rose-300
    }
  },
  area: {
    primary: {
      fill: "#e0f2fe",     // sky-100
      stroke: "#7dd3fc",   // sky-300
    }
  }
}

// Generate sample data
const generateComposedData = (variant: 'revenue' | 'performance' | 'comparison' | 'stacked' = 'revenue') => {
  const generateNoise = (base: number, variance: number) => 
    base + (Math.random() - 0.5) * variance

  if (variant === 'revenue') {
    // Revenue data with volume bars and trend line
    return Array.from({ length: 12 }, (_, i) => {
      const base = 1000 + i * 100 + generateNoise(0, 200)
      return {
        month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
        volume: Math.round(generateNoise(500, 200)),
        trend: Math.round(base),
        target: Math.round(1000 + i * 120)
      }
    })
  }

  if (variant === 'performance') {
    // Performance metrics with bars and overlaid line
    return Array.from({ length: 6 }, (_, i) => {
      const base = 80 + i * 5
      return {
        quarter: `Q${i + 1}`,
        actual: Math.round(base + generateNoise(0, 10)),
        target: Math.round(base + 5),
        variance: generateNoise(-5, 10)
      }
    })
  }

  if (variant === 'comparison') {
    // Revenue vs Profit comparison
    return Array.from({ length: 12 }, (_, i) => {
      const revenue = 1000 + i * 100 + generateNoise(0, 200)
      const profitMargin = 0.2 + generateNoise(0, 0.1)
      return {
        month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
        revenue: Math.round(revenue),
        profit: Math.round(revenue * profitMargin),
        target: Math.round(revenue * 0.25)
      }
    })
  }

  // Stacked metrics
  return Array.from({ length: 12 }, (_, i) => {
    const baseRevenue = 1000 + i * 100
    return {
      month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
      directRevenue: Math.round(baseRevenue * 0.6 + generateNoise(0, 100)),
      indirectRevenue: Math.round(baseRevenue * 0.4 + generateNoise(0, 100)),
      trend: Math.round(baseRevenue + generateNoise(0, 50))
    }
  })
}

// Calculate trend
const calculateTrend = (data: any[], key: string = 'trend') => {
  const values = data.map(d => d[key]).filter(v => v !== null)
  if (values.length < 2) return { direction: "unchanged", value: 0, period: "period" }
  
  const change = ((values[values.length - 1] - values[0]) / values[0]) * 100
  return {
    direction: change > 1 ? "up" : change < -1 ? "down" : "unchanged",
    value: Math.abs(Math.round(change * 10) / 10),
    period: "period"
  }
}

// Trend badge component
const getTrendBadge = (trend: { direction: "up" | "down" | "unchanged", value: number, period: string }) => {
  const icon = {
    up: <TrendingUp className="h-3 w-3" />,
    down: <TrendingDown className="h-3 w-3" />,
    unchanged: <Minus className="h-3 w-3" />
  }[trend.direction]
  
  const variant = {
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

interface ComposedChartDemoProps {
  data: any[]
  title?: string
  description?: string
  trend?: {
    direction: "up" | "down" | "unchanged"
    value: number
    period: string
  }
  variant?: "revenue" | "performance" | "comparison" | "stacked"
}

const ComposedChartDemo = ({
  data,
  title = "Revenue Metrics",
  description = "Volume and Trend Analysis",
  trend,
  variant = "revenue"
}: ComposedChartDemoProps) => {
  // Custom tooltip
  const renderTooltip = ({ payload, label, active }) => {
    if (!active || !payload) return null

    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          <div className="font-medium">{label}</div>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-medium" style={{ color: entry.color }}>
                {entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderChart = () => {
    switch (variant) {
      case 'revenue':
        return (
          <>
            <Bar
              dataKey="volume"
              fill={chartStyles.bar.primary.fill}
              stroke={chartStyles.bar.primary.stroke}
              strokeWidth={1}
            />
            <Line
              type="monotone"
              dataKey="trend"
              stroke={chartStyles.line.primary.stroke}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke={chartConfig.target.color}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </>
        )
      
      case 'performance':
        return (
          <>
            <Bar
              dataKey="actual"
              fill={chartStyles.bar.primary.fill}
              stroke={chartStyles.bar.primary.stroke}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke={chartStyles.line.primary.stroke}
              strokeWidth={2}
            />
            <ReferenceLine y={0} stroke="#374151" />
            <Bar
              dataKey="variance"
              fill={chartStyles.bar.secondary.fill}
              stroke={chartStyles.bar.secondary.stroke}
            />
          </>
        )
      
      case 'comparison':
        return (
          <>
            <Bar
              dataKey="revenue"
              fill={chartStyles.bar.primary.fill}
              stroke={chartStyles.bar.primary.stroke}
            />
            <Bar
              dataKey="profit"
              fill={chartStyles.bar.secondary.fill}
              stroke={chartStyles.bar.secondary.stroke}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke={chartConfig.target.color}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </>
        )
      
      case 'stacked':
        return (
          <>
            <Bar
              dataKey="directRevenue"
              stackId="revenue"
              fill={chartStyles.bar.primary.fill}
              stroke={chartStyles.bar.primary.stroke}
            />
            <Bar
              dataKey="indirectRevenue"
              stackId="revenue"
              fill={chartStyles.bar.secondary.fill}
              stroke={chartStyles.bar.secondary.stroke}
            />
            <Line
              type="monotone"
              dataKey="trend"
              stroke={chartStyles.line.primary.stroke}
              strokeWidth={2}
              dot={false}
            />
          </>
        )
    }
  }

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[400px]" config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey={variant === 'performance' ? 'quarter' : 'month'}
                tick={{ fill: "#374151" }}
                tickLine={{ stroke: "#374151" }}
              />
              <YAxis
                tick={{ fill: "#374151" }}
                tickLine={{ stroke: "#374151" }}
              />
              <Tooltip content={renderTooltip} />
              {renderChart()}
              <Legend />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {variant === 'revenue' ? 'Monthly volume and trend analysis' :
           variant === 'performance' ? 'Quarterly performance metrics' :
           variant === 'comparison' ? 'Revenue and profit analysis' :
           'Revenue breakdown with trend'}
        </span>
        {trend && getTrendBadge(trend)}
      </CardFooter>
    </Card>
  )
}

const meta: Meta<typeof ComposedChartDemo> = {
  title: "Charts/ComposedChart",
  component: ComposedChartDemo,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ComposedChartDemo>

export const VolumeAndTrend: Story = {
  render: () => {
    const [data] = useState(() => generateComposedData('revenue'))
    const trend = calculateTrend(data)
    return (
      <ComposedChartDemo 
        data={data}
        trend={trend}
        variant="revenue"
        title="Sales Volume & Trend"
        description="Monthly sales volume with trend line"
      />
    )
  },
}

export const PerformanceMetrics: Story = {
  render: () => {
    const [data] = useState(() => generateComposedData('performance'))
    const trend = calculateTrend(data, 'actual')
    return (
      <ComposedChartDemo 
        data={data}
        trend={trend}
        variant="performance"
        title="Performance Analysis"
        description="Quarterly performance vs target with variance"
      />
    )
  },
}

export const RevenueComparison: Story = {
  render: () => {
    const [data] = useState(() => generateComposedData('comparison'))
    const trend = calculateTrend(data, 'revenue')
    return (
      <ComposedChartDemo 
        data={data}
        trend={trend}
        variant="comparison"
        title="Revenue & Profit"
        description="Monthly revenue and profit analysis"
      />
    )
  },
}

export const StackedRevenue: Story = {
  render: () => {
    const [data] = useState(() => generateComposedData('stacked'))
    const trend = calculateTrend(data)
    return (
      <ComposedChartDemo 
        data={data}
        trend={trend}
        variant="stacked"
        title="Revenue Breakdown"
        description="Direct and indirect revenue with trend"
      />
    )
  },
}
