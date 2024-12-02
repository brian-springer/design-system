import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Save,
  SaveAll,
  Download,
  Share,
  Copy,
  Send,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Grid,
  List,
  LayoutGrid,
  LayoutList,
  Table,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
} from "lucide-react"
import { SplitButton } from "@/components/split-button"

const meta: Meta<typeof SplitButton> = {
  title: "Components/SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SplitButton>

// Standard Split Button Example
const saveOptions = [
  {
    label: "Save As...",
    value: "saveAs",
    icon: <SaveAll />,
    onClick: () => console.log("Save As clicked"),
  },
  {
    label: "Save Copy",
    value: "saveCopy",
    icon: <Copy />,
    onClick: () => console.log("Save Copy clicked"),
  },
  {
    label: "Save and Share",
    value: "saveShare",
    icon: <Share />,
    onClick: () => console.log("Save and Share clicked"),
  },
]

export const Default: Story = {
  args: {
    options: saveOptions,
    defaultOption: {
      label: "Save",
      value: "save",
      icon: <Save />,
      onClick: () => console.log("Save clicked"),
    },
  },
}

// Persistent Split Button with View Options
const viewOptions = [
  {
    label: "Grid View",
    value: "grid",
    icon: <Grid />,
  },
  {
    label: "List View",
    value: "list",
    icon: <List />,
  },
  {
    label: "Table View",
    value: "table",
    icon: <Table />,
  },
]

const PersistentExample = () => {
  const [selectedView, setSelectedView] = useState("grid")
  
  return (
    <SplitButton
      options={viewOptions}
      persistent={true}
      value={selectedView}
      onChange={setSelectedView}
      variant="outline"
    />
  )
}

export const PersistentView: Story = {
  render: () => <PersistentExample />,
}

// Media Type Example
const fileOptions = [
  {
    label: "Text File",
    value: "text",
    icon: <FileText />,
  },
  {
    label: "Image",
    value: "image",
    icon: <FileImage />,
  },
  {
    label: "Video",
    value: "video",
    icon: <FileVideo />,
  },
  {
    label: "Audio",
    value: "audio",
    icon: <FileAudio />,
  },
  {
    label: "Archive",
    value: "archive",
    icon: <FileArchive />,
  },
]

const FileTypeExample = () => {
  const [selectedType, setSelectedType] = useState("text")
  
  return (
    <SplitButton
      options={fileOptions}
      persistent={true}
      value={selectedType}
      onChange={setSelectedType}
      variant="secondary"
    />
  )
}

export const FileType: Story = {
  render: () => <FileTypeExample />,
}

// Playback Controls Example
const playbackOptions = [
  {
    label: "Play",
    value: "play",
    icon: <Play />,
    onClick: () => console.log("Play clicked"),
  },
  {
    label: "Pause",
    value: "pause",
    icon: <Pause />,
    onClick: () => console.log("Pause clicked"),
  },
  {
    label: "Skip",
    value: "skip",
    icon: <SkipForward />,
    onClick: () => console.log("Skip clicked"),
  },
  {
    label: "Restart",
    value: "restart",
    icon: <RotateCcw />,
    onClick: () => console.log("Restart clicked"),
  },
]

export const Playback: Story = {
  args: {
    options: playbackOptions,
    defaultOption: playbackOptions[0],
    variant: "default",
  },
}

// Size Variants
export const Small: Story = {
  args: {
    options: saveOptions,
    defaultOption: {
      label: "Save",
      value: "save",
      icon: <Save />,
      onClick: () => console.log("Save clicked"),
    },
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    options: saveOptions,
    defaultOption: {
      label: "Save",
      value: "save",
      icon: <Save />,
      onClick: () => console.log("Save clicked"),
    },
    size: "lg",
  },
}

// Variant Examples
export const Outline: Story = {
  args: {
    options: saveOptions,
    defaultOption: {
      label: "Save",
      value: "save",
      icon: <Save />,
      onClick: () => console.log("Save clicked"),
    },
    variant: "outline",
  },
}

export const Secondary: Story = {
  args: {
    options: saveOptions,
    defaultOption: {
      label: "Save",
      value: "save",
      icon: <Save />,
      onClick: () => console.log("Save clicked"),
    },
    variant: "secondary",
  },
}
