import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'

const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2024 at 5:57 PM",
          })
        }}
      >
        Show Simple Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Show Error Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Success",
            description: "Your changes have been saved.",
            action: <ToastAction altText="Undo">Undo</ToastAction>,
          })
        }}
      >
        Show Success Toast
      </Button>
    </div>
  )
}

const meta: Meta<typeof ToastDemo> = {
  title: 'UI/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ToastDemo>

export const Default: Story = {
  render: () => <ToastDemo />,
}
