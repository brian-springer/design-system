import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-required" className="after:content-['*'] after:ml-0.5 after:text-red-500">
        Email
      </Label>
      <Input type="email" id="email-required" placeholder="Email" required />
    </div>
  ),
}
