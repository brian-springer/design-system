import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Bar, BarChart, Cell, ReferenceLine, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

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
    titleSize: "text-[10px]",
    valueSize: "text-base",
    labelGap: 12,
    badgeTop: "top-1",
    badgeRight: "right-1",
    barSize: 3,
  },
  md: {
    titleSize: "text-xs",
    valueSize: "text-lg",
    labelGap: 14,
    badgeTop: "top-2",
    badgeRight: "right-2",
    barSize: 4,
  },
  lg: {
    titleSize: "text-sm",
    valueSize: "text-2xl",
    labelGap: 16,
    badgeTop: "top-3",
    badgeRight: "right-3",
    barSize: 6,
  },
}

export function ColumnSparkline({
  title,
  value,
  data,
  trend,
  valuePrefix = "",
  valueSuffix = "",
  size = "md",
  positiveColor = "hsl(var(--chart-1))",
  negativeColor = "hsl(var(--chart-2))",
}: ColumnSparklineProps) {
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
    <Card className="relative w-full">
      <TrendBadge />
      <CardContent className={cn("p-4", size === 'sm' && "p-3")}>
        <div className="space-y-1">
          <div className={cn("font-bold", config.valueSize)}>
            {valuePrefix}{value.toLocaleString()}{valueSuffix}
          </div>
          <div className={cn("text-muted-foreground", config.titleSize)}>
            {title}
          </div>
        </div>
        <div className="h-[60px] mt-2">
          <ChartContainer config={{}}>
            <ResponsiveContainer width="100%" height="100%">
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
