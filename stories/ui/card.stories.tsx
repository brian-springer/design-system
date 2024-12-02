import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your new project will be created in your current workspace.</p>
      </CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Update your account information.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}
