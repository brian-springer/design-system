import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => <Switch />,
}

const SwitchWithLabel = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

export const WithLabel: Story = {
  render: () => <SwitchWithLabel />,
}

export const Disabled: Story = {
  render: () => <Switch disabled />,
}

export const Checked: Story = {
  render: () => <Switch defaultChecked />,
}
