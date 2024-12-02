import { useMemo } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  RectangleProps,
  Scatter,
  Legend,
  Tooltip
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

// Chart configuration
const chartConfig = {
  distribution: {
    label: "Distribution Range",
    color: "#0ea5e9", // sky-500
  },
  outlier: {
    label: "Outliers",
    color: "#ef4444", // red-500
  },
  average: {
    label: "Mean Value",
    color: "#8b5cf6", // violet-500
  }
} satisfies ChartConfig

// Style configuration
const chartStyles = {
  box: {
    fill: "#bae6fd",     // sky-200
    stroke: "#0ea5e9",   // sky-500
    hover: "#7dd3fc",    // sky-300
  },
  whisker: {
    stroke: "#0369a1",   // sky-700
    strokeWidth: 2,
  },
  median: {
    stroke: "#0c4a6e",   // sky-900
    strokeWidth: 3,
  },
  average: {
    fill: "#8b5cf6",     // violet-500
    stroke: "#ffffff",
    size: 8,
  },
  outlier: {
    fill: "#ef4444",     // red-500
    stroke: "#ffffff",
    size: 6,
  }
}

// Types
interface BoxPlot {
  min: number
  lowerQuartile: number
  median: number
  upperQuartile: number
  max: number
  average?: number
  outliers?: number[]
  label?: string
}

interface BoxPlotData {
  min: number
  bottomWhisker: number
  bottomBox: number
  topBox: number
  topWhisker: number
  average?: number
  outliers?: number[]
  size: number
  label?: string
}

// Custom shape components
const HorizonBar = (props: RectangleProps) => {
  const { x, y, width, height } = props

  if (x == null || y == null || width == null || height == null) {
    return null
  }

  return (
    <line 
      x1={x} 
      y1={y} 
      x2={x + width} 
      y2={y} 
      stroke={chartStyles.median.stroke}
      strokeWidth={chartStyles.median.strokeWidth} 
    />
  )
}

const DotBar = (props: RectangleProps) => {
  const { x, y, width, height } = props

  if (x == null || y == null || width == null || height == null) {
    return null
  }

  return (
    <line
      x1={x + width / 2}
      y1={y + height}
      x2={x + width / 2}
      y2={y}
      stroke={chartStyles.whisker.stroke}
      strokeWidth={chartStyles.whisker.strokeWidth}
      strokeDasharray="5"
    />
  )
}

// Data transformation hook
const useBoxPlot = (boxPlots: BoxPlot[]): BoxPlotData[] => {
  return useMemo(
    () =>
      boxPlots.map((v) => ({
        min: v.min,
        bottomWhisker: v.lowerQuartile - v.min,
        bottomBox: v.median - v.lowerQuartile,
        topBox: v.upperQuartile - v.median,
        topWhisker: v.max - v.upperQuartile,
        average: v.average,
        outliers: v.outliers,
        size: 250,
        label: v.label
      })),
    [boxPlots]
  )
}

// Generate sample data
const generateBoxPlotData = (variant: 'performance' | 'distribution' | 'outliers' = 'performance') => {
  const generateNoise = (base: number, variance: number) => 
    base + (Math.random() - 0.5) * variance

  const generateOutliers = (base: number, count: number = 3) => {
    return Array.from({ length: count }, () => {
      const direction = Math.random() > 0.5 ? 1 : -1
      const magnitude = 2 + Math.random() * 2 // 2-4x the normal variance
      return base + direction * generateNoise(base * 0.5, base * 0.2) * magnitude
    })
  }

  if (variant === 'performance') {
    return [
      {
        label: "Team A",
        min: 55,
        lowerQuartile: 72,
        median: 85,
        upperQuartile: 93,
        max: 98,
        average: 83,
        outliers: generateOutliers(85, 2)
      },
      {
        label: "Team B",
        min: 62,
        lowerQuartile: 76,
        median: 88,
        upperQuartile: 95,
        max: 99,
        average: 86,
        outliers: generateOutliers(88, 3)
      },
      {
        label: "Team C",
        min: 45,
        lowerQuartile: 68,
        median: 79,
        upperQuartile: 89,
        max: 96,
        average: 77,
        outliers: generateOutliers(79, 4)
      }
    ]
  }

  if (variant === 'distribution') {
    return Array.from({ length: 5 }, (_, i) => {
      const base = 500 + i * 150
      const variance = base * 0.3 // 30% variance
      return {
        label: `Region ${i + 1}`,
        min: base - generateNoise(variance, variance * 0.5),
        lowerQuartile: base - generateNoise(variance * 0.5, variance * 0.25),
        median: base + generateNoise(0, variance * 0.25),
        upperQuartile: base + generateNoise(variance * 0.5, variance * 0.25),
        max: base + generateNoise(variance, variance * 0.5),
        average: base + generateNoise(0, variance * 0.3),
        outliers: generateOutliers(base, Math.floor(Math.random() * 3) + 2)
      }
    })
  }

  // Outliers variant with high variance
  return Array.from({ length: 4 }, (_, i) => {
    const base = 1000 + i * 300
    const variance = base * 0.4 // 40% variance
    return {
      label: `Product ${i + 1}`,
      min: base - generateNoise(variance, variance * 0.6),
      lowerQuartile: base - generateNoise(variance * 0.5, variance * 0.3),
      median: base + generateNoise(0, variance * 0.3),
      upperQuartile: base + generateNoise(variance * 0.5, variance * 0.3),
      max: base + generateNoise(variance, variance * 0.6),
      average: base + generateNoise(0, variance * 0.4),
      outliers: generateOutliers(base, Math.floor(Math.random() * 4) + 3) // 3-6 outliers
    }
  })
}

