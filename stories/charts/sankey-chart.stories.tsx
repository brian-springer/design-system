import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ResponsiveSankey } from "@nivo/sankey"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

// Chart configuration with color palettes
const chartConfig = {
  traffic: {
    label: "Traffic Flow",
    colors: {
      source1: "#0c4a6e", // sky-900
      source2: "#075985", // sky-800
      source3: "#0369a1", // sky-700
      source4: "#0284c7", // sky-600
      source5: "#0ea5e9", // sky-500
      target1: "#38bdf8", // sky-400
      target2: "#7dd3fc", // sky-300
      target3: "#bae6fd", // sky-200
      target4: "#e0f2fe", // sky-100
      target5: "#f0f9ff", // sky-50
      flow: "#0ea5e9", // sky-500
    },
  },
  rainbow: {
    label: "Rainbow Flow",
    colors: {
      red: "#ef4444",     // Red
      orange: "#f97316",  // Orange
      amber: "#f59e0b",   // Amber
      yellow: "#eab308",  // Yellow
      lime: "#84cc16",    // Lime
      green: "#22c55e",   // Green
      emerald: "#10b981", // Emerald
      teal: "#14b8a6",    // Teal
      cyan: "#06b6d4",    // Cyan
      blue: "#3b82f6",    // Blue
      indigo: "#6366f1",  // Indigo
      violet: "#8b5cf6",  // Violet
      purple: "#a855f7",  // Purple
      pink: "#ec4899",    // Pink
    },
  },
} satisfies ChartConfig

// Generate sample data for traffic flow
const generateSankeyData = (complexity: 'simple' | 'medium' | 'complex' = 'medium', variant: 'default' | 'rainbow' = 'default') => {
  if (variant === 'rainbow') {
    const nodes = [
      { id: "social", label: "Social Media", color: chartConfig.rainbow.colors.red },
      { id: "search", label: "Search Engine", color: chartConfig.rainbow.colors.orange },
      { id: "email", label: "Email", color: chartConfig.rainbow.colors.yellow },
      { id: "ads", label: "Paid Ads", color: chartConfig.rainbow.colors.green },
      { id: "direct", label: "Direct", color: chartConfig.rainbow.colors.blue },
      { id: "referral", label: "Referral", color: chartConfig.rainbow.colors.violet },
      
      { id: "home", label: "Homepage", color: chartConfig.rainbow.colors.teal },
      { id: "product", label: "Products", color: chartConfig.rainbow.colors.emerald },
      { id: "blog", label: "Blog", color: chartConfig.rainbow.colors.cyan },
      { id: "docs", label: "Documentation", color: chartConfig.rainbow.colors.indigo },
      { id: "support", label: "Support", color: chartConfig.rainbow.colors.purple },
      { id: "checkout", label: "Checkout", color: chartConfig.rainbow.colors.pink },
    ]

    const links = [
      // Social Media flows
      { source: "social", target: "home", value: 2500 },
      { source: "social", target: "blog", value: 1800 },
      { source: "social", target: "product", value: 1200 },
      
      // Search Engine flows
      { source: "search", target: "product", value: 3500 },
      { source: "search", target: "blog", value: 2000 },
      { source: "search", target: "docs", value: 1500 },
      
      // Email flows
      { source: "email", target: "product", value: 2200 },
      { source: "email", target: "checkout", value: 1600 },
      { source: "email", target: "support", value: 800 },
      
      // Paid Ads flows
      { source: "ads", target: "product", value: 2800 },
      { source: "ads", target: "checkout", value: 2000 },
      
      // Direct flows
      { source: "direct", target: "home", value: 1500 },
      { source: "direct", target: "product", value: 1200 },
      { source: "direct", target: "support", value: 900 },
      
      // Referral flows
      { source: "referral", target: "blog", value: 1100 },
      { source: "referral", target: "docs", value: 900 },
      { source: "referral", target: "product", value: 700 },
    ]

    return { nodes, links }
  }

  if (complexity === 'simple') {
    return {
      nodes: [
        { id: "source1", label: "Direct", color: chartConfig.traffic.colors.source1 },
        { id: "source2", label: "Search", color: chartConfig.traffic.colors.source2 },
        { id: "target1", label: "Product", color: chartConfig.traffic.colors.target1 },
        { id: "target2", label: "Blog", color: chartConfig.traffic.colors.target2 },
      ],
      links: [
        { source: "source1", target: "target1", value: 2000 },
        { source: "source2", target: "target1", value: 3000 },
        { source: "source2", target: "target2", value: 1000 },
      ],
    }
  }

  const baseNodes = [
    { id: "source1", label: "Direct", color: chartConfig.traffic.colors.source1 },
    { id: "source2", label: "Search", color: chartConfig.traffic.colors.source2 },
    { id: "source3", label: "Social", color: chartConfig.traffic.colors.source3 },
    { id: "target1", label: "Product", color: chartConfig.traffic.colors.target1 },
    { id: "target2", label: "Blog", color: chartConfig.traffic.colors.target2 },
    { id: "target3", label: "Homepage", color: chartConfig.traffic.colors.target3 },
  ]

  const baseLinks = [
    { source: "source1", target: "target1", value: 2000 },
    { source: "source1", target: "target3", value: 1500 },
    { source: "source2", target: "target1", value: 3000 },
    { source: "source2", target: "target2", value: 1000 },
    { source: "source3", target: "target2", value: 800 },
    { source: "source3", target: "target3", value: 1200 },
  ]

  if (complexity === 'complex') {
    return {
      nodes: [
        ...baseNodes,
        { id: "source4", label: "Email", color: chartConfig.traffic.colors.source4 },
        { id: "source5", label: "Ads", color: chartConfig.traffic.colors.source5 },
        { id: "target4", label: "Documentation", color: chartConfig.traffic.colors.target4 },
        { id: "target5", label: "Support", color: chartConfig.traffic.colors.target5 },
      ],
      links: [
        ...baseLinks,
        { source: "source4", target: "target1", value: 1200 },
        { source: "source4", target: "target5", value: 800 },
        { source: "source5", target: "target1", value: 2500 },
        { source: "source5", target: "target4", value: 500 },
        { source: "source1", target: "target4", value: 300 },
        { source: "source2", target: "target5", value: 600 },
      ],
    }
  }

  return {
    nodes: baseNodes,
    links: baseLinks,
  }
}

