import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertCircle,
  WifiOff,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
} from 'lucide-react';

import { Button } from './button';
import {
  ErrorState,
  ErrorStateIcon,
  ErrorStateTitle,
  ErrorStateDescription,
  ErrorStateAction,
  ErrorStateDetails,
} from './error-state';

const meta: Meta<typeof ErrorState> = {
  title: 'UI/Error State',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'apiFailure', 'validationError'],
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
        <ErrorStateIcon>
          <AlertCircle className="h-6 w-6" />
        </ErrorStateIcon>
        <ErrorStateTitle>Something went wrong</ErrorStateTitle>
        <ErrorStateDescription>
          An unexpected error occurred. Please try again.
        </ErrorStateDescription>
        <ErrorStateAction>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </ErrorStateAction>
      </>
    ),
  },
};

export const APIFailure: Story = {
  args: {
    variant: 'apiFailure',
    children: (
      <>
        <ErrorStateIcon>
          <WifiOff className="h-6 w-6" />
        </ErrorStateIcon>
        <ErrorStateTitle>Connection failed</ErrorStateTitle>
        <ErrorStateDescription>
          Unable to connect to the server. Please check your internet connection
          and try again.
        </ErrorStateDescription>
        <ErrorStateAction>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </ErrorStateAction>
        <ErrorStateDetails>
          Error: Network timeout Status: 408 Time: 2024-01-15 14:30:22
        </ErrorStateDetails>
      </>
    ),
  },
};

export const ValidationError: Story = {
  args: {
    variant: 'validationError',
    children: (
      <>
        <ErrorStateIcon>
          <AlertTriangle className="h-6 w-6" />
        </ErrorStateIcon>
        <ErrorStateTitle>Invalid input</ErrorStateTitle>
        <ErrorStateDescription>
          Please check your input and fix the errors before continuing.
        </ErrorStateDescription>
        <ErrorStateAction>
          <Button>Fix Errors</Button>
        </ErrorStateAction>
        <ErrorStateDetails>
          • Email must be a valid email address • Password must be at least 8
          characters • Name is required
        </ErrorStateDetails>
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
        <ErrorStateIcon>
          <AlertCircle className="h-4 w-4" />
        </ErrorStateIcon>
        <ErrorStateTitle>Error</ErrorStateTitle>
        <ErrorStateDescription>Something went wrong.</ErrorStateDescription>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    variant: 'apiFailure',
    size: 'lg',
    children: (
      <>
        <ErrorStateIcon>
          <WifiOff className="h-8 w-8" />
        </ErrorStateIcon>
        <ErrorStateTitle>Service Unavailable</ErrorStateTitle>
        <ErrorStateDescription>
          We're experiencing technical difficulties. Our team has been notified
          and is working to resolve the issue. Please try again in a few
          minutes.
        </ErrorStateDescription>
        <ErrorStateAction>
          <Button size="lg">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </ErrorStateAction>
        <ErrorStateDetails>
          Error Code: 503 Service Unavailable Request ID: req_123456789
          Timestamp: 2024-01-15T14:30:22.123Z Endpoint: /api/projects
        </ErrorStateDetails>
      </>
    ),
  },
};
