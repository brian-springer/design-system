import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

interface CategoryBarProps {
  title: string
  value: number
  data: Array<{
    name: string
    value: number
    fill: string
    trend?: {
      value: number
      direction: "up" | "down"
    }
  }>
  trend?: {
    value: number
    direction: "up" | "down"
  }
  valuePrefix?: string
  valueSuffix?: string
  size?: "sm" | "md" | "lg"
}

const sizeConfig = {
  sm: {
    width: 240,
    height: 60,
    titleSize: "text-[10px]",
    valueSize: "text-base",
    labelGap: 12,
    badgeTop: "top-1",
    badgeRight: "right-1",
    barHeight: 12,
  },
  md: {
    width: 320,
    height: 90,
    titleSize: "text-xs",
    valueSize: "text-lg",
    labelGap: 14,
    badgeTop: "top-2",
    badgeRight: "right-2",
    barHeight: 16,
  },
  lg: {
    width: 400,
    height: 125,
    titleSize: "text-sm",
    valueSize: "text-2xl",
    labelGap: 16,
    badgeTop: "top-3",
    badgeRight: "right-3",
    barHeight: 20,
  },
}

const CategoryBar = ({
  title,
  value,
  data,
  trend: defaultTrend,
  valuePrefix = "",
  valueSuffix = "",
  size = "md",
}: CategoryBarProps) => {
  const config = sizeConfig[size]
  const [activeTrend, setActiveTrend] = React.useState(defaultTrend)
  const [activeSegment, setActiveSegment] = React.useState<string | null>(null)

  const total = data.reduce((sum, item) => sum + item.value, 0)
  const segments = data.reduce((acc: any[], item, index) => {
    const prevWidth = index === 0 ? 0 : acc[index - 1].endX
    const width = (item.value / total) * 100
    return [...acc, {
      ...item,
      startX: prevWidth,
      endX: prevWidth + width,
      width,
      percentage: ((item.value / total) * 100).toFixed(1)
    }]
  }, [])

  const activeSegmentData = activeSegment ? segments.find(s => s.name === activeSegment) : null

  return (
    <Card className="relative" style={{ width: config.width }}>
      <TrendBadge trend={activeSegmentData?.trend || defaultTrend} />
      <CardContent className={`p-${size === 'sm' ? '3' : '4'} space-y-${size === 'lg' ? '4' : '3'}`}>
        <div className="space-y-1">
          <div className={`${config.valueSize} font-bold`}>
            {valuePrefix}{value.toLocaleString()}{valueSuffix}
          </div>
          <div className={`${config.titleSize} text-muted-foreground`}>
            {title}
          </div>
        </div>
        <div className="relative" style={{ height: config.barHeight }}>
          {/* Tooltip Container - pointer-events-none to prevent hover interference */}
          <div className="pointer-events-none absolute inset-0 w-full">
            {activeSegmentData && (
              <div 
                className="absolute z-50 rounded-lg bg-background/95 p-2 text-[10px] shadow-md backdrop-blur-sm transition-all duration-100"
                style={{
                  left: `${activeSegmentData.startX + (activeSegmentData.width / 2)}%`,
                  transform: 'translate(-50%, -120%)',
                }}
              >
                <div className="font-medium">{activeSegmentData.name}</div>
                <div className="flex items-center gap-2">
                  <span>{valuePrefix}{activeSegmentData.value.toLocaleString()}{valueSuffix}</span>
                  <span className="text-muted-foreground">({activeSegmentData.percentage}%)</span>
                </div>
              </div>
            )}
          </div>

          {/* Segments Container */}
          <div 
            className="absolute h-full w-full overflow-hidden rounded-full bg-muted"
          >
            {segments.map((segment) => (
              <div
                key={segment.name}
                className="absolute h-full transition-opacity duration-200"
                style={{
                  left: `${segment.startX}%`,
                  width: `${segment.width}%`,
                  backgroundColor: segment.fill,
                  opacity: activeSegment === segment.name ? 1 : 0.7,
                }}
                onMouseEnter={() => setActiveSegment(segment.name)}
                onMouseLeave={() => setActiveSegment(null)}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const TrendBadge = ({ trend }: { trend?: { value: number; direction: "up" | "down" } }) => {
  if (!trend) return null
  const bgColor = trend.direction === "up" ? "bg-emerald-500/10" : "bg-rose-500/10"
  const textColor = trend.direction === "up" ? "text-emerald-500" : "text-rose-500"
  const Icon = trend.direction === "up" ? TrendingUp : TrendingDown

  return (
    <div className={`absolute right-2 top-2 flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${bgColor} ${textColor}`}>
      <Icon className="h-3 w-3" />
      {trend.value}%
    </div>
  )
}

const meta = {
  title: "Number Widgets/Category Bar",
  component: CategoryBar,
  parameters: {
    layout: "centered",
    canvas: {
      width: "480px",
    },
  },
} satisfies Meta<typeof CategoryBar>

export default meta
type Story = StoryObj<typeof meta>

export const SmallUsage: Story = {
  args: {
    title: "Department Budget",
    value: 1250000,
    valuePrefix: "$",
    data: [
      {
        name: "Engineering",
        value: 450000,
        fill: "hsl(var(--chart-1))",
        trend: {
          value: 15.2,
          direction: "up"
        }
      },
      {
        name: "Marketing",
        value: 250000,
        fill: "hsl(var(--chart-2))",
        trend: {
          value: 8.7,
          direction: "up"
        }
      },
      {
        name: "Sales",
        value: 200000,
        fill: "hsl(var(--chart-3))",
        trend: {
          value: 4.2,
          direction: "down"
        }
      },
      {
        name: "Operations",
        value: 175000,
        fill: "hsl(var(--chart-4))",
        trend: {
          value: 6.5,
          direction: "up"
        }
      },
      {
        name: "Support",
        value: 125000,
        fill: "hsl(var(--chart-5))",
        trend: {
          value: 3.8,
          direction: "up"
        }
      },
      {
        name: "Research",
        value: 50000,
        fill: "hsl(var(--chart-6))",
        trend: {
          value: 2.1,
          direction: "down"
        }
      },
    ],
    trend: {
      value: 8.5,
      direction: "up"
    },
    size: "sm",
  },
}

export const MediumUsage: Story = {
  args: {
    title: "Department Budget",
    value: 1250000,
    valuePrefix: "$",
    data: [
      {
        name: "Engineering",
        value: 450000,
        fill: "hsl(var(--chart-1))",
        trend: {
          value: 15.2,
          direction: "up"
        }
      },
      {
        name: "Marketing",
        value: 250000,
        fill: "hsl(var(--chart-2))",
        trend: {
          value: 8.7,
          direction: "up"
        }
      },
      {
        name: "Sales",
        value: 200000,
        fill: "hsl(var(--chart-3))",
        trend: {
          value: 4.2,
          direction: "down"
        }
      },
      {
        name: "Operations",
        value: 175000,
        fill: "hsl(var(--chart-4))",
        trend: {
          value: 6.5,
          direction: "up"
        }
      },
      {
        name: "Support",
        value: 125000,
        fill: "hsl(var(--chart-5))",
        trend: {
          value: 3.8,
          direction: "up"
        }
      },
      {
        name: "Research",
        value: 50000,
        fill: "hsl(var(--chart-6))",
        trend: {
          value: 2.1,
          direction: "down"
        }
      },
    ],
    trend: {
      value: 12.5,
      direction: "up"
    },
    size: "md",
  },
}

export const LargeUsage: Story = {
  args: {
    title: "Department Budget",
    value: 2500000,
    valuePrefix: "$",
    data: [
      {
        name: "Engineering",
        value: 900000,
        fill: "hsl(var(--chart-1))",
        trend: {
          value: 15.2,
          direction: "up"
        }
      },
      {
        name: "Marketing",
        value: 500000,
        fill: "hsl(var(--chart-2))",
        trend: {
          value: 8.7,
          direction: "up"
        }
      },
      {
        name: "Sales",
        value: 400000,
        fill: "hsl(var(--chart-3))",
        trend: {
          value: 4.2,
          direction: "down"
        }
      },
      {
        name: "Operations",
        value: 350000,
        fill: "hsl(var(--chart-4))",
        trend: {
          value: 6.5,
          direction: "up"
        }
      },
      {
        name: "Support",
        value: 250000,
        fill: "hsl(var(--chart-5))",
        trend: {
          value: 3.8,
          direction: "up"
        }
      },
      {
        name: "Research",
        value: 100000,
        fill: "hsl(var(--chart-6))",
        trend: {
          value: 2.1,
          direction: "down"
        }
      },
    ],
    trend: {
      value: 8.3,
      direction: "up"
    },
    size: "lg",
  },
}
