import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  LayoutGrid,
  LayoutList,
  Sun,
  Moon,
  Laptop,
} from "lucide-react"
import { ToggleButtons, ToggleOption } from "@/components/toggle-buttons"

const meta: Meta<typeof ToggleButtons> = {
  title: "Components/ToggleButtons",
  component: ToggleButtons,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ToggleButtons>

// Text alignment example
const alignmentOptions: ToggleOption[] = [
  { value: "left", label: "Left", icon: <AlignLeft /> },
  { value: "center", label: "Center", icon: <AlignCenter /> },
  { value: "right", label: "Right", icon: <AlignRight /> },
  { value: "justify", label: "Justify", icon: <AlignJustify /> },
]

// Text formatting example
const formattingOptions: ToggleOption[] = [
  { value: "bold", label: "Bold", icon: <Bold /> },
  { value: "italic", label: "Italic", icon: <Italic /> },
  { value: "underline", label: "Underline", icon: <Underline /> },
]

// List type example
const listOptions: ToggleOption[] = [
  { value: "unordered", label: "Bullet List", icon: <List /> },
  { value: "ordered", label: "Numbered List", icon: <ListOrdered /> },
]

// View mode example
const viewOptions: ToggleOption[] = [
  { value: "grid", label: "Grid View", icon: <LayoutGrid /> },
  { value: "list", label: "List View", icon: <LayoutList /> },
]

// Theme example
const themeOptions: ToggleOption[] = [
  { value: "light", label: "Light", icon: <Sun /> },
  { value: "dark", label: "Dark", icon: <Moon /> },
  { value: "system", label: "System", icon: <Laptop /> },
]

// Example with controlled state
const AlignmentExample = () => {
  const [value, setValue] = useState("left")
  return (
    <ToggleButtons
      options={alignmentOptions}
      value={value}
      onChange={setValue}
    />
  )
}

const FormattingExample = () => {
  const [value, setValue] = useState("bold")
  return (
    <ToggleButtons
      options={formattingOptions}
      value={value}
      onChange={setValue}
    />
  )
}

const ListExample = () => {
  const [value, setValue] = useState("unordered")
  return (
    <ToggleButtons
      options={listOptions}
      value={value}
      onChange={setValue}
    />
  )
}

const ViewModeExample = () => {
  const [value, setValue] = useState("grid")
  return (
    <ToggleButtons
      options={viewOptions}
      value={value}
      onChange={setValue}
    />
  )
}

const ThemeExample = () => {
  const [value, setValue] = useState("system")
  return (
    <ToggleButtons
      options={themeOptions}
      value={value}
      onChange={setValue}
    />
  )
}

const IconsOnlyExample = () => {
  const [value, setValue] = useState("left")
  return (
    <ToggleButtons
      options={alignmentOptions}
      value={value}
      onChange={setValue}
      size="icon"
      iconsOnly={true}
    />
  )
}

const SmallIconsExample = () => {
  const [value, setValue] = useState("bold")
  return (
    <ToggleButtons
      options={formattingOptions}
      value={value}
      onChange={setValue}
      size="sm"
      iconsOnly={true}
    />
  )
}

const LargeIconsExample = () => {
  const [value, setValue] = useState("grid")
  return (
    <ToggleButtons
      options={viewOptions}
      value={value}
      onChange={setValue}
      size="lg"
      iconsOnly={true}
    />
  )
}

export const TextAlignment: Story = {
  render: () => <AlignmentExample />,
}

export const TextFormatting: Story = {
  render: () => <FormattingExample />,
}

export const ListType: Story = {
  render: () => <ListExample />,
}

export const ViewMode: Story = {
  render: () => <ViewModeExample />,
}

export const ThemeSelector: Story = {
  render: () => <ThemeExample />,
}

export const IconsOnly: Story = {
  render: () => <IconsOnlyExample />,
}

export const SmallIconsOnly: Story = {
  render: () => <SmallIconsExample />,
}

export const LargeIconsOnly: Story = {
  render: () => <LargeIconsExample />,
}
