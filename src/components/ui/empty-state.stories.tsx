import type { Meta, StoryObj } from '@storybook/react';
import { Plus, FolderOpen, FileText, Rocket } from 'lucide-react';

import { Button } from './button';
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
} from './empty-state';

const meta: Meta<typeof EmptyState> = {
  title: 'UI/Empty State',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'newProject', 'noProjects'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <EmptyStateIcon>
          <FileText className="h-6 w-6" />
        </EmptyStateIcon>
        <EmptyStateTitle>No items found</EmptyStateTitle>
        <EmptyStateDescription>
          There are no items to display at the moment.
        </EmptyStateDescription>
      </>
    ),
  },
};

export const NewProject: Story = {
  args: {
    variant: 'newProject',
    children: (
      <>
        <EmptyStateIcon>
          <Rocket className="h-6 w-6" />
        </EmptyStateIcon>
        <EmptyStateTitle>Start your first project</EmptyStateTitle>
        <EmptyStateDescription>
          Create your first project to get started with building amazing
          applications.
        </EmptyStateDescription>
        <EmptyStateAction>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </EmptyStateAction>
      </>
    ),
  },
};

export const NoProjects: Story = {
  args: {
    variant: 'noProjects',
    children: (
      <>
        <EmptyStateIcon>
          <FolderOpen className="h-6 w-6" />
        </EmptyStateIcon>
        <EmptyStateTitle>No projects yet</EmptyStateTitle>
        <EmptyStateDescription>
          You haven't created any projects yet. Start by creating your first
          project.
        </EmptyStateDescription>
        <EmptyStateAction>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
          <Button variant="ghost">Learn More</Button>
        </EmptyStateAction>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: (
      <>
        <EmptyStateIcon>
          <FileText className="h-4 w-4" />
        </EmptyStateIcon>
        <EmptyStateTitle>No data</EmptyStateTitle>
        <EmptyStateDescription>
          No data available to display.
        </EmptyStateDescription>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    variant: 'newProject',
    size: 'lg',
    children: (
      <>
        <EmptyStateIcon>
          <Rocket className="h-8 w-8" />
        </EmptyStateIcon>
        <EmptyStateTitle>Welcome to your workspace</EmptyStateTitle>
        <EmptyStateDescription>
          This is where you'll manage all your projects. Create your first
          project to get started with building amazing applications and
          collaborating with your team.
        </EmptyStateDescription>
        <EmptyStateAction>
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Create Your First Project
          </Button>
        </EmptyStateAction>
      </>
    ),
  },
};
