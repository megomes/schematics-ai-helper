import type { Meta, StoryObj } from '@storybook/react';

import WelcomeMessage from './WelcomeMessage';

const meta: Meta<typeof WelcomeMessage> = {
  title: 'Components/WelcomeMessage',
  component: WelcomeMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Visual variant style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}; 