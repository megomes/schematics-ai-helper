import type { Meta, StoryObj } from '@storybook/react';
import {
  Settings,
  Zap,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from 'lucide-react';

import { Button } from './button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile card component with multiple variants, sizes, and states for different use cases.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'elevated',
        'outlined',
        'ghost',
        'gradient',
        'interactive',
        'error',
        'success',
        'warning',
      ],
      description: 'Visual variant of the card',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card padding',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          A simple card with default styling and subtle shadow.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This is the default card variant with standard styling, perfect for
          general content display.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>
          A card with enhanced shadow for emphasis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card stands out with a more prominent shadow, perfect for
          important content or featured items.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>
          A card with prominent border and no shadow.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card uses a bold border instead of shadow, perfect for a cleaner
          look or when shadow is not desired.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>
          A transparent card that appears on hover.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card is transparent by default and shows background on hover.
          Perfect for subtle content areas.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Gradient Card</CardTitle>
        <CardDescription>
          A card with subtle gradient background.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card features a subtle gradient background, perfect for premium
          content or special sections.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>
          A clickable card with hover and scale effects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card responds to interaction with hover effects and scaling.
          Perfect for clickable items.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <XCircle className="h-5 w-5 text-destructive" />
          Error Card
        </CardTitle>
        <CardDescription>A card indicating an error state.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card uses error colors and styling to indicate problems or failed
          states.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          Success Card
        </CardTitle>
        <CardDescription>A card indicating a successful state.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card uses success colors to indicate completed actions or
          positive states.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
  },
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          Warning Card
        </CardTitle>
        <CardDescription>A card indicating a warning state.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card uses warning colors to indicate caution or attention-needed
          states.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Card variant="outlined" size="sm" className="w-80">
        <CardHeader size="sm">
          <CardTitle>Small Card</CardTitle>
          <CardDescription>Compact size for tight spaces.</CardDescription>
        </CardHeader>
        <CardContent size="sm">
          <p className="text-sm">
            Small card with reduced padding for compact layouts.
          </p>
        </CardContent>
      </Card>

      <Card variant="outlined" size="md" className="w-80">
        <CardHeader size="md">
          <CardTitle>Medium Card</CardTitle>
          <CardDescription>Default size for most use cases.</CardDescription>
        </CardHeader>
        <CardContent size="md">
          <p className="text-sm">
            Medium card with standard padding, the default size.
          </p>
        </CardContent>
      </Card>

      <Card variant="outlined" size="lg" className="w-80">
        <CardHeader size="lg">
          <CardTitle>Large Card</CardTitle>
          <CardDescription>Spacious size for detailed content.</CardDescription>
        </CardHeader>
        <CardContent size="lg">
          <p className="text-sm">
            Large card with generous padding for detailed content or premium
            sections.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const VariantShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Card variant="default" className="w-72">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard card with subtle shadow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Perfect for general content display.</p>
        </CardContent>
      </Card>

      <Card variant="elevated" className="w-72">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Enhanced shadow for emphasis</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Great for featured content.</p>
        </CardContent>
      </Card>

      <Card variant="outlined" className="w-72">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
          <CardDescription>Bold border, no shadow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Clean look without shadows.</p>
        </CardContent>
      </Card>

      <Card variant="ghost" className="w-72">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
          <CardDescription>Transparent with hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Subtle background on hover.</p>
        </CardContent>
      </Card>

      <Card variant="gradient" className="w-72">
        <CardHeader>
          <CardTitle>Gradient</CardTitle>
          <CardDescription>Subtle gradient background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Premium look with gradient.</p>
        </CardContent>
      </Card>

      <Card variant="interactive" className="w-72">
        <CardHeader>
          <CardTitle>Interactive</CardTitle>
          <CardDescription>Clickable with hover effects</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Hover and scale animations.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

// Circuit AI specific examples
export const CircuitComponent: Story = {
  render: () => (
    <Card variant="elevated" className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          Op-Amp LM358
        </CardTitle>
        <CardDescription>Dual operational amplifier IC</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Supply Voltage:</span>
            <span>±15V</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Input Offset:</span>
            <span>7mV</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Package:</span>
            <span>DIP-8</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Add to Circuit
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const CircuitAnalysis: Story = {
  render: () => (
    <Card variant="success" className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          Circuit Analysis
        </CardTitle>
        <CardDescription>Simulation completed successfully</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Power:</span>
            <span className="font-medium">2.4W</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Max Voltage:</span>
            <span className="font-medium">12V</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Components:</span>
            <span className="font-medium">15</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-muted-foreground">
            All parameters within acceptable ranges
          </p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const AIPromptCard: Story = {
  render: () => (
    <Card variant="gradient" className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          AI Circuit Assistant
        </CardTitle>
        <CardDescription>Describe your circuit idea</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm italic">
              Create a voltage regulator circuit that steps down 12V to 5V for
              powering Arduino projects
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Processing with Claude AI...
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Generate Circuit</Button>
      </CardFooter>
    </Card>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Card variant="error" className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <XCircle className="h-5 w-5 text-destructive" />
          Simulation Error
        </CardTitle>
        <CardDescription>Circuit analysis failed</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-3 bg-destructive/10 rounded-lg">
            <p className="text-sm text-destructive">
              Short circuit detected between nodes N1 and N2
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>• Check connections at R1 and R2</p>
            <p>• Verify component orientations</p>
            <p>• Ensure proper ground connections</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Debug Circuit
        </Button>
      </CardFooter>
    </Card>
  ),
};