interface SankeyChartDemoProps {
  data: {
    nodes: Array<{ id: string; label: string; color: string }>
    links: Array<{ source: string; target: string; value: number }>
  }
  title?: string
  description?: string
  variant?: "default" | "gradient" | "pattern"
}

const SankeyChartDemo = ({
  data,
  title = "Traffic Flow",
  description = "Website traffic flow analysis",
  variant = "default",
}: SankeyChartDemoProps) => {
  return (
    <Card className="w-[1200px]">
      <CardHeader className="items-center pb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer
          config={chartConfig}
          className="h-[500px] w-full"
        >
          <ResponsiveSankey
            data={data}
            margin={{ top: 40, right: 140, bottom: 40, left: 140 }}
            align="justify"
            colors={(node) => node.color || chartConfig.traffic.colors.flow}
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeSpacing={24}
            nodeBorderWidth={0}
            linkOpacity={0.5}
            linkHoverOpacity={0.8}
            linkBlendMode="multiply"
            enableLinkGradient={variant === "gradient"}
            label={(node) => node.label}
            labelPosition="outside"
            labelOrientation="horizontal"
            labelPadding={16}
            labelTextColor="#374151"
            animate={true}
            motionConfig="gentle"
          />
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

const meta: Meta<typeof SankeyChartDemo> = {
  title: "Charts/SankeyChart",
  component: SankeyChartDemo,
  parameters: {
    layout: "centered",
    canvas: {
      width: 1400,
      height: 600,
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8" style={{ minWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SankeyChartDemo>

export const Simple: Story = {
  render: () => {
    const [data] = useState(() => generateSankeyData('simple'))
    return (
      <SankeyChartDemo 
        data={data}
        title="Simple Traffic Flow"
        description="Basic website traffic flow visualization"
      />
    )
  },
}

export const Default: Story = {
  render: () => {
    const [data] = useState(() => generateSankeyData('medium'))
    return <SankeyChartDemo data={data} />
  },
}

export const Complex: Story = {
  render: () => {
    const [data] = useState(() => generateSankeyData('complex'))
    return (
      <SankeyChartDemo 
        data={data}
        title="Complex Traffic Flow"
        description="Detailed website traffic flow analysis across multiple channels"
      />
    )
  },
}

export const WithGradient: Story = {
  render: () => {
    const [data] = useState(() => generateSankeyData('medium'))
    return (
      <SankeyChartDemo 
        data={data}
        variant="gradient"
        title="Gradient Flow"
        description="Traffic flow with gradient links"
      />
    )
  },
}

export const Rainbow: Story = {
  render: () => {
    const [data] = useState(() => generateSankeyData('complex', 'rainbow'))
    return (
      <SankeyChartDemo 
        data={data}
        variant="gradient"
        title="Website Traffic Flow"
        description="Detailed analysis of user journey across different channels"
      />
    )
  },
}

export const RainbowWithoutGradient: Story = {
  render: () => {
    const [data] = useState(() => generateSankeyData('complex', 'rainbow'))
    return (
      <SankeyChartDemo 
        data={data}
        title="Website Traffic Flow"
        description="Detailed analysis of user journey across different channels"
      />
    )
  },
}
