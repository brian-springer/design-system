import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

interface SparklineProps {
  title: string
  value: number
  data: Array<{
    value: number
  }>
  trend?: {
    value: number
    direction: "up" | "down"
  }
  valuePrefix?: string
  valueSuffix?: string
  size?: "sm" | "md" | "lg"
  color?: string
}

const sizeConfig = {
  sm: {
    width: 120,
    height: 60,
    titleSize: "text-[10px]",
    valueSize: "text-base",
    labelGap: 12,
    badgeTop: "top-1",
    badgeRight: "right-1",
  },
  md: {
    width: 180,
    height: 90,
    titleSize: "text-xs",
    valueSize: "text-lg",
    labelGap: 14,
    badgeTop: "top-2",
    badgeRight: "right-2",
  },
  lg: {
    width: 250,
    height: 125,
    titleSize: "text-sm",
    valueSize: "text-2xl",
    labelGap: 16,
    badgeTop: "top-3",
    badgeRight: "right-3",
  },
}

const Sparkline = ({
  title,
  value,
  data,
  trend,
  valuePrefix = "",
  valueSuffix = "",
  size = "md",
  color = "hsl(var(--chart-1))",
}: SparklineProps) => {
  const config = sizeConfig[size]

  const TrendBadge = () => {
    if (!trend) return null
    const bgColor = trend.direction === "up" ? "bg-emerald-500/10" : "bg-rose-500/10"
    const textColor = trend.direction === "up" ? "text-emerald-500" : "text-rose-500"
    const Icon = trend.direction === "up" ? TrendingUp : TrendingDown
    
    return (
      <div 
        className={`absolute ${config.badgeTop} ${config.badgeRight} flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${bgColor} ${textColor}`}
      >
        {trend.value}%
        {size !== 'sm' && <Icon className="h-3 w-3" />}
      </div>
    )
  }

  return (
    <Card className="relative">
      <TrendBadge />
      <CardContent className={`p-${size === 'sm' ? '3' : '4'}`}>
        <div className="space-y-1">
          <div className={`${config.valueSize} font-bold`}>
            {valuePrefix}{value.toLocaleString()}{valueSuffix}
          </div>
          <div className={`${config.titleSize} text-muted-foreground`}>
            {title}
          </div>
        </div>
        <div style={{ width: config.width, height: config.height/2 }} className="mt-2">
          <ChartContainer config={{}}>
            <ResponsiveContainer>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="sparkline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  fill="url(#sparkline)"
                  strokeWidth={1.5}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

const meta = {
  title: "Number Widgets/Sparkline",
  component: Sparkline,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sparkline>

export default meta
type Story = StoryObj<typeof meta>

const generateSparklineData = (points: number, base: number, variance: number) => {
  return Array.from({ length: points }, () => ({
    value: base + (Math.random() - 0.5) * variance
  }))
}

export const SmallUsage: Story = {
  args: {
    title: "Active Sessions",
    value: 142,
    data: generateSparklineData(20, 150, 50),
    trend: {
      value: 8.2,
      direction: "up"
    },
    size: "sm",
    color: "hsl(var(--chart-1))",
  },
}

export const MediumUsage: Story = {
  args: {
    title: "Daily Revenue",
    value: 8420,
    valuePrefix: "$",
    data: generateSparklineData(30, 8000, 2000),
    trend: {
      value: 12.5,
      direction: "up"
    },
    size: "md",
    color: "hsl(var(--chart-2))",
  },
}

export const LargeUsage: Story = {
  args: {
    title: "Total Visitors",
    value: 1284503,
    data: generateSparklineData(40, 1200000, 300000),
    trend: {
      value: 3.8,
      direction: "down"
    },
    size: "lg",
    color: "hsl(var(--chart-3))",
  },
}