interface BoxPlotDemoProps {
  data: BoxPlot[]
  title?: string
  description?: string
  variant?: "performance" | "distribution" | "outliers"
}

const BoxPlotDemo = ({
  data,
  title = "Box Plot Analysis",
  description = "Statistical Distribution Analysis",
  variant = "performance"
}: BoxPlotDemoProps) => {
  const transformedData = useBoxPlot(data)

  // Custom tooltip
  const renderTooltip = ({ payload, label, active }) => {
    if (!active || !payload) return null

    const boxPlotData = data.find(d => d.label === label)
    if (!boxPlotData) return null

    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          <div className="font-medium">{label}</div>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Maximum:</span>
            <span className="font-medium">{boxPlotData.max}</span>
            <span className="text-muted-foreground">Upper Quartile:</span>
            <span className="font-medium">{boxPlotData.upperQuartile}</span>
            <span className="text-muted-foreground">Median:</span>
            <span className="font-medium">{boxPlotData.median}</span>
            <span className="text-muted-foreground">Lower Quartile:</span>
            <span className="font-medium">{boxPlotData.lowerQuartile}</span>
            <span className="text-muted-foreground">Minimum:</span>
            <span className="font-medium">{boxPlotData.min}</span>
            {boxPlotData.average !== undefined && (
              <>
                <span className="text-muted-foreground">Average:</span>
                <span className="font-medium text-rose-500">{boxPlotData.average}</span>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[400px]" config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={transformedData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="label"
                tick={{ fill: "#374151" }}
                tickLine={{ stroke: "#374151" }}
              />
              <YAxis
                tick={{ fill: "#374151" }}
                tickLine={{ stroke: "#374151" }}
              />
              <Tooltip content={renderTooltip} />
              
              {/* Box Plot Elements */}
              <Bar stackId="a" dataKey="min" fill="none" legendType="none" />
              <Bar stackId="a" dataKey="bar" shape={<HorizonBar />} legendType="none" />
              <Bar stackId="a" dataKey="bottomWhisker" shape={<DotBar />} legendType="none" />
              <Bar 
                stackId="a" 
                dataKey="bottomBox" 
                fill={chartStyles.box.fill}
                stroke={chartStyles.box.stroke}
                name={chartConfig.distribution.label}
              />
              <Bar stackId="a" dataKey="bar" shape={<HorizonBar />} legendType="none" />
              <Bar 
                stackId="a" 
                dataKey="topBox" 
                fill={chartStyles.box.fill}
                stroke={chartStyles.box.stroke}
                legendType="none"
              />
              <Bar stackId="a" dataKey="topWhisker" shape={<DotBar />} legendType="none" />
              <Bar stackId="a" dataKey="bar" shape={<HorizonBar />} legendType="none" />
              
              {/* Average Point */}
              <ZAxis type="number" dataKey="size" range={[0, 250]} />
              <Scatter 
                dataKey="average" 
                fill={chartStyles.average.fill}
                stroke={chartStyles.average.stroke}
                name={chartConfig.average.label}
              />
              
              {/* Outliers */}
              {variant === 'outliers' && (
                <Scatter
                  dataKey="outliers"
                  fill={chartStyles.outlier.fill}
                  stroke={chartStyles.outlier.stroke}
                  name={chartConfig.outlier.label}
                />
              )}
              <Legend 
                verticalAlign="top" 
                height={36}
                iconSize={10}
                wrapperStyle={{
                  paddingBottom: "20px",
                  opacity: 0.8
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {variant === 'performance' ? 'Team performance distribution analysis' :
         variant === 'distribution' ? 'Regional sales distribution' :
         'Product price distribution with outliers'}
      </CardFooter>
    </Card>
  )
}

const meta: Meta<typeof BoxPlotDemo> = {
  title: "Charts/BoxPlot",
  component: BoxPlotDemo,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof BoxPlotDemo>

export const TeamPerformance: Story = {
  render: () => {
    const data = generateBoxPlotData('performance')
    return (
      <BoxPlotDemo 
        data={data}
        variant="performance"
        title="Team Performance Distribution"
        description="Statistical analysis of team performance scores"
      />
    )
  },
}

export const RegionalDistribution: Story = {
  render: () => {
    const data = generateBoxPlotData('distribution')
    return (
      <BoxPlotDemo 
        data={data}
        variant="distribution"
        title="Regional Sales Distribution"
        description="Analysis of sales distribution across regions"
      />
    )
  },
}

export const PriceOutliers: Story = {
  render: () => {
    const data = generateBoxPlotData('outliers')
    return (
      <BoxPlotDemo 
        data={data}
        variant="outliers"
        title="Product Price Analysis"
        description="Price distribution with outlier detection"
      />
    )
  },
}
