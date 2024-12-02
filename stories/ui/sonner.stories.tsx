import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toaster>

const ToasterDemo = () => {
  return (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.success('Success', {
            description: 'Your changes have been saved.',
          })
        }}
      >
        Show Success
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.error('Error', {
            description: 'There was a problem with your request.',
          })
        }}
      >
        Show Error
      </Button>

      <Toaster />
    </div>
  )
}

export const Default: Story = {
  render: () => <ToasterDemo />,
}
