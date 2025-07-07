import type { Meta, StoryObj } from '@storybook/react';
import {
  // Navigation & UI
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  MoreVertical,

  // Actions
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Copy,
  Share,
  Search,
  Filter,
  RefreshCw,

  // Status & Feedback
  Check,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  XCircle,
  Info,
  Eye,
  EyeOff,
  Loader2,

  // Files & Data
  File,
  FileText,
  Folder,
  FolderOpen,
  Image,
  Settings,

  // Circuit & Electronics
  Zap,
  Battery,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,

  // Communication
  MessageCircle,

  // Tools & Development
  Code,
  Terminal,
  Bug,
  Wrench,
  Hammer,

  // Layout & Organization
  Grid3X3,
  Layout,
  Sidebar,
  PanelTop,
  PanelBottom,
  PanelLeft,
  PanelRight,

  // User & Account
  User,

  // Time & Date

  // Media & Content
  Play,

  // Connectivity

  // Miscellaneous
} from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Icon system for the Circuit AI Assistant using Lucide React. Consistent, accessible icons for all interface elements.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Icon Sizes</h2>
        <p className="text-muted-foreground mb-6">
          Standard icon sizes using Tailwind CSS sizing classes. All icons are
          from Lucide React.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { size: 'h-3 w-3', name: 'Extra Small', pixels: '12px' },
            { size: 'h-4 w-4', name: 'Small', pixels: '16px' },
            { size: 'h-5 w-5', name: 'Default', pixels: '20px' },
            { size: 'h-6 w-6', name: 'Medium', pixels: '24px' },
            { size: 'h-8 w-8', name: 'Large', pixels: '32px' },
          ].map(iconSize => (
            <div key={iconSize.name} className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className={iconSize.size} />
              </div>
              <p className="text-sm font-medium">{iconSize.name}</p>
              <p className="text-xs text-muted-foreground">{iconSize.size}</p>
              <p className="text-xs text-muted-foreground">{iconSize.pixels}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Usage Guidelines</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              • <code>h-3 w-3</code> - Status indicators, badges
            </li>
            <li>
              • <code>h-4 w-4</code> - Inline text icons, form elements
            </li>
            <li>
              • <code>h-5 w-5</code> - Default for buttons, navigation
            </li>
            <li>
              • <code>h-6 w-6</code> - Card headers, section titles
            </li>
            <li>
              • <code>h-8 w-8</code> - Feature icons, empty states
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const NavigationIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Navigation & UI Icons</h2>
        <p className="text-muted-foreground mb-6">
          Icons for navigation, menus, and general user interface elements.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: Menu, name: 'Menu', usage: 'Mobile menu toggle' },
            { icon: X, name: 'Close', usage: 'Close dialogs, dismiss' },
            {
              icon: ChevronDown,
              name: 'Chevron Down',
              usage: 'Dropdown menus',
            },
            { icon: ChevronUp, name: 'Chevron Up', usage: 'Collapse sections' },
            {
              icon: ChevronLeft,
              name: 'Chevron Left',
              usage: 'Previous, back',
            },
            {
              icon: ChevronRight,
              name: 'Chevron Right',
              usage: 'Next, forward',
            },
            { icon: ArrowLeft, name: 'Arrow Left', usage: 'Navigation back' },
            {
              icon: ArrowRight,
              name: 'Arrow Right',
              usage: 'Navigation forward',
            },
            { icon: ArrowUp, name: 'Arrow Up', usage: 'Sort ascending' },
            { icon: ArrowDown, name: 'Arrow Down', usage: 'Sort descending' },
            {
              icon: MoreHorizontal,
              name: 'More Horizontal',
              usage: 'Menu options',
            },
            { icon: MoreVertical, name: 'More Vertical', usage: 'Kebab menu' },
          ].map(item => (
            <div
              key={item.name}
              className="bg-card border rounded-lg p-3 text-center"
            >
              <div className="flex justify-center mb-2">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const ActionIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Action Icons</h2>
        <p className="text-muted-foreground mb-6">
          Icons for user actions like create, edit, delete, and file operations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: Plus, name: 'Add', usage: 'Create new items' },
            { icon: Minus, name: 'Remove', usage: 'Delete items' },
            { icon: Edit, name: 'Edit', usage: 'Edit content' },
            { icon: Trash2, name: 'Delete', usage: 'Permanent deletion' },
            { icon: Save, name: 'Save', usage: 'Save changes' },
            { icon: Download, name: 'Download', usage: 'Download files' },
            { icon: Upload, name: 'Upload', usage: 'Upload files' },
            { icon: Copy, name: 'Copy', usage: 'Copy to clipboard' },
            { icon: Share, name: 'Share', usage: 'Share content' },
            { icon: Search, name: 'Search', usage: 'Search functionality' },
            { icon: Filter, name: 'Filter', usage: 'Filter content' },
            { icon: RefreshCw, name: 'Refresh', usage: 'Reload data' },
          ].map(item => (
            <div
              key={item.name}
              className="bg-card border rounded-lg p-3 text-center"
            >
              <div className="flex justify-center mb-2">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const StatusIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Status & Feedback Icons</h2>
        <p className="text-muted-foreground mb-6">
          Icons for indicating status, providing feedback, and showing loading
          states.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Check,
              name: 'Success',
              color: 'text-green-500',
              usage: 'Completed actions',
            },
            {
              icon: CheckCircle,
              name: 'Success Circle',
              color: 'text-green-500',
              usage: 'Validation passed',
            },
            {
              icon: AlertCircle,
              name: 'Info',
              color: 'text-blue-500',
              usage: 'Information alerts',
            },
            {
              icon: AlertTriangle,
              name: 'Warning',
              color: 'text-yellow-500',
              usage: 'Warning messages',
            },
            {
              icon: XCircle,
              name: 'Error',
              color: 'text-destructive',
              usage: 'Error states',
            },
            {
              icon: Info,
              name: 'Information',
              color: 'text-blue-500',
              usage: 'Help information',
            },
            {
              icon: Eye,
              name: 'Visible',
              color: 'text-foreground',
              usage: 'Show content',
            },
            {
              icon: EyeOff,
              name: 'Hidden',
              color: 'text-muted-foreground',
              usage: 'Hide content',
            },
            {
              icon: Loader2,
              name: 'Loading',
              color: 'text-primary',
              usage: 'Loading states',
            },
          ].map(item => (
            <div
              key={item.name}
              className="bg-card border rounded-lg p-4 text-center"
            >
              <div className="flex justify-center mb-3">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-card border rounded-lg p-4">
          <h4 className="font-medium mb-3">Loading Animation Example</h4>
          <div className="flex items-center gap-3">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Processing circuit analysis...</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CircuitElectronicsIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Circuit & Electronics Icons</h2>
        <p className="text-muted-foreground mb-6">
          Icons specifically relevant to electronics, circuits, and hardware
          components.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            {
              icon: Zap,
              name: 'Power/Voltage',
              color: 'text-yellow-500',
              usage: 'Power sources, voltage',
            },
            {
              icon: Battery,
              name: 'Battery',
              color: 'text-green-500',
              usage: 'Power supply, batteries',
            },
            {
              icon: Cpu,
              name: 'Processor',
              color: 'text-blue-500',
              usage: 'Microcontrollers, CPUs',
            },
            {
              icon: HardDrive,
              name: 'Storage',
              color: 'text-purple-500',
              usage: 'Memory, storage devices',
            },
            {
              icon: Wifi,
              name: 'Wireless',
              color: 'text-primary',
              usage: 'WiFi connectivity',
            },
            {
              icon: Bluetooth,
              name: 'Bluetooth',
              color: 'text-blue-600',
              usage: 'Bluetooth connections',
            },
            {
              icon: Radio,
              name: 'Radio',
              color: 'text-orange-500',
              usage: 'RF communications',
            },
          ].map(item => (
            <div
              key={item.name}
              className="bg-card border rounded-lg p-3 text-center"
            >
              <div className="flex justify-center mb-2">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-3">Circuit Component Examples</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <h5 className="font-medium">Power Management</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Voltage regulators, power supplies, battery management
              </p>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="h-5 w-5 text-blue-500" />
                <h5 className="font-medium">Processing Units</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Microcontrollers, processors, digital logic
              </p>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Radio className="h-5 w-5 text-orange-500" />
                <h5 className="font-medium">Communication</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Wireless modules, transceivers, antennas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FileDataIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Files & Data Icons</h2>
        <p className="text-muted-foreground mb-6">
          Icons for file operations, data management, and system settings.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: File, name: 'File', usage: 'Generic files' },
            { icon: FileText, name: 'Document', usage: 'Text documents' },
            { icon: Folder, name: 'Folder', usage: 'Directories' },
            {
              icon: FolderOpen,
              name: 'Open Folder',
              usage: 'Active directories',
            },
            { icon: Image, name: 'Image', usage: 'Image files' },
            { icon: Settings, name: 'Settings', usage: 'Configuration' },
            { icon: Code, name: 'Code', usage: 'Source code' },
            { icon: Terminal, name: 'Terminal', usage: 'Command line' },
            { icon: Bug, name: 'Debug', usage: 'Debugging' },
            { icon: Wrench, name: 'Tools', usage: 'Utilities' },
            { icon: Hammer, name: 'Tool', usage: 'General tools' },
            { icon: Grid3X3, name: 'Grid', usage: 'Layout grid' },
          ].map(item => (
            <div
              key={item.name}
              className="bg-card border rounded-lg p-3 text-center"
            >
              <div className="flex justify-center mb-2">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const LayoutOrganizationIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Layout & Organization Icons</h2>
        <p className="text-muted-foreground mb-6">
          Icons for layout controls, organization, and interface structure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Layout, name: 'Layout', usage: 'Layout controls' },
            { icon: Sidebar, name: 'Sidebar', usage: 'Toggle sidebar' },
            { icon: PanelTop, name: 'Top Panel', usage: 'Top layout panel' },
            {
              icon: PanelBottom,
              name: 'Bottom Panel',
              usage: 'Bottom layout panel',
            },
            { icon: PanelLeft, name: 'Left Panel', usage: 'Left layout panel' },
            {
              icon: PanelRight,
              name: 'Right Panel',
              usage: 'Right layout panel',
            },
            { icon: Grid3X3, name: 'Grid View', usage: 'Grid layout mode' },
            { icon: User, name: 'User', usage: 'User profile' },
          ].map(item => (
            <div
              key={item.name}
              className="bg-card border rounded-lg p-4 text-center"
            >
              <div className="flex justify-center mb-2">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const CircuitAIExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Circuit AI Interface Examples</h2>
        <p className="text-muted-foreground mb-6">
          Real-world usage of icons in Circuit AI Assistant interface
          components.
        </p>

        <div className="space-y-8">
          {/* Component Library */}
          <div>
            <h3 className="mb-4">Component Library Panel</h3>
            <div className="bg-card border rounded-lg p-4 max-w-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-blue-500" />
                  Components
                </h4>
                <button className="p-1 hover:bg-muted rounded">
                  <Search className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Op-Amp LM358</span>
                  </div>
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-green-500" />
                    <span className="text-sm">9V Battery</span>
                  </div>
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-2 hover:bg-muted rounded">
                  <div className="flex items-center gap-2">
                    <Radio className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">ESP32 WiFi</span>
                  </div>
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Circuit Status Dashboard */}
          <div>
            <h3 className="mb-4">Circuit Status Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h4 className="font-medium">Power Supply</h4>
                </div>
                <p className="text-sm text-muted-foreground">5V @ 2.1A</p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  Operating normally
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <h4 className="font-medium">Temperature</h4>
                </div>
                <p className="text-sm text-muted-foreground">68°C</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">
                  Running warm
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="h-5 w-5 text-blue-500" />
                  <h4 className="font-medium">Connectivity</h4>
                </div>
                <p className="text-sm text-muted-foreground">WiFi Connected</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  Signal: -45 dBm
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <h4 className="font-medium">Communication</h4>
                </div>
                <p className="text-sm text-muted-foreground">UART Error</p>
                <p className="text-xs text-destructive">Check connections</p>
              </div>
            </div>
          </div>

          {/* Toolbar Actions */}
          <div>
            <h3 className="mb-4">Circuit Design Toolbar</h3>
            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-muted rounded flex items-center gap-2">
                  <File className="h-4 w-4" />
                  <span className="text-sm">New</span>
                </button>

                <button className="p-2 hover:bg-muted rounded flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Open</span>
                </button>

                <button className="p-2 hover:bg-muted rounded flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  <span className="text-sm">Save</span>
                </button>

                <div className="w-px h-6 bg-border mx-2"></div>

                <button className="p-2 hover:bg-muted rounded">
                  <Copy className="h-4 w-4" />
                </button>

                <button className="p-2 hover:bg-muted rounded">
                  <Edit className="h-4 w-4" />
                </button>

                <button className="p-2 hover:bg-muted rounded">
                  <Trash2 className="h-4 w-4" />
                </button>

                <div className="w-px h-6 bg-border mx-2"></div>

                <button className="p-2 hover:bg-muted rounded flex items-center gap-2">
                  <Play className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Simulate</span>
                </button>

                <button className="p-2 hover:bg-muted rounded">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Assistant Panel */}
          <div>
            <h3 className="mb-4">AI Assistant Interface</h3>
            <div className="bg-card border rounded-lg p-4 max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">Circuit AI Assistant</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">
                    How can I help optimize your circuit design?
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 p-2 border rounded text-sm hover:bg-muted">
                    <Bug className="h-4 w-4 mx-auto mb-1" />
                    Debug Circuit
                  </button>

                  <button className="flex-1 p-2 border rounded text-sm hover:bg-muted">
                    <Zap className="h-4 w-4 mx-auto mb-1" />
                    Analyze Power
                  </button>

                  <button className="flex-1 p-2 border rounded text-sm hover:bg-muted">
                    <Settings className="h-4 w-4 mx-auto mb-1" />
                    Optimize
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
