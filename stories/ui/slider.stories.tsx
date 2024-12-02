import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/components/ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      className="w-[60vw] max-w-[400px]"
    />
  ),
}

export const Range: Story = {
  render: () => (
    <Slider
      defaultValue={[20, 80]}
      max={100}
      step={1}
      className="w-[60vw] max-w-[400px]"
    />
  ),
}

export const Steps: Story = {
  render: () => (
    <Slider
      defaultValue={[50]}
      max={100}
      step={10}
      className="w-[60vw] max-w-[400px]"
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="w-[60vw] max-w-[400px]"
    />
  ),
}
