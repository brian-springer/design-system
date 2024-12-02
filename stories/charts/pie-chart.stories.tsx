import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Sector } from "recharts"

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

// Chart configuration
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#0369a1", // sky-700
  },
  safari: {
    label: "Safari",
    color: "#0284c7", // sky-600
  },
  firefox: {
    label: "Firefox",
    color: "#0ea5e9", // sky-500
  },
  edge: {
    label: "Edge",
    color: "#38bdf8", // sky-400
  },
  other: {
    label: "Other",
    color: "#7dd3fc", // sky-300
  },
} satisfies ChartConfig

// Generate random data with trends
const generatePieData = (trend: 'up' | 'down' | 'flat' = 'flat') => {
  const baseData = [
    { browser: "chrome", visitors: 275, fill: chartConfig.chrome.color },
    { browser: "safari", visitors: 200, fill: chartConfig.safari.color },
    { browser: "firefox", visitors: 187, fill: chartConfig.firefox.color },
    { browser: "edge", visitors: 173, fill: chartConfig.edge.color },
    { browser: "other", visitors: 90, fill: chartConfig.other.color },
  ]

  const multiplier = trend === 'up' ? 1.2 : trend === 'down' ? 0.8 : 1

  return baseData.map(item => ({
    ...item,
    visitors: Math.round(item.visitors * multiplier),
  }))
}

// Calculate trend from data
const calculateTrend = (data: any[]) => {
  const totalVisitors = data.reduce((sum, item) => sum + item.visitors, 0)
  const baseTotal = 925 // Sum of original visitors

  const percentChange = ((totalVisitors - baseTotal) / baseTotal) * 100
  
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

interface PieChartDemoProps {
  data: Array<{ browser: string; visitors: number; fill: string }>
  title?: string
  description?: string
  trend?: {
    direction: "up" | "down" | "unchanged"
    value: number
    period: string
  }
  variant?: "default" | "donut" | "separated" | "labeled" | "interactive" | "donutActive" | "donutInteractive" | "donutLabeled"
  showLegend?: boolean
}

const PieChartDemo = ({
  data,
  title = "Browser Usage",
  description = "January - June 2024",
  trend,
  variant = "default",
  showLegend = false,
}: PieChartDemoProps) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const onPieEnter = (_: any, index: number) => {
    if (variant === "interactive" || variant === "donutInteractive") {
      setActiveIndex(index)
    }
  }

  const renderLabel = (props: any) => {
    const RADIAN = Math.PI / 180
    const { cx, cy, midAngle, outerRadius, percent, name } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const x = cx + (outerRadius + 30) * cos
    const y = cy + (outerRadius + 30) * sin
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill="#374151" // gray-700
        className="text-xs font-medium"
      >
        {`${name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    )
  }

  const getInnerRadius = () => {
    switch (variant) {
      case "donut":
      case "donutActive":
      case "donutInteractive":
      case "donutLabeled":
        return "60%"
      default:
        return 0
    }
  }

  const getPaddingAngle = () => {
    switch (variant) {
      case "separated":
        return 0.25 
      default:
        return 0
    }
  }

  const getStroke = () => {
    switch (variant) {
      case "separated":
        return "white"
      default:
        return "none"
    }
  }

  const isDonutVariant = variant.startsWith("donut")
  const isInteractive = variant === "interactive" || variant === "donutInteractive"
  const showLabels = variant === "labeled" || variant === "donutLabeled"

  return (
    <Card className="flex flex-col w-[600px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
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
              <Pie 
                data={data} 
                dataKey="visitors" 
                nameKey="browser"
                cx="50%"
                cy="50%"
                label={showLabels ? renderLabel : undefined}
                labelLine={showLabels}
                innerRadius={getInnerRadius()}
                outerRadius="80%"
                paddingAngle={getPaddingAngle()}
                startAngle={90}
                endAngle={-270}
                activeIndex={activeIndex}
                activeShape={isInteractive ? renderActiveShape : undefined}
                onMouseEnter={onPieEnter}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.fill} 
                    stroke={getStroke()}
                    strokeWidth={1}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-2 text-sm">
        {trend && getTrendBadge(trend)}
      </CardFooter>
    </Card>
  )
}

// Active shape renderer for interactive variant
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props

  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#374151" className="text-sm font-medium">
        {payload.browser}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#374151" className="text-xs">
        {`${value} (${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  )
}

const meta: Meta<typeof PieChartDemo> = {
  title: "Charts/PieChart",
  component: PieChartDemo,
  parameters: {
    layout: "centered",
    canvas: {
      width: 800,
      height: 600,
    },
  },
}

export default meta
type Story = StoryObj<typeof PieChartDemo>

export const Default: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} />
  },
}

export const WithLegend: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} showLegend={true} />
  },
}

export const WithLabels: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="labeled" />
  },
}

export const Separated: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="separated" />
  },
}

export const Interactive: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="interactive" />
  },
}
export const Donut: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="donut" />
  },
}

export const DonutWithLegend: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="donut" showLegend={true} />
  },
}

export const DonutWithLabels: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="donutLabeled" />
  },
}

export const DonutInteractive: Story = {
  render: () => {
    const [data] = useState(() => generatePieData())
    const trend = calculateTrend(data)
    return <PieChartDemo data={data} trend={trend} variant="donutInteractive" />
  },
}
