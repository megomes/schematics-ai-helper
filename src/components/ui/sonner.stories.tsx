import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

import { Button } from './button';

const meta: Meta = {
  title: 'UI/Toast (Sonner)',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Success: Story = {
  render: () => (
    <>
      <Toaster position="top-right" richColors />
      <Button
        onClick={() =>
          toast.success('Project created successfully!', {
            description: 'Your new project is ready.',
          })
        }
      >
        Show Success Toast
      </Button>
    </>
  ),
};

export const Error: Story = {
  render: () => (
    <>
      <Toaster position="top-right" richColors />
      <Button
        onClick={() =>
          toast.error('Failed to save changes.', {
            description: 'Please try again.',
          })
        }
      >
        Show Error Toast
      </Button>
    </>
  ),
};

export const Warning: Story = {
  render: () => (
    <>
      <Toaster position="top-right" richColors />
      <Button
        onClick={() =>
          toast.warning('Check your input.', {
            description: 'Some fields are missing.',
          })
        }
      >
        Show Warning Toast
      </Button>
    </>
  ),
};

export const Info: Story = {
  render: () => (
    <>
      <Toaster position="top-right" richColors />
      <Button
        onClick={() =>
          toast('This is an info toast.', {
            description: 'Just letting you know.',
          })
        }
      >
        Show Info Toast
      </Button>
    </>
  ),
};
