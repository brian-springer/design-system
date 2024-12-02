import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Loader2, Mail, Download as DownloadIcon, Trash2, Plus, Check, X, Settings as SettingsIcon } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Basic Variants
export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
}

// Size Variants
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const Default: Story = {
  args: {
    size: "default",
    children: "Default",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

// Icon Buttons
export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <SettingsIcon className="h-4 w-4" />,
  },
}

// Button States
export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <DownloadIcon className="mr-2 h-4 w-4" /> Download
      </>
    ),
  },
}

// Modern Variants
export const Gradient: Story = {
  args: {
    className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600",
    children: "Gradient",
  },
}

export const Success: Story = {
  args: {
    className: "bg-green-500 text-white hover:bg-green-600",
    children: (
      <>
        <Check className="mr-2 h-4 w-4" /> Success
      </>
    ),
  },
}

export const Warning: Story = {
  args: {
    className: "bg-yellow-500 text-white hover:bg-yellow-600",
    children: "Warning",
  },
}

export const Soft: Story = {
  args: {
    className: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    children: "Soft",
  },
}

// Group Examples
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="default">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </div>
  ),
}

export const IconButtonGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button size="icon" variant="default">
        <Plus className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <SettingsIcon className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  ),
}

export const SocialButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button className="bg-[#1DA1F2] text-white hover:bg-[#1a8cd8]">
        Twitter
      </Button>
      <Button className="bg-[#24292F] text-white hover:bg-[#1b1f23]">
        GitHub
      </Button>
      <Button className="bg-[#4267B2] text-white hover:bg-[#385898]">
        Facebook
      </Button>
    </div>
  ),
}
