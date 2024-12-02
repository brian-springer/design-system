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
  TooltipProps,
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

// Types for different chart variants
type RevenueData = {
  month: string
  volume: number
  trend: number
  target: number
}

type PerformanceData = {
  quarter: string
  actual: number
  target: number
  variance: number
}

type ComparisonData = {
  month: string
  revenue: number
  profit: number
  target: number
}

type StackedData = {
  month: string
  directRevenue: number
  indirectRevenue: number
  trend: number
}

type ComposedData = RevenueData | PerformanceData | ComparisonData | StackedData

// Generate sample data
const generateComposedData = (variant: 'revenue' | 'performance' | 'comparison' | 'stacked' = 'revenue'): ComposedData[] => {
  const generateNoise = (base: number, variance: number) => 
    base + (Math.random() - 0.5) * variance

  if (variant === 'revenue') {
    return Array.from({ length: 12 }, (_, i): RevenueData => {
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
    return Array.from({ length: 4 }, (_, i): PerformanceData => {
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
    return Array.from({ length: 12 }, (_, i): ComparisonData => {
      const revenue = 1000 + i * 100 + generateNoise(0, 200)
      return {
        month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
        revenue: Math.round(revenue),
        profit: Math.round(revenue * 0.3),
        target: Math.round(revenue * 0.25)
      }
    })
  }

  return Array.from({ length: 12 }, (_, i): StackedData => {
    const baseRevenue = 1000 + i * 100
    return {
      month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
      directRevenue: Math.round(baseRevenue * 0.6 + generateNoise(0, 100)),
      indirectRevenue: Math.round(baseRevenue * 0.4 + generateNoise(0, 100)),
      trend: Math.round(baseRevenue + generateNoise(0, 50))
    }
  })
}

// Calculate trend direction
type TrendDirection = 'up' | 'down' | 'neutral'

const calculateTrend = (data: ComposedData[]): TrendDirection => {
  const getValue = (item: ComposedData): number => {
    if ('volume' in item) return item.volume
    if ('actual' in item) return item.actual
    if ('revenue' in item) return item.revenue
    return item.directRevenue + item.indirectRevenue
  }

  const values = data.map(getValue)
  const average = values.reduce((a, b) => a + b, 0) / values.length
  const lastValue = values[values.length - 1]
  
  if (lastValue > average * 1.1) return 'up'
  if (lastValue < average * 0.9) return 'down'
  return 'neutral'
}

// Trend badge component
const getTrendBadge = (trend: TrendDirection) => {
  const icon = {
    up: <TrendingUp className="h-3 w-3" />,
    down: <TrendingDown className="h-3 w-3" />,
    neutral: <Minus className="h-3 w-3" />
  }[trend]

  const variantMap = {
    up: "default",
    down: "destructive",
    neutral: "secondary"
  } satisfies Record<TrendDirection, "default" | "destructive" | "secondary">

  const variant = variantMap[trend]

  return (
    <Badge variant={variant} className="ml-2 px-1.5 py-0.5 font-medium">
      <span className="flex items-center gap-1">
        {icon}
        {trend === 'up' ? 'Trending Up' : trend === 'down' ? 'Trending Down' : 'Stable'}
      </span>
    </Badge>
  )
}

// Props type for the chart component
interface ComposedChartDemoProps {
  data: ComposedData[]
  title?: string
  description?: string
  trend?: TrendDirection
  variant?: 'revenue' | 'performance' | 'comparison' | 'stacked'
}

// Custom tooltip component
const renderTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid gap-2">
        <div className="font-medium">{label}</div>
        {payload.map((entry, index) => {
          if (!entry || typeof entry.value === 'undefined') return null
          return (
            <div key={index} className="grid grid-cols-2 gap-2">
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-medium" style={{ color: entry.color }}>
                {entry.value.toLocaleString()}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Chart rendering logic
const ComposedChartDemo = ({
  data,
  title = "Revenue Metrics",
  description = "Volume and Trend Analysis",
  trend,
  variant = "revenue"
}: ComposedChartDemoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey={variant === "performance" ? "quarter" : "month"}
              tick={{ fill: "hsl(var(--foreground))" }}
              tickLine={{ stroke: "hsl(var(--foreground))" }}
            />
            <YAxis
              tick={{ fill: "hsl(var(--foreground))" }}
              tickLine={{ stroke: "hsl(var(--foreground))" }}
            />
            <Tooltip content={renderTooltip} />
            {variant === 'revenue' && (
              <>
                <Bar dataKey="volume" fill="hsl(var(--primary))" />
                <Line type="monotone" dataKey="trend" stroke="hsl(var(--primary))" dot={false} />
                <ReferenceLine y={(data[0] as RevenueData).target} stroke="hsl(var(--muted))" strokeDasharray="3 3" />
              </>
            )}
            {variant === 'performance' && (
              <>
                <Bar dataKey="actual" fill="hsl(var(--primary))" />
                <Bar dataKey="target" fill="hsl(var(--muted))" />
                <Line type="monotone" dataKey="variance" stroke="hsl(var(--primary))" dot={false} />
              </>
            )}
            {variant === 'comparison' && (
              <>
                <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                <Bar dataKey="profit" fill="hsl(var(--muted))" />
                <Line type="monotone" dataKey="target" stroke="hsl(var(--primary))" dot={false} />
              </>
            )}
            {variant === 'stacked' && (
              <>
                <Bar dataKey="directRevenue" stackId="revenue" fill="hsl(var(--primary))" />
                <Bar dataKey="indirectRevenue" stackId="revenue" fill="hsl(var(--muted))" />
                <Line type="monotone" dataKey="trend" stroke="hsl(var(--primary))" dot={false} />
              </>
            )}
            <Legend />
          </ComposedChart>
        </ResponsiveContainer>
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
    layout: {
      fullscreen: true,
      padding: "2rem"
    },
    docs: {
      description: {
        component: "A composed chart component that supports multiple data visualization types."
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof ComposedChartDemo>

export const VolumeAndTrend: Story = {
  render: () => {
    const [data] = useState<RevenueData[]>(() => generateComposedData('revenue') as RevenueData[])
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
  }
}

export const PerformanceMetrics: Story = {
  render: () => {
    const [data] = useState<PerformanceData[]>(() => generateComposedData('performance') as PerformanceData[])
    const trend = calculateTrend(data)
    return (
      <ComposedChartDemo 
        data={data}
        trend={trend}
        variant="performance"
        title="Performance Analysis"
        description="Quarterly performance vs target with variance"
      />
    )
  }
}

export const RevenueComparison: Story = {
  render: () => {
    const [data] = useState<ComparisonData[]>(() => generateComposedData('comparison') as ComparisonData[])
    const trend = calculateTrend(data)
    return (
      <ComposedChartDemo 
        data={data}
        trend={trend}
        variant="comparison"
        title="Revenue & Profit"
        description="Monthly revenue and profit analysis"
      />
    )
  }
}

export const StackedRevenue: Story = {
  render: () => {
    const [data] = useState<StackedData[]>(() => generateComposedData('stacked') as StackedData[])
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
  }
}
