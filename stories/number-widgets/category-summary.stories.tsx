import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"

type TrendDirection = "up" | "down"

interface CategorySummaryProps {
  categories: {
    name: string
    users: number
    revenue: number
    trend: {
      value: number
      direction: TrendDirection
    }
  }[]
  size?: "sm" | "md" | "lg"
}

const sizeConfig = {
  sm: {
    width: 480,
    valueSize: "text-2xl",
    nameSize: "text-[10px]",
    revenueSize: "text-[10px]",
    padding: "p-3",
    badgeSize: "h-2.5 w-2.5",
  },
  md: {
    width: 580,
    valueSize: "text-3xl",
    nameSize: "text-xs",
    revenueSize: "text-xs",
    padding: "p-4",
    badgeSize: "h-3 w-3",
  },
  lg: {
    width: 680,
    valueSize: "text-4xl",
    nameSize: "text-sm",
    revenueSize: "text-sm",
    padding: "p-5",
    badgeSize: "h-3.5 w-3.5",
  },
}

const formatNumber = (value: number) => {
  if (value >= 1000000) {
    const millions = value / 1000000
    return (millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)) + "M"
  }
  if (value >= 1000) {
    const thousands = value / 1000
    return (thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)) + "k"
  }
  return value.toString()
}

const TrendBadge = ({ trend, size, compact = false }: { 
  trend: { value: number; direction: TrendDirection }
  size: "sm" | "md" | "lg"
  compact?: boolean
}) => {
  const config = sizeConfig[size]
  const Icon = trend.direction === "up" ? ArrowUpIcon : ArrowDownIcon
  const bgColor = trend.direction === "up" ? "bg-emerald-500/10" : "bg-rose-500/10"
  const textColor = trend.direction === "up" ? "text-emerald-500" : "text-rose-500"
  
  if (compact) {
    return <Icon className={cn(config.badgeSize, textColor)} />
  }

  return (
    <div className={cn("flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium", bgColor, textColor)}>
      <Icon className={config.badgeSize} />
      {trend.value}%
    </div>
  )
}

const CategorySummary = ({
  categories,
  size = "md",
}: CategorySummaryProps) => {
  const config = sizeConfig[size]

  return (
    <Card style={{ width: config.width }}>
      <CardContent className={config.padding}>
        <div className="flex items-center justify-between">
          {categories.map((category, index) => (
            <React.Fragment key={category.name}>
              <div className="flex flex-col items-center min-w-0">
                <TrendBadge trend={category.trend} size={size} />
                <div className={cn(config.valueSize, "font-bold tabular-nums mt-1")}>
                  {formatNumber(category.users)}
                </div>
                <div className={cn(config.nameSize, "font-medium text-foreground truncate max-w-[100px] mt-1")}>
                  {category.name}
                </div>
                <div className={cn(config.revenueSize, "text-muted-foreground flex items-center gap-0.5 mt-1")}>
                  <span>${formatNumber(category.revenue)}</span>
                  <TrendBadge trend={category.trend} size={size} compact />
                </div>
              </div>
              {index < categories.length - 1 && (
                <div className="self-stretch w-px bg-border" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const meta = {
  title: "Number Widgets/Category Summary",
  component: CategorySummary,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CategorySummary>

export default meta
type Story = StoryObj<typeof CategorySummary>

const funnelData: {
  name: string
  users: number
  revenue: number
  trend: {
    value: number
    direction: TrendDirection
  }
}[] = [
  {
    name: "Awareness",
    users: 10000,
    revenue: 50000,
    trend: {
      value: 12.5,
      direction: "up" as const
    }
  },
  {
    name: "Interest",
    users: 7500,
    revenue: 37500,
    trend: {
      value: 8.3,
      direction: "up" as const
    }
  },
  {
    name: "Consideration",
    users: 5000,
    revenue: 25000,
    trend: {
      value: -4.2,
      direction: "down" as const
    }
  },
  {
    name: "Intent",
    users: 2500,
    revenue: 12500,
    trend: {
      value: 15.7,
      direction: "up" as const
    }
  },
  {
    name: "Evaluation",
    users: 1000,
    revenue: 5000,
    trend: {
      value: -2.8,
      direction: "down" as const
    }
  }
]

export const SmallUsage: Story = {
  args: {
    size: "sm",
    categories: funnelData,
  },
}

export const MediumUsage: Story = {
  args: {
    size: "md",
    categories: funnelData,
  },
}

export const LargeUsage: Story = {
  args: {
    size: "lg",
    categories: funnelData,
  },
}
