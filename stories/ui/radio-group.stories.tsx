import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r1">Default</Label>
          <p className="text-sm text-muted-foreground">
            The default system spacing.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r2">Comfortable</Label>
          <p className="text-sm text-muted-foreground">
            Increased spacing for better readability.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r3">Compact</Label>
          <p className="text-sm text-muted-foreground">
            Reduced spacing to show more content.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
}
