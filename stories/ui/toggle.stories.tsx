import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '@/components/ui/toggle'
import { Bold, Italic, Underline } from 'lucide-react'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const TextToggle: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      Toggle me
    </Toggle>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic" disabled>
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

const ToggleWithVariants = () => {
  return (
    <div className="flex space-x-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline" variant="outline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  )
}

export const Variants: Story = {
  render: () => <ToggleWithVariants />,
}

export const Large: Story = {
  render: () => (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}

export const Small: Story = {
  render: () => (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
}
