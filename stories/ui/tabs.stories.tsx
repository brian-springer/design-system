import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="space-y-2 pt-4">
            <h3 className="font-medium">Account Settings</h3>
            <p className="text-sm text-muted-foreground">
              Update your account settings. Set your preferred language and timezone.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="space-y-2 pt-4">
            <h3 className="font-medium">Password Settings</h3>
            <p className="text-sm text-muted-foreground">
              Change your password here. After saving, you'll be logged out.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardContent className="space-y-2 pt-4">
            <h3 className="font-medium">General Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure your general application settings here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}
