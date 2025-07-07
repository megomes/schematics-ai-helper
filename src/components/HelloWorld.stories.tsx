import type { Meta, StoryObj } from '@storybook/react';
import HelloWorld from './HelloWorld';

const meta: Meta<typeof HelloWorld> = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111827' },
        { name: 'light', value: '#f9fafb' }
      ]
    }
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'circuit', 'ai'],
      description: 'Visual variant style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Circuit AI Assistant',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    text: 'Circuit AI Assistant',
    variant: 'primary',
  },
};

export const Circuit: Story = {
  args: {
    text: 'Signal Processing',
    variant: 'circuit',
  },
};

export const AI: Story = {
  args: {
    text: 'AI Processing',
    variant: 'ai',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Design System Demo',
    variant: 'primary',
  },
};

export const WithCustomStyles: Story = {
  args: {
    text: 'Custom Styled',
    variant: 'circuit',
    className: 'text-6xl',
  },
}; 