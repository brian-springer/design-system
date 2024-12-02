import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

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

const TrendBadge = ({ trend, size }: { trend: NonNullable<SparklineProps["trend"]>, size: SparklineProps["size"] }) => {
  const config = sizeConfig[size || "md"]
  const bgColor = trend.direction === "up" ? "bg-emerald-500/10" : "bg-rose-500/10"
  const textColor = trend.direction === "up" ? "text-emerald-500" : "text-rose-500"
  const Icon = trend.direction === "up" ? TrendingUp : TrendingDown
  
  return (
    <div 
      className={cn(
        "absolute flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium",
        bgColor,
        textColor,
        config.badgeTop,
        config.badgeRight
      )}
    >
      {trend.value}%
      {size !== 'sm' && <Icon className="h-3 w-3" />}
    </div>
  )
}

export function Sparkline({
  title,
  value,
  data,
  trend,
  valuePrefix = "",
  valueSuffix = "",
  size = "md",
  color = "hsl(var(--chart-1))",
}: SparklineProps) {
  const config = sizeConfig[size]

  return (
    <Card className="relative w-full">
      {trend && <TrendBadge trend={trend} size={size} />}
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
