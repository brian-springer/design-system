import type { Meta, StoryObj } from "@storybook/react"
import { TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Browser usage data
const browserData = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "opera", visitors: 120 },
  { browser: "brave", visitors: 95 },
  { browser: "other", visitors: 90 },
]

// Device type data with multiple metrics
const deviceData = [
  { device: "Desktop", windows: 320, mac: 250, linux: 80 },
  { device: "Mobile", ios: 280, android: 420, other: 30 },
  { device: "Tablet", ios: 170, android: 130, other: 20 },
  { device: "TV", smarttv: 90, streaming: 120, other: 15 },
  { device: "Console", xbox: 85, playstation: 95, nintendo: 45 },
]

// Regional data with stacked metrics
const regionData = [
  {
    region: "North America",
    direct: 450,
    organic: 320,
    referral: 180,
    social: 150,
  },
  {
    region: "Europe",
    direct: 380,
    organic: 290,
    referral: 160,
    social: 140,
  },
  {
    region: "Asia Pacific",
    direct: 420,
    organic: 380,
    referral: 220,
    social: 190,
  },
  {
    region: "Latin America",
    direct: 180,
    organic: 120,
    referral: 90,
    social: 85,
  },
  {
    region: "Middle East",
    direct: 150,
    organic: 95,
    referral: 65,
    social: 55,
  },
]

// Custom labeled data
const performanceData = [
  { metric: "Page Load Time", value: 2.5, unit: "seconds", target: 3 },
  { metric: "Time to Interactive", value: 3.2, unit: "seconds", target: 4 },
  { metric: "First Contentful Paint", value: 1.8, unit: "seconds", target: 2 },
  { metric: "Largest Contentful Paint", value: 2.9, unit: "seconds", target: 4 },
  { metric: "Cumulative Layout Shift", value: 0.12, unit: "score", target: 0.25 },
  { metric: "First Input Delay", value: 85, unit: "ms", target: 100 },
]

// Chart configs
const browserConfig = {
  visitors: {
    label: "Monthly Visitors (K)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const deviceConfig = {
  windows: {
    label: "Windows",
    color: "hsl(var(--chart-1))",
  },
  mac: {
    label: "macOS",
    color: "hsl(var(--chart-3))",
  },
  linux: {
    label: "Linux",
    color: "hsl(var(--chart-5))",
  },
  ios: {
    label: "iOS",
    color: "hsl(var(--chart-1))",
  },
  android: {
    label: "Android",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const regionConfig = {
  direct: {
    label: "Direct",
    color: "hsl(var(--chart-1))",
  },
  organic: {
    label: "Organic",
    color: "hsl(var(--chart-3))",
  },
  referral: {
    label: "Referral",
    color: "hsl(var(--chart-5))",
  },
  social: {
    label: "Social",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig

const performanceConfig = {
  value: {
    label: "Current",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

interface HorizontalBarChartProps {
  title: string
  description: string
  lastUpdated: {
    time: string
    variant?: "default" | "secondary" | "destructive" | "outline"
  }
  data: any[]
  config: ChartConfig
  stacked?: boolean
  showLabels?: boolean
  customLabel?: (value: number) => string
  yAxisWidth?: number
}

const HorizontalBarChart = ({
  title,
  description,
  lastUpdated,
  data,
  config,
  stacked = false,
  showLabels = false,
  customLabel,
  yAxisWidth = 100,
}: HorizontalBarChartProps) => {
  const dataKeys = Object.keys(config)

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <div style={{ width: '100%', height: Math.max(500, data.length * 60), minWidth: '800px' }}>
            <ResponsiveContainer>
              <BarChart
                data={data}
                layout="vertical"
                margin={{
                  left: yAxisWidth,
                  right: 16,
                  top: 16,
                  bottom: 16,
                }}
              >
                <CartesianGrid horizontal={false} className="stroke-slate-100/20" />
                <YAxis
                  dataKey={Object.keys(data[0])[0]}
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  width={yAxisWidth}
                  className="text-sm text-slate-900 dark:text-slate-100"
                />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  className="text-sm text-slate-900 dark:text-slate-100"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                {dataKeys.map((key, index) => {
                  const isTopBar = stacked && index === dataKeys.length - 1
                  const radius: [number, number, number, number] = isTopBar
                    ? [0, 4, 4, 0]
                    : [0, 0, 0, 0]

                  return (
                    <Bar
                      key={key}
                      dataKey={key}
                      fill={config[key].color}
                      radius={radius}
                      maxBarSize={24}
                      stackId={stacked ? "stack" : undefined}
                    >
                      {showLabels && (
                        <LabelList
                          dataKey={key}
                          position="right"
                          className="fill-slate-900 dark:fill-slate-100"
                          formatter={customLabel}
                        />
                      )}
                    </Bar>
                  )
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-slate-900 dark:text-slate-100">
          <Badge variant={lastUpdated.variant}>{lastUpdated.time}</Badge>
        </div>
        <div className="leading-none text-slate-500 dark:text-slate-400">
          {description}
        </div>
      </CardFooter>
    </Card>
  )
}

const meta: Meta<typeof HorizontalBarChart> = {
  title: "Charts/HorizontalBarChart",
  component: HorizontalBarChart,
  parameters: {
    layout: "padded",
    viewport: {
      defaultViewport: 'desktop',
    },
    chromatic: {
      viewports: [1200],
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HorizontalBarChart>

export const Single = {
  render: () => (
    <HorizontalBarChart
      title="Browser Usage"
      description="Monthly active users by browser"
      lastUpdated={{ time: "Just now", variant: "default" }}
      data={browserData}
      config={browserConfig}
      showLabels
      customLabel={(value) => `${value}k`}
      yAxisWidth={80}
    />
  ),
}

export const Multiple = {
  render: () => (
    <HorizontalBarChart
      title="Device Usage by Platform"
      description="Monthly active users by device and platform"
      lastUpdated={{ time: "5 minutes ago", variant: "secondary" }}
      data={deviceData}
      config={deviceConfig}
      yAxisWidth={80}
    />
  ),
}

export const Stacked = {
  render: () => (
    <HorizontalBarChart
      title="Traffic Sources by Region"
      description="Monthly traffic distribution by source and region"
      lastUpdated={{ time: "2 hours ago", variant: "outline" }}
      data={regionData}
      config={regionConfig}
      stacked
      yAxisWidth={120}
    />
  ),
}

export const CustomLabels = {
  render: () => (
    <HorizontalBarChart
      title="Core Web Vitals"
      description="Current performance metrics against targets"
      lastUpdated={{ time: "1 day ago", variant: "destructive" }}
      data={performanceData}
      config={performanceConfig}
      showLabels
      customLabel={(value) => {
        const metric = performanceData.find((d) => d.value === value)
        return metric ? `${value}${metric.unit}` : `${value}`
      }}
      yAxisWidth={160}
    />
  ),
}
