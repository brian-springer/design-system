import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface KPISparkProps {
  actual: number
  projected: number
  goal: number
  historicalData?: Array<{ value: number }>
  variant?: "line" | "bar"
  size?: "sm" | "md" | "lg"
  title?: string
  unit?: string
}

const KPISpark = ({
  actual = 0,
  projected = 0,
  goal = 0,
  historicalData = [],
  variant = "line",
  size = "md",
  title,
  unit
}: KPISparkProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        {variant === "line" ? (
          <LineSparkline
            actual={actual}
            projected={projected}
            goal={goal}
            historicalData={historicalData}
            size={size}
            title={title}
            unit={unit}
          />
        ) : (
          <BarSparkline
            actual={actual}
            projected={projected}
            goal={goal}
            size={size}
            title={title}
            unit={unit}
          />
        )}
      </CardContent>
    </Card>
  )
}

const sizeConfig = {
  sm: {
    width: 300,
    height: 100,
    chartPadding: 32,
    barHeight: 8,
    tickHeight: 16,
    titleSize: "text-sm",
    labelSize: "text-xs",
    chartHeight: 40
  },
  md: {
    width: 400,
    height: 120,
    chartPadding: 32,
    barHeight: 12,
    tickHeight: 24,
    titleSize: "text-base",
    labelSize: "text-sm",
    chartHeight: 50
  },
  lg: {
    width: 500,
    height: 140,
    chartPadding: 32,
    barHeight: 16,
    tickHeight: 32,
    titleSize: "text-lg",
    labelSize: "text-base",
    chartHeight: 60
  }
}

const ValueDisplay = ({ 
  label, 
  value, 
  color, 
  projectedStatus,
  size = "md"
}: { 
  label: string
  value: number
  color: string
  projectedStatus?: "over" | "under"
  size?: "sm" | "md" | "lg"
}) => {
  const config = sizeConfig[size]
  
  return (
    <div className="flex-1">
      <div className={cn("font-medium", color, config.labelSize)}>
        {label}
        {projectedStatus && (
          <span className="ml-1">
            ({projectedStatus === "over" ? "over" : "under"})
          </span>
        )}
      </div>
      <div className={cn("font-bold", config.titleSize)}>
        {value.toLocaleString()}
      </div>
    </div>
  )
}

const Separator = () => (
  <div className="h-12 w-px bg-border/30 mx-2" />
)

const LineSparkline = ({ 
  actual, 
  projected, 
  goal,
  historicalData = [],
  size = "md",
  title = "Revenue",
  unit = "USD"
}: Omit<KPISparkProps, "variant">) => {
  const config = sizeConfig[size]
  const height = config.chartHeight
  const width = config.width - 32
  const isProjectedOverGoal = projected > goal
  
  const allValues = [...(historicalData || []).map(d => d.value), actual, projected, goal].filter(Boolean)
  const maxValue = allValues.length ? Math.max(...allValues) * 1.1 : 100
  const minValue = allValues.length ? Math.min(...allValues) * 0.9 : 0
  
  const getY = (value: number) => {
    return height - ((value - minValue) / (maxValue - minValue)) * height
  }

  const actualY = getY(actual)
  const projectedY = getY(projected)
  const goalY = getY(goal)

  // Calculate points for the actual data (75% of width)
  const actualPoints = (historicalData || []).map((d, i) => {
    const x = (i / ((historicalData || []).length - 1)) * width
    const y = getY(d.value)
    return `${x} ${y}`
  }).slice(0, Math.floor((historicalData || []).length * 0.75))

  return (
    <div className="relative" style={{ height: "auto" }}>
      <div className={cn("font-medium mb-2 text-muted-foreground", config.titleSize)}>
        {title} ({unit})
      </div>
      <div className="flex items-center mb-4">
        <ValueDisplay 
          label="Actual" 
          value={actual} 
          color="text-blue-500"
          size={size}
        />
        <Separator />
        {isProjectedOverGoal ? (
          <>
            <ValueDisplay 
              label="Goal" 
              value={goal} 
              color="text-amber-600"
              size={size}
            />
            <Separator />
            <ValueDisplay 
              label="Projected" 
              value={projected} 
              color="text-emerald-500"
              projectedStatus="over"
              size={size}
            />
          </>
        ) : (
          <>
            <ValueDisplay 
              label="Projected" 
              value={projected} 
              color="text-red-500"
              projectedStatus="under"
              size={size}
            />
            <Separator />
            <ValueDisplay 
              label="Goal" 
              value={goal} 
              color="text-amber-600"
              size={size}
            />
          </>
        )}
      </div>
      <div className="relative" style={{ height }}>
        <svg width={width} height={height} className="overflow-visible">
          {/* Actual path */}
          <path
            d={`M ${actualPoints.join(" L ")}`}
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />

          {/* Goal line - now solid */}
          <line
            x1="0"
            y1={goalY}
            x2={width}
            y2={goalY}
            stroke="#d97706"
            strokeWidth="1"
          />
          
          {/* Projected line - remains dashed */}
          <line
            x1="0"
            y1={projectedY}
            x2={width}
            y2={projectedY}
            stroke={isProjectedOverGoal ? "#10b981" : "#ef4444"}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  )
}

