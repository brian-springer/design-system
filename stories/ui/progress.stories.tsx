import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Progress>

const ProgressDemo = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}

export const Default: Story = {
  render: () => <ProgressDemo />,
}

export const Static: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={0} className="w-[60%]" />
      <Progress value={33} className="w-[60%]" />
      <Progress value={66} className="w-[60%]" />
      <Progress value={100} className="w-[60%]" />
    </div>
  ),
}
