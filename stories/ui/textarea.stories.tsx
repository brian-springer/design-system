import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => <Textarea placeholder="Type your message here." />,
}

const TextareaWithLabel = () => {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}

export const WithLabel: Story = {
  render: () => <TextareaWithLabel />,
}

export const Disabled: Story = {
  render: () => (
    <Textarea
      placeholder="Type your message here."
      disabled
    />
  ),
}

const TextareaWithText = () => {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}

export const WithText: Story = {
  render: () => <TextareaWithText />,
}