const BarSparkline = ({ 
  actual, 
  projected, 
  goal,
  size = "md",
  title = "Revenue",
  unit = "USD"
}: Omit<KPISparkProps, "variant" | "historicalData">) => {
  const config = sizeConfig[size]
  const isProjectedOverGoal = projected > goal
  
  // Scale values when projected > goal
  const maxValue = isProjectedOverGoal ? projected : goal
  const scaledActual = (actual / maxValue) * 100
  const scaledProjected = (projected / maxValue) * 100
  const scaledGoal = (goal / maxValue) * 100
  
  // Use scaled values when over goal, regular percentages when under
  const percentage = isProjectedOverGoal ? scaledActual : (actual / goal) * 100
  const projectedPercentage = isProjectedOverGoal ? scaledProjected : (projected / goal) * 100
  const goalPercentage = isProjectedOverGoal ? scaledGoal : 100
  
  return (
    <div className="relative" style={{ height: "auto" }}>
      <div className={cn("font-medium mb-2 text-muted-foreground", config.titleSize)}>
        {title} ({unit})
      </div>
      <div className="flex items-center mb-4">
        <ValueDisplay 
          label="Actual" 
          value={actual} 
          color="text-blue-500"
          size={size}
        />
        <Separator />
        {isProjectedOverGoal ? (
          <>
            <ValueDisplay 
              label="Goal" 
              value={goal} 
              color="text-amber-600"
              size={size}
            />
            <Separator />
            <ValueDisplay 
              label="Projected" 
              value={projected} 
              color="text-emerald-500"
              projectedStatus="over"
              size={size}
            />
          </>
        ) : (
          <>
            <ValueDisplay 
              label="Projected" 
              value={projected} 
              color="text-red-500"
              projectedStatus="under"
              size={size}
            />
            <Separator />
            <ValueDisplay 
              label="Goal" 
              value={goal} 
              color="text-amber-600"
              size={size}
            />
          </>
        )}
      </div>
      <div className="relative">
        {/* Base bar background */}
        <div 
          className="w-full rounded-full bg-gray-100"
          style={{ height: config.barHeight }}
        >
          {/* Actual progress */}
          <div
            className="absolute h-full bg-blue-500 rounded-l-full"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
          
          {/* Area between actual and projected */}
          {isProjectedOverGoal ? (
            <>
              {/* When projected > goal */}
              <div
                className="absolute h-full bg-gray-200"
                style={{
                  left: `${percentage}%`,
                  width: `${goalPercentage - percentage}%`,
                  borderTopRightRadius: percentage >= goalPercentage ? '9999px' : '0',
                  borderBottomRightRadius: percentage >= goalPercentage ? '9999px' : '0'
                }}
              />
              <div
                className="absolute h-full rounded-r-full"
                style={{
                  left: `${goalPercentage}%`,
                  width: `${projectedPercentage - goalPercentage}%`,
                  background: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' stroke='%2310b981' stroke-width='4' opacity='0.2'/%3E%3C/svg%3E")`
                }}
              />
            </>
          ) : (
            <>
              {/* When projected < goal */}
              <div
                className="absolute h-full bg-gray-200"
                style={{
                  left: `${percentage}%`,
                  width: `${projectedPercentage - percentage}%`,
                  borderTopRightRadius: projectedPercentage >= 100 ? '9999px' : '0',
                  borderBottomRightRadius: projectedPercentage >= 100 ? '9999px' : '0'
                }}
              />
              <div
                className="absolute h-full rounded-r-full"
                style={{
                  left: `${projectedPercentage}%`,
                  width: `${100 - projectedPercentage}%`,
                  background: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' stroke='%23ef4444' stroke-width='4' opacity='0.2'/%3E%3C/svg%3E")`
                }}
              />
            </>
          )}
          
          {/* Tick marks */}
          {isProjectedOverGoal ? (
            <div
              className="absolute top-0 w-0.5 bg-amber-600"
              style={{
                height: config.tickHeight,
                left: `${goalPercentage}%`,
                transform: 'translateX(-50%)',
                marginTop: -((config.tickHeight - config.barHeight) / 2)
              }}
            />
          ) : (
            <div
              className="absolute top-0 w-0.5 bg-red-500"
              style={{
                height: config.tickHeight,
                left: `${projectedPercentage}%`,
                transform: 'translateX(-50%)',
                marginTop: -((config.tickHeight - config.barHeight) / 2)
              }}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <div className={cn(config.labelSize, "text-muted-foreground")}>
          {((actual / goal) * 100).toFixed(1)}% of goal
        </div>
      </div>
    </div>
  )
}

const generateHistoricalData = (actual: number, projected: number, goal: number) => {
  const totalPoints = 15
  const actualPoints = Math.floor(totalPoints * 0.75)
  
  // Calculate slope to reach projected value at 100% width
  const startValue = actual * 0.85 // Start at 85% of actual
  const projectedIntersection = projected // End at projected value
  
  const stepIncrease = (projectedIntersection - startValue) / (totalPoints - 1)
  
  // Generate actual data points with minimal variation
  const actualData = Array.from({ length: actualPoints }, (_, i) => {
    // Base value with continuous increase towards projected
    const baseValue = startValue + (stepIncrease * i)
    
    // Add very small random variation (±1%)
    const variation = baseValue * (Math.random() * 0.02 - 0.01)
    
    // Ensure we stay below goal and maintain minimum increase
    const value = Math.min(
      baseValue + variation,
      goal - 1
    )
    
    return { value }
  })

  // Sort to ensure continuous increase
  actualData.sort((a, b) => a.value - b.value)

  // Ensure the last actual point matches our current actual
  actualData[actualData.length - 1].value = actual

  return actualData
}

const meta = {
  title: "Number Widgets/KPI Spark",
  component: KPISpark,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof KPISpark>

export default meta
type Story = StoryObj<typeof KPISpark>

export const Default: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    historicalData: generateHistoricalData(750000, 1200000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "md"
  }
}

export const Small: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    historicalData: generateHistoricalData(750000, 1200000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "sm"
  }
}

export const Large: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    historicalData: generateHistoricalData(750000, 1200000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "lg"
  }
}

