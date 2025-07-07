import type { Meta, StoryObj } from '@storybook/react';
import ChatInterface from './ChatInterface';

const meta: Meta<typeof ChatInterface> = {
  title: 'Components/ChatInterface',
  component: ChatInterface,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Shows AI thinking indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-96 border rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-96 border rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    messages: [],
    isLoading: false,
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-96 border rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const WithCustomMessages: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'Create an oscillator for Eurorack',
        timestamp: new Date('2024-01-15T10:00:00'),
        status: 'sent'
      },
      {
        id: '2',
        type: 'ai',
        content: 'I\'ll help you design a Eurorack oscillator! To provide the best solution, I need to understand your requirements better:\n\n1. What type of oscillator are you looking for?\n2. What waveforms do you need?\n3. What\'s your target frequency range?',
        timestamp: new Date('2024-01-15T10:00:05'),
        status: 'sent'
      },
      {
        id: '3',
        type: 'user',
        content: 'Basic analog VCO with sine, triangle, and square waves. Audio range.',
        timestamp: new Date('2024-01-15T10:01:00'),
        status: 'sent'
      },
      {
        id: '4',
        type: 'ai',
        content: 'Perfect! I\'ll design a classic analog VCO with those specifications. Based on your requirements, I\'m creating a voltage-controlled oscillator with triangle core, sine shaper, and square wave comparator.',
        timestamp: new Date('2024-01-15T10:01:05'),
        status: 'sent'
      }
    ],
    isLoading: false,
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-96 border rounded-lg">
        <Story />
      </div>
    ),
  ],
}; 