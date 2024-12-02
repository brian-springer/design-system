import type { Meta, StoryObj } from "@storybook/react"
import { DonutTotal } from "@/components/charts/donut-total"

const meta: Meta<typeof DonutTotal> = {
  title: "Number Widgets/Donut Total",
  component: DonutTotal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DonutTotal>

export const Small: Story = {
  args: {
    data: [
      { name: "Used", value: 850, trend: 12 },
      { name: "Available", value: 150, trend: -5 }
    ],
    trend: 12,
    label: "Storage",
    size: "sm"
  },
}

export const Medium: Story = {
  args: {
    data: [
      { name: "Active", value: 4500, trend: 10 },
      { name: "Inactive", value: 2500, trend: -8 },
      { name: "New", value: 1500, trend: 5 }
    ],
    trend: -5,
    label: "Users",
    size: "md"
  },
}

export const Large: Story = {
  args: {
    data: [
      { name: "Q1", value: 35000, trend: 15 },
      { name: "Q2", value: 28000, trend: 10 },
      { name: "Q3", value: 22000, trend: -5 },
      { name: "Q4", value: 15000, trend: -12 }
    ],
    trend: 8,
    label: "Revenue",
    size: "lg"
  },
}
