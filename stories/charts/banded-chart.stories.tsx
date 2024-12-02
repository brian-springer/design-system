import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
  range: {
    label: "Expected Range",
    color: "#e0f2fe", // sky-100
  },
  actual: {
    label: "Actual Performance",
    color: "#0369a1", // sky-700
  },
  target: {
    label: "Target",
    color: "#f43f5e", // rose-500
  },
  benchmark: {
    label: "Industry Benchmark",
    color: "#8b5cf6", // violet-500
  }
} satisfies ChartConfig

// Style configuration (separate from chart config)
const chartStyles = {
  band: {
    fill: "#e0f2fe",     // sky-100
    stroke: "#7dd3fc",   // sky-300
  },
  line: {
    stroke: "#0369a1",   // sky-700
    activeDot: "#0ea5e9" // sky-500
  },
  target: {
    stroke: "#f43f5e",   // rose-500
    activeDot: "#fda4af" // rose-300
  },
  benchmark: {
    stroke: "#8b5cf6",   // violet-500
    activeDot: "#a78bfa" // violet-400
  }
}

// Generate sample data with more variance
const generateBandedData = (variant: 'performance' | 'forecast' | 'metrics' | 'multiline' | 'curved' = 'performance') => {
  const generateNoise = (base: number, variance: number) => 
    base + (Math.random() - 0.5) * variance

  if (variant === 'multiline') {
    return [
      { month: "Jan", range: [60, 80], actual: 75, target: 70, benchmark: 65 },
      { month: "Feb", range: [65, 85], actual: 73, target: 72, benchmark: 68 },
      { month: "Mar", range: [70, 90], actual: 82, target: 75, benchmark: 72 },
      { month: "Apr", range: [75, 95], actual: 88, target: 78, benchmark: 76 },
      { month: "May", range: [70, 100], actual: 85, target: 80, benchmark: 79 },
      { month: "Jun", range: [80, 110], actual: 92, target: 85, benchmark: 83 },
    ]
  }

  if (variant === 'curved') {
    // Generate smooth curved data using sine wave + noise
    return Array.from({ length: 12 }, (_, i) => {
      const base = 80 + Math.sin(i / 2) * 20
      return {
        month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
        range: [base - 10 + generateNoise(0, 5), base + 10 + generateNoise(0, 5)],
        actual: base + generateNoise(0, 8),
        target: base + 5 + generateNoise(0, 3)
      }
    })
  }

  if (variant === 'performance') {
    // More variance in the performance data
    return Array.from({ length: 6 }, (_, i) => {
      const base = 75 + i * 5 + generateNoise(0, 15)
      return {
        month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
        range: [base - 10, base + 10],
        actual: base + generateNoise(0, 12)
      }
    })
  }

  if (variant === 'forecast') {
    const base = 100
    return Array.from({ length: 6 }, (_, i) => {
      const projected = base + i * 10 + generateNoise(0, 20)
      return {
        month: new Date(2024, i + 6).toLocaleString('default', { month: 'short' }),
        range: [projected - 15, projected + 15],
        actual: i < 3 ? projected + generateNoise(0, 10) : null
      }
    })
  }

  // Metrics variant with quarterly data and higher variance
  return Array.from({ length: 4 }, (_, i) => {
    const base = 150 + i * 50 + generateNoise(0, 40)
    return {
      month: `Q${i + 1}`,
      range: [base - 25, base + 25],
      actual: base + generateNoise(0, 30)
    }
  })
}

interface BandedChartDemoProps {
  data: Array<{
    month: string
    range: [number, number]
    actual: number | null
    target?: number
    benchmark?: number
  }>
  title?: string
  description?: string
  trend?: {
    direction: "up" | "down" | "unchanged"
    value: number
    period: string
  }
  variant?: "performance" | "forecast" | "metrics" | "multiline" | "curved"
}

