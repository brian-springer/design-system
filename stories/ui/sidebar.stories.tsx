import type { Meta, StoryObj } from '@storybook/react'
import {
  LayoutDashboard,
  Library,
  Settings,
  Users,
  PlusCircle,
  Search,
} from 'lucide-react'
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sidebar>

const SidebarDemo = ({
  variant = 'sidebar',
  side = 'left',
  collapsible = 'offcanvas',
}: {
  variant?: "sidebar" | "floating" | "inset"
  side?: "left" | "right"
  collapsible?: "offcanvas" | "icon" | "none"
}) => {
  return (
    <Sidebar variant={variant} side={side} collapsible={collapsible}>
      <SidebarHeader>
        <div className="flex h-[60px] items-center px-4">
          <span className="text-lg font-semibold">My App</span>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-2">
        <div className="px-4">
          <div className="flex items-center gap-2">
            <Input placeholder="Search..." />
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSubButton href="#" isActive>
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuSubButton href="#">
                  <Library className="h-4 w-4" />
                  <span>Library</span>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </SidebarMenuButton>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuSubButton href="#">
                      <PlusCircle className="h-4 w-4" />
                      <span>Add User</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuSubButton href="#">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuSubButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </Sidebar>
  )
}

export const Default: Story = {
  render: () => (
    <div className="flex min-h-screen">
      <SidebarDemo variant="sidebar" side="left" collapsible="offcanvas" />
      <main className="flex-1 p-4">Main Content Area</main>
    </div>
  ),
}

export const Floating: Story = {
  render: () => (
    <div className="flex min-h-screen">
      <SidebarDemo variant="floating" side="left" collapsible="offcanvas" />
      <main className="flex-1 p-4">Main Content Area</main>
    </div>
  ),
}

export const Inset: Story = {
  render: () => (
    <div className="flex min-h-screen">
      <SidebarDemo variant="inset" side="left" collapsible="offcanvas" />
      <main className="flex-1 p-4">Main Content Area</main>
    </div>
  ),
}

export const IconCollapsible: Story = {
  render: () => (
    <div className="flex min-h-screen">
      <SidebarDemo variant="sidebar" side="left" collapsible="icon" />
      <main className="flex-1 p-4">Main Content Area</main>
    </div>
  ),
}

export const RightSide: Story = {
  render: () => (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4">Main Content Area</main>
      <SidebarDemo variant="sidebar" side="right" collapsible="offcanvas" />
    </div>
  ),
}
