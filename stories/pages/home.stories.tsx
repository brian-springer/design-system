import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

const meta: Meta = {
  title: "Pages/Home",
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj

export const Home: Story = {
  render: () => (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Design System Components</CardTitle>
          <CardDescription>
            A collection of reusable components built with Radix UI and Tailwind CSS.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <p>
              This design system includes various components for building modern web applications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data Visualization Components (Charts, Sparklines)</li>
              <li>UI Components (Buttons, Cards, Forms)</li>
              <li>Layout Components</li>
              <li>Navigation Components</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
}
