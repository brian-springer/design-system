import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Legend } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Chart configuration with multiple metrics
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#0369a1", // sky-700
  },
  mobile: {
    label: "Mobile",
    color: "#0284c7", // sky-600
  },
  tablet: {
    label: "Tablet",
    color: "#0ea5e9", // sky-500
  },
} satisfies ChartConfig

// Generate data for different months
const generateRadarData = (trend: 'up' | 'down' | 'flat' = 'flat') => {
  const months = ["January", "February", "March", "April", "May", "June"]
  const baseValue = 200
  const multiplier = trend === 'up' ? 1.2 : trend === 'down' ? 0.8 : 1

  return months.map(month => {
    const randomFactor = 0.7 + Math.random() * 0.6 // Random between 0.7 and 1.3
    return {
      month,
      desktop: Math.round(baseValue * randomFactor * multiplier),
      mobile: Math.round(baseValue * 0.8 * randomFactor * multiplier),
      tablet: Math.round(baseValue * 0.6 * randomFactor * multiplier),
    }
  })
}

// Calculate trend from data
const calculateTrend = (data: any[]) => {
  const lastMonth = data[data.length - 1].desktop
  const previousMonth = data[data.length - 2].desktop
  const percentChange = ((lastMonth - previousMonth) / previousMonth) * 100
  
  return {
    direction: percentChange > 1 ? "up" : percentChange < -1 ? "down" : "unchanged",
    value: Math.abs(Math.round(percentChange * 10) / 10),
    period: "month"
  }
}

// Component for displaying trend badge
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

interface RadarChartDemoProps {
  data: Array<{ month: string; desktop: number; mobile?: number; tablet?: number }>
  title?: string
  description?: string
  trend?: {
    direction: "up" | "down" | "unchanged"
    value: number
    period: string
  }
  variant?: "default" | "filled" | "multi" | "withAxis" | "custom"
  showLegend?: boolean
}

const RadarChartDemo = ({
  data,
  title = "Radar Chart",
  description = "Monthly Device Usage",
  trend,
  variant = "default",
  showLegend = false,
}: RadarChartDemoProps) => {
  const isMulti = variant === "multi"
  const showAxis = variant === "withAxis"
  const isFilled = variant === "filled" || variant === "multi"

  return (
    <Card className="flex flex-col w-[600px]">
      <CardHeader className="items-center pb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {showLegend && (
                <Legend
                  layout="horizontal"
                  align="center"
                  verticalAlign="bottom"
                  formatter={(value) => (
                    <span className="text-gray-700">{value}</span>
                  )}
                />
              )}
              <PolarGrid className={isFilled ? "fill-sky-500/20" : undefined} />
              <PolarAngleAxis 
                dataKey="month" 
                tick={{ fill: "#374151", fontSize: 12 }}
              />
              {showAxis && (
                <PolarRadiusAxis 
                  angle={30}
                  domain={[0, 'auto']}
                  tick={{ fill: "#374151", fontSize: 12 }}
                />
              )}
              <Radar
                name="Desktop"
                dataKey="desktop"
                stroke={chartConfig.desktop.color}
                fill={chartConfig.desktop.color}
                fillOpacity={isFilled ? 0.5 : 0}
              />
              {isMulti && (
                <>
                  <Radar
                    name="Mobile"
                    dataKey="mobile"
                    stroke={chartConfig.mobile.color}
                    fill={chartConfig.mobile.color}
                    fillOpacity={0.5}
                  />
                  <Radar
                    name="Tablet"
                    dataKey="tablet"
                    stroke={chartConfig.tablet.color}
                    fill={chartConfig.tablet.color}
                    fillOpacity={0.5}
                  />
                </>
              )}
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          {trend && getTrendBadge(trend)}
        </div>
        <div className="leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}

const meta: Meta<typeof RadarChartDemo> = {
  title: "Charts/RadarChart",
  component: RadarChartDemo,
  parameters: {
    layout: "centered",
    canvas: {
      width: 800,
      height: 600,
    },
  },
}

export default meta
type Story = StoryObj<typeof RadarChartDemo>

export const Default: Story = {
  render: () => {
    const [data] = useState(() => generateRadarData())
    const trend = calculateTrend(data)
    return <RadarChartDemo data={data} trend={trend} />
  },
}

export const Filled: Story = {
  render: () => {
    const [data] = useState(() => generateRadarData())
    const trend = calculateTrend(data)
    return <RadarChartDemo data={data} trend={trend} variant="filled" />
  },
}

export const WithAxis: Story = {
  render: () => {
    const [data] = useState(() => generateRadarData())
    const trend = calculateTrend(data)
    return <RadarChartDemo data={data} trend={trend} variant="withAxis" />
  },
}

export const MultiDevice: Story = {
  render: () => {
    const [data] = useState(() => generateRadarData())
    const trend = calculateTrend(data)
    return (
      <RadarChartDemo 
        data={data} 
        trend={trend} 
        variant="multi" 
        showLegend={true}
        title="Multi-Device Usage"
        description="Usage patterns across different devices"
      />
    )
  },
}

export const FilledWithLegend: Story = {
  render: () => {
    const [data] = useState(() => generateRadarData())
    const trend = calculateTrend(data)
    return <RadarChartDemo data={data} trend={trend} variant="filled" showLegend={true} />
  },
}
