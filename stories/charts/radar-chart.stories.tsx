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

// Types
type TrendDirection = "up" | "down" | "unchanged"
type TrendData = {
  direction: TrendDirection
  value: number
  period: string
}

// Function to calculate trend
const calculateTrend = (data: any[]): TrendData => {
  const lastMonth = data[data.length - 1].desktop
  const previousMonth = data[data.length - 2].desktop
  const percentChange = ((lastMonth - previousMonth) / previousMonth) * 100
  
  return {
    direction: percentChange > 1 ? "up" : percentChange < -1 ? "down" : "unchanged",
    value: Math.abs(Math.round(percentChange * 10) / 10),
    period: "month"
  }
}

// Helper function to get badge variant
const getBadgeVariant = (value: number): "default" | "destructive" | "outline" | "secondary" => {
  if (value > 75) return "default"
  if (value < 50) return "destructive"
  return "secondary"
}

// Component for displaying trend badge
const getTrendBadge = (trend: TrendData) => {
  const icon = {
    up: <TrendingUp className="h-3 w-3" />,
    down: <TrendingDown className="h-3 w-3" />,
    unchanged: <Minus className="h-3 w-3" />
  }[trend.direction]
  
  const variant = getBadgeVariant(trend.value)
  
  return (
    <Badge variant={variant} className="ml-2 px-1.5 py-0.5 font-medium">
      {icon}
      <span className="ml-1">{trend.value.toFixed(1)}%</span>
    </Badge>
  )
}

interface RadarChartDemoProps {
  data: Array<{ month: string; desktop: number; mobile?: number; tablet?: number }>
  title?: string
  description?: string
  trend?: TrendData
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
  args: {
    title: "Performance Metrics",
    description: "Key performance indicators across different areas",
    data: generateRadarData(),
    trend: {
      direction: "up" as const,
      value: 12.5,
      period: "vs last period"
    },
    variant: "default"
  }
}

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: "filled",
    trend: {
      direction: "down" as const,
      value: 8.3,
      period: "vs last period"
    }
  }
}

export const WithAxis: Story = {
  args: {
    ...Default.args,
    variant: "withAxis",
    trend: {
      direction: "up" as const,
      value: 12.5,
      period: "vs last period"
    }
  }
}

export const MultiDevice: Story = {
  args: {
    ...Default.args,
    variant: "multi",
    showLegend: true,
    trend: {
      direction: "down" as const,
      value: 8.3,
      period: "vs last period"
    }
  }
}

export const FilledWithLegend: Story = {
  args: {
    ...Default.args,
    variant: "filled",
    showLegend: true,
    trend: {
      direction: "up" as const,
      value: 12.5,
      period: "vs last period"
    }
  }
}
