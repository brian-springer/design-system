import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup } from "@/components/button-group"

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    maxVisible: {
      control: "number",
      description: "Maximum number of visible buttons before showing ellipsis",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Size of the buttons",
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

const actions = [
  {
    label: "Edit",
    onClick: () => console.log("Edit clicked"),
    variant: "default" as const,
  },
  {
    label: "View",
    onClick: () => console.log("View clicked"),
    variant: "secondary" as const,
  },
  {
    label: "Share",
    onClick: () => console.log("Share clicked"),
    variant: "outline" as const,
  },
  {
    label: "Archive",
    onClick: () => console.log("Archive clicked"),
    variant: "ghost" as const,
  },
  {
    label: "Delete",
    onClick: () => console.log("Delete clicked"),
    variant: "destructive" as const,
  },
]

// Connected style with outline variant
export const OutlineVariant: Story = {
  args: {
    actions: actions.map(action => ({ ...action, variant: "outline" })),
    maxVisible: 4,
  },
}

// Connected style with different variants
export const MixedVariants: Story = {
  args: {
    actions: [
      {
        label: "Save",
        onClick: () => console.log("Save clicked"),
        variant: "default",
      },
      {
        label: "Edit",
        onClick: () => console.log("Edit clicked"),
        variant: "secondary",
      },
      {
        label: "Share",
        onClick: () => console.log("Share clicked"),
        variant: "outline",
      },
      {
        label: "Delete",
        onClick: () => console.log("Delete clicked"),
        variant: "destructive",
      },
    ],
    maxVisible: 3,
  },
}

// Small connected group
export const SmallConnected: Story = {
  args: {
    actions: actions.slice(0, 3).map(action => ({ ...action, variant: "outline" })),
    maxVisible: 3,
    size: "sm",
  },
}

// Large connected group
export const LargeConnected: Story = {
  args: {
    actions: actions.slice(0, 3).map(action => ({ ...action, variant: "outline" })),
    maxVisible: 3,
    size: "lg",
  },
}
