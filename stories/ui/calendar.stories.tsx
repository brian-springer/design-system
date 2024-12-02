import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

const CalendarDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

export const Default: Story = {
  render: () => <CalendarDemo />,
}

const CalendarRangeDemo = () => {
  const [date, setDate] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(),
    to: undefined,
  })

  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={(range) => setDate(range ? { from: range.from, to: range.to } : { from: undefined, to: undefined })}
      className="rounded-md border"
      numberOfMonths={2}
    />
  )
}

export const DateRange: Story = {
  render: () => <CalendarRangeDemo />,
}
