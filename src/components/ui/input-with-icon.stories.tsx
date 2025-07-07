import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Zap, Settings, Type } from 'lucide-react';
import { useState } from 'react';

import { InputWithIcon } from './input-with-icon';
import { Label } from './label';

const meta: Meta<typeof InputWithIcon> = {
  title: 'UI/InputWithIcon',
  component: InputWithIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Enhanced input component with icons, states, and validation feedback.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Visual variant of the input',
    },
    inputSize: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Size of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
      description: 'The type of input',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Shows clear button when input has value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    icon: <Type className="h-4 w-4 text-muted-foreground" />,
  },
};

export const WithSearchIcon: Story = {
  args: {
    type: 'search',
    placeholder: 'Search components...',
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: <Mail className="h-4 w-4 text-muted-foreground" />,
    type: 'email',
    placeholder: 'Enter your email...',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    placeholder: 'Processing...',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter voltage value...',
    error: 'Please enter a valid voltage between 1V and 12V',
    value: '15V',
  },
};

export const WithSuccess: Story = {
  args: {
    placeholder: 'Enter voltage value...',
    success: 'Valid voltage range',
    value: '5V',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
  },
};

const WithClearButtonComponent = () => {
  const [value, setValue] = useState('Some text to clear');
  return (
    <InputWithIcon
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Type something..."
      showClearButton
      onClear={() => setValue('')}
    />
  );
};

export const WithClearButton: Story = {
  render: () => <WithClearButtonComponent />,
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Small</Label>
        <InputWithIcon
          inputSize="sm"
          placeholder="Small input..."
          icon={<Settings className="h-3 w-3 text-muted-foreground" />}
        />
      </div>
      <div className="space-y-2">
        <Label>Default</Label>
        <InputWithIcon
          placeholder="Default input..."
          icon={<Settings className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="space-y-2">
        <Label>Large</Label>
        <InputWithIcon
          inputSize="lg"
          placeholder="Large input..."
          icon={<Settings className="h-5 w-5 text-muted-foreground" />}
        />
      </div>
    </div>
  ),
};

// Circuit-specific examples
const CircuitVoltageComponent = () => {
  const [voltage, setVoltage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateVoltage = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setError('Please enter a valid number');
      setSuccess('');
    } else if (num < 0.1 || num > 15) {
      setError('Voltage must be between 0.1V and 15V');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Valid voltage for analog circuits');
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="voltage">Supply Voltage</Label>
      <InputWithIcon
        id="voltage"
        type="number"
        value={voltage}
        onChange={e => {
          setVoltage(e.target.value);
          validateVoltage(e.target.value);
        }}
        placeholder="Enter voltage (e.g., 5V)..."
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        error={error}
        success={success}
      />
    </div>
  );
};

export const CircuitVoltage: Story = {
  render: () => <CircuitVoltageComponent />,
};

const ComponentSearchComponent = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="space-y-2">
      <Label htmlFor="component-search">Find Components</Label>
      <InputWithIcon
        id="component-search"
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search OpAmp, resistor, capacitor..."
        showClearButton
        onClear={() => setSearch('')}
      />
      <p className="text-xs text-muted-foreground">
        Search through thousands of electronic components
      </p>
    </div>
  );
};

export const ComponentSearch: Story = {
  render: () => <ComponentSearchComponent />,
};

const AIPromptComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-2 w-96">
      <Label htmlFor="ai-prompt">Describe Your Circuit</Label>
      <InputWithIcon
        id="ai-prompt"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="e.g., 'Create an oscillator for Eurorack synth'..."
        isLoading={isLoading}
        onKeyDown={e => {
          if (e.key === 'Enter' && !isLoading) {
            handleSubmit();
          }
        }}
      />
      <p className="text-xs text-muted-foreground">
        Press Enter to send your circuit description to AI
      </p>
    </div>
  );
};

export const AIPrompt: Story = {
  render: () => <AIPromptComponent />,
};