export const UnderGoal: Story = {
  args: {
    actual: 650000,
    projected: 900000,
    goal: 1000000,
    historicalData: generateHistoricalData(650000, 900000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "md"
  }
}

export const BarSmallUsage: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    variant: "bar",
    title: "Revenue",
    unit: "USD",
    size: "sm"
  }
}

export const BarMediumUsage: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    variant: "bar",
    title: "Revenue",
    unit: "USD",
    size: "md"
  }
}

export const BarLargeUsage: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    variant: "bar",
    title: "Revenue",
    unit: "USD",
    size: "lg"
  }
}

export const BarUnderGoal: Story = {
  args: {
    actual: 650000,
    projected: 900000,
    goal: 1000000,
    variant: "bar",
    title: "Revenue",
    unit: "USD",
    size: "md"
  }
}

export const LineSmallUsage: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    historicalData: generateHistoricalData(750000, 1200000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "sm"
  }
}

export const LineMediumUsage: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    historicalData: generateHistoricalData(750000, 1200000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "md"
  }
}

export const LineLargeUsage: Story = {
  args: {
    actual: 750000,
    projected: 1200000,
    goal: 1000000,
    historicalData: generateHistoricalData(750000, 1200000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "lg"
  }
}

export const LineUnderGoal: Story = {
  args: {
    actual: 650000,
    projected: 900000,
    goal: 1000000,
    historicalData: generateHistoricalData(650000, 900000, 1000000),
    variant: "line",
    title: "Revenue",
    unit: "USD",
    size: "md"
  }
}