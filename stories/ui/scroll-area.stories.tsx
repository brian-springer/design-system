import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ScrollAreaDemo = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}

export const Default: Story = {
  render: () => <ScrollAreaDemo />,
}

const ScrollAreaHorizontal = () => {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="w-[150px] shrink-0 rounded-md border p-4"
          >
            <div className="text-sm">Item {i + 1}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export const Horizontal: Story = {
  render: () => <ScrollAreaHorizontal />,
}
