import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

const meta: Meta<typeof ResizablePanel> = {
  title: 'UI/Resizable',
  component: ResizablePanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ResizablePanel>

const ResizableDemo = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export const Default: Story = {
  render: () => <ResizableDemo />,
}

const VerticalResizableDemo = () => {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[400px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Footer</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export const Vertical: Story = {
  render: () => <VerticalResizableDemo />,
}

const ThreePanelResizableDemo = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Preview</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export const ThreePanel: Story = {
  render: () => <ThreePanelResizableDemo />,
}
