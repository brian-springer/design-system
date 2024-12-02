import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AspectRatio>

const AspectRatioDemo = () => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}

export const Default: Story = {
  render: () => <AspectRatioDemo />,
}

const AspectRatioSquare = () => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={1 / 1}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}

export const Square: Story = {
  render: () => <AspectRatioSquare />,
}
