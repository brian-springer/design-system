import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Bar, BarChart, Cell, ReferenceLine, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

interface ColumnSparklineProps {
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
  positiveColor?: string
  negativeColor?: string
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
    barSize: 3,
  },
  md: {
    width: 180,
    height: 90,
    titleSize: "text-xs",
    valueSize: "text-lg",
    labelGap: 14,
    badgeTop: "top-2",
    badgeRight: "right-2",
    barSize: 4,
  },
  lg: {
    width: 250,
    height: 125,
    titleSize: "text-sm",
    valueSize: "text-2xl",
    labelGap: 16,
    badgeTop: "top-3",
    badgeRight: "right-3",
    barSize: 6,
  },
}

const ColumnSparkline = ({
  title,
  value,
  data,
  trend,
  valuePrefix = "",
  valueSuffix = "",
  size = "md",
  positiveColor = "hsl(var(--chart-1))",
  negativeColor = "hsl(var(--chart-2))",
}: ColumnSparklineProps) => {
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
              <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <ReferenceLine y={0} stroke="hsl(var(--border))" strokeWidth={1} />
                <Bar dataKey="value" barSize={config.barSize} isAnimationActive={false}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={entry.value >= 0 ? positiveColor : negativeColor}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

const meta = {
  title: "Number Widgets/Column Sparkline",
  component: ColumnSparkline,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ColumnSparkline>

export default meta
type Story = StoryObj<typeof meta>

const generateColumnData = (points: number, base: number, variance: number) => {
  return Array.from({ length: points }, () => ({
    value: base + (Math.random() - 0.5) * variance * 2
  }))
}

export const SmallUsage: Story = {
  args: {
    title: "Daily Change",
    value: -2.8,
    valueSuffix: "%",
    data: generateColumnData(12, 0, 5),
    trend: {
      value: 2.8,
      direction: "down"
    },
    size: "sm",
    positiveColor: "hsl(var(--emerald-9))",
    negativeColor: "hsl(var(--rose-9))",
  },
}

export const MediumUsage: Story = {
  args: {
    title: "Trading P&L",
    value: 1250,
    valuePrefix: "$",
    data: generateColumnData(20, 0, 2000),
    trend: {
      value: 12.5,
      direction: "up"
    },
    size: "md",
    positiveColor: "hsl(var(--emerald-9))",
    negativeColor: "hsl(var(--rose-9))",
  },
}

export const LargeUsage: Story = {
  args: {
    title: "Monthly Net Flow",
    value: -25420,
    valuePrefix: "$",
    data: generateColumnData(30, 0, 50000),
    trend: {
      value: 8.3,
      direction: "down"
    },
    size: "lg",
    positiveColor: "hsl(var(--emerald-9))",
    negativeColor: "hsl(var(--rose-9))",
  },
}