const BandedChartDemo = ({
  data,
  title = "Performance Metrics",
  description = "Actual vs Expected Range",
  trend,
  variant = "performance"
}: BandedChartDemoProps) => {
  // Custom tooltip that excludes the range data
  const renderTooltip = ({ payload, label, active }) => {
    if (!active || !payload) return null

    const relevantData = payload.filter(p => 
      ["actual", "target", "benchmark"].includes(p.dataKey)
    )
    
    if (relevantData.length === 0) return null

    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          <div className="font-medium">{label}</div>
          {relevantData.map((entry, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-medium" style={{ color: entry.color }}>
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const curveType = variant === 'curved' ? "natural" : "monotone"

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
                dataKey="month"
                tick={{ fill: "#374151" }}
                tickLine={{ stroke: "#374151" }}
              />
              <YAxis
                tick={{ fill: "#374151" }}
                tickLine={{ stroke: "#374151" }}
              />
              <Tooltip content={renderTooltip} />
              <Area
                dataKey="range"
                stroke={chartStyles.band.stroke}
                fill={chartStyles.band.fill}
                connectNulls
                dot={false}
                activeDot={false}
              />
              <Line
                type={curveType}
                dataKey="actual"
                stroke={chartStyles.line.stroke}
                activeDot={{
                  r: 6,
                  fill: chartStyles.line.activeDot,
                  strokeWidth: 2,
                  stroke: chartStyles.line.stroke
                }}
                connectNulls
                strokeWidth={2}
              />
              {variant === 'multiline' && (
                <>
                  <Line
                    type={curveType}
                    dataKey="target"
                    stroke={chartStyles.target.stroke}
                    activeDot={{
                      r: 6,
                      fill: chartStyles.target.activeDot,
                      strokeWidth: 2,
                      stroke: chartStyles.target.stroke
                    }}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <Line
                    type={curveType}
                    dataKey="benchmark"
                    stroke={chartStyles.benchmark.stroke}
                    activeDot={{
                      r: 6,
                      fill: chartStyles.benchmark.activeDot,
                      strokeWidth: 2,
                      stroke: chartStyles.benchmark.stroke
                    }}
                    strokeWidth={2}
                    strokeDasharray="3 3"
                  />
                </>
              )}
              {variant === 'curved' && (
                <Line
                  type={curveType}
                  dataKey="target"
                  stroke={chartStyles.target.stroke}
                  activeDot={{
                    r: 6,
                    fill: chartStyles.target.activeDot,
                    strokeWidth: 2,
                    stroke: chartStyles.target.stroke
                  }}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              )}
              <Legend />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {variant === 'forecast' ? 'Showing forecast range and actuals' : 
           variant === 'multiline' ? 'Comparing against target and industry benchmark' :
           variant === 'curved' ? 'Smooth trend visualization with target' :
           'Showing historical performance'}
        </span>
        {trend && getTrendBadge(trend)}
      </CardFooter>
    </Card>
  )
}

// Calculate trend
const calculateTrend = (data: any[]) => {
  const lastActual = data.filter(d => d.actual !== null).slice(-2)
  if (lastActual.length < 2) return { direction: "unchanged", value: 0, period: "period" }
  
  const change = ((lastActual[1].actual - lastActual[0].actual) / lastActual[0].actual) * 100
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

const meta: Meta<typeof BandedChartDemo> = {
  title: "Charts/BandedChart",
  component: BandedChartDemo,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof BandedChartDemo>

export const Performance: Story = {
  render: () => {
    const [data] = useState(() => generateBandedData('performance'))
    const trend = calculateTrend(data)
    return <BandedChartDemo data={data} trend={trend} />
  },
}

export const Forecast: Story = {
  render: () => {
    const [data] = useState(() => generateBandedData('forecast'))
    const trend = calculateTrend(data)
    return (
      <BandedChartDemo 
        data={data}
        trend={trend}
        variant="forecast"
        title="Performance Forecast"
        description="Expected range with future projections"
      />
    )
  },
}

export const Metrics: Story = {
  render: () => {
    const [data] = useState(() => generateBandedData('metrics'))
    const trend = calculateTrend(data)
    return (
      <BandedChartDemo 
        data={data}
        trend={trend}
        variant="metrics"
        title="Quarterly Metrics"
        description="Performance metrics by quarter"
      />
    )
  },
}

export const MultiLine: Story = {
  render: () => {
    const [data] = useState(() => generateBandedData('multiline'))
    const trend = calculateTrend(data)
    return (
      <BandedChartDemo 
        data={data}
        trend={trend}
        variant="multiline"
        title="Performance Comparison"
        description="Actual performance vs Target and Industry Benchmark"
      />
    )
  },
}

export const CurvedTrend: Story = {
  render: () => {
    const [data] = useState(() => generateBandedData('curved'))
    const trend = calculateTrend(data)
    return (
      <BandedChartDemo 
        data={data}
        trend={trend}
        variant="curved"
        title="Annual Performance Trend"
        description="Smooth visualization of performance trends"
      />
    )
  },
}
