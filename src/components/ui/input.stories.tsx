import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays a form input field or a component that looks like an input field.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the input',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates whether the input value is valid',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
};

export const WithLabel: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Type something...',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
    placeholder: 'Type something...',
  },
};

// Different input types
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search components...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter voltage value...',
  },
};

// Error and Success states
export const Error: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error-input">Component Value</Label>
      <Input
        id="error-input"
        type="text"
        placeholder="Enter value..."
        className="border-destructive focus-visible:ring-destructive"
        aria-invalid="true"
        {...args}
      />
      <p className="text-sm text-destructive">Please enter a valid value.</p>
    </div>
  ),
};

export const Success: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="success-input">Component Value</Label>
      <Input
        id="success-input"
        type="text"
        value="5V"
        className="border-green-500 focus-visible:ring-green-500"
        {...args}
      />
      <p className="text-sm text-green-500">Value is valid.</p>
    </div>
  ),
};

// Circuit-specific inputs
export const CircuitDescription: Story = {
  render: args => (
    <div className="grid w-full max-w-md items-center gap-1.5">
      <Label htmlFor="circuit-desc">Circuit Description</Label>
      <Input
        id="circuit-desc"
        type="text"
        placeholder="Describe your circuit (e.g., 'Oscillator for Eurorack')..."
        className="w-full"
        {...args}
      />
      <p className="text-xs text-muted-foreground">
        Describe what you want to build and let AI help you design it.
      </p>
    </div>
  ),
};

export const ComponentSearch: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="component-search">Find Components</Label>
      <Input
        id="component-search"
        type="search"
        placeholder="Search OpAmp, resistor, capacitor..."
        {...args}
      />
    </div>
  ),
};

export const ProjectName: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="project-name">Project Name</Label>
      <Input
        id="project-name"
        type="text"
        placeholder="My Awesome Circuit"
        {...args}
      />
    </div>
  ),
};
