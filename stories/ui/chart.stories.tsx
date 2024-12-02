import type { Meta, StoryObj } from '@storybook/react'
import {
  Area,
  Bar,
  CartesianGrid,
  Line,
  LineChart,
  BarChart,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const meta: Meta<typeof ChartContainer> = {
  title: 'UI/Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ChartContainer>

const data = [
  { name: 'Jan', value: 400, sales: 240 },
  { name: 'Feb', value: 300, sales: 139 },
  { name: 'Mar', value: 200, sales: 980 },
  { name: 'Apr', value: 278, sales: 390 },
  { name: 'May', value: 189, sales: 480 },
  { name: 'Jun', value: 239, sales: 380 },
  { name: 'Jul', value: 349, sales: 430 },
]

const chartConfig = {
  value: {
    theme: {
      light: "hsl(var(--primary))",
      dark: "hsl(var(--primary))",
    },
    label: "Revenue",
  },
  sales: {
    theme: {
      light: "hsl(var(--secondary))",
      dark: "hsl(var(--secondary))",
    },
    label: "Sales",
  },
}

export const LineChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={ChartTooltipContent as any} />
        <Line
          type="monotone"
          dataKey="value"
          strokeWidth={2}
          activeDot={{
            r: 8,
          }}
        />
        <Line
          type="monotone"
          dataKey="sales"
          strokeWidth={2}
          activeDot={{
            r: 8,
          }}
        />
      </LineChart>
    </ChartContainer>
  ),
}

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={ChartTooltipContent as any} />
        <Bar dataKey="value" />
        <Bar dataKey="sales" />
      </BarChart>
    </ChartContainer>
  ),
}

export const AreaChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig}>
      <AreaChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={ChartTooltipContent as any} />
        <Area
          type="monotone"
          dataKey="value"
          stackId="1"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
        />
        <Area
          type="monotone"
          dataKey="sales"
          stackId="1"
          stroke="hsl(var(--secondary))"
          fill="hsl(var(--secondary))"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ChartContainer>
  ),
}
