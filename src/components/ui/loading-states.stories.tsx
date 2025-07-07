import type { Meta, StoryObj } from '@storybook/react';
import {
  Loader2,
  RefreshCw,
  Zap,
  Cpu,
  Settings,
  CheckCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';

/* global setInterval, clearInterval */

const meta: Meta = {
  title: 'UI/Loading States',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Loading states for the Circuit AI Assistant including spinners, skeletons, thinking dots, and progress indicators.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinners: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="mb-4">Loading Spinners</h2>
        <p className="text-muted-foreground mb-6">
          Various spinner animations for different loading contexts and sizes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Spinner */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
            <h3 className="font-medium mb-1">Basic Spinner</h3>
            <p className="text-sm text-muted-foreground">
              Default loading animation
            </p>
            <code className="text-xs text-muted-foreground">animate-spin</code>
          </div>

          {/* Refresh Spinner */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <RefreshCw className="h-8 w-8 animate-spin text-blue-500" />
            </div>
            <h3 className="font-medium mb-1">Refresh Spinner</h3>
            <p className="text-sm text-muted-foreground">
              Data refresh animation
            </p>
            <code className="text-xs text-muted-foreground">
              RefreshCw + animate-spin
            </code>
          </div>

          {/* Processing Spinner */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Settings className="h-8 w-8 animate-spin text-orange-500" />
            </div>
            <h3 className="font-medium mb-1">Processing</h3>
            <p className="text-sm text-muted-foreground">System processing</p>
            <code className="text-xs text-muted-foreground">
              Settings + animate-spin
            </code>
          </div>

          {/* Size Variations */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
            <h3 className="font-medium mb-1">Size Variations</h3>
            <p className="text-sm text-muted-foreground">h-4, h-6, h-8, h-10</p>
          </div>

          {/* Button Spinner */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md mb-4">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </button>
            <h3 className="font-medium mb-1">Button Loading</h3>
            <p className="text-sm text-muted-foreground">
              Inline button spinner
            </p>
          </div>

          {/* Circuit Spinner */}
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Cpu className="h-8 w-8 text-muted-foreground" />
                <Zap className="h-4 w-4 absolute -top-1 -right-1 animate-spin text-yellow-500" />
              </div>
            </div>
            <h3 className="font-medium mb-1">Circuit Processing</h3>
            <p className="text-sm text-muted-foreground">
              Circuit analysis spinner
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ThinkingDots: Story = {
  render: () => {
    const ThinkingDots = () => (
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      </div>
    );

    const PulseDots = () => (
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
      </div>
    );

    const WaveDots = () => (
      <div className="flex items-center gap-1">
        <div className="w-1 h-4 bg-green-500 rounded-full animate-pulse"></div>
        <div className="w-1 h-6 bg-green-500 rounded-full animate-pulse [animation-delay:0.1s]"></div>
        <div className="w-1 h-4 bg-green-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-1 h-6 bg-green-500 rounded-full animate-pulse [animation-delay:0.3s]"></div>
        <div className="w-1 h-4 bg-green-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
      </div>
    );

    return (
      <div className="space-y-8 p-6">
        <div>
          <h2 className="mb-4">Thinking Dots & Animation Patterns</h2>
          <p className="text-muted-foreground mb-6">
            Animated dot patterns for AI processing, data loading, and user
            feedback.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <ThinkingDots />
              </div>
              <h3 className="font-medium mb-1">Thinking Dots</h3>
              <p className="text-sm text-muted-foreground">
                AI processing, bouncing dots
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <PulseDots />
              </div>
              <h3 className="font-medium mb-1">Pulse Dots</h3>
              <p className="text-sm text-muted-foreground">
                Sequential pulsing animation
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <WaveDots />
              </div>
              <h3 className="font-medium mb-1">Wave Pattern</h3>
              <p className="text-sm text-muted-foreground">
                Audio-like wave animation
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="font-medium">AI Chat Examples</h3>

            <div className="bg-card border rounded-lg p-4 max-w-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">
                    AI
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm mb-2">
                    Analyzing your circuit design...
                  </p>
                  <ThinkingDots />
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-4 max-w-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm mb-2">Running simulation</p>
                  <WaveDots />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const SkeletonLoaders: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="mb-4">Skeleton Loaders</h2>
        <p className="text-muted-foreground mb-6">
          Skeleton screens that preview content structure while loading.
        </p>

        <div className="space-y-8">
          {/* Component Card Skeleton */}
          <div>
            <h3 className="mb-4">Component Card Skeleton</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="bg-card border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-muted rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded animate-pulse mb-1"></div>
                      <div className="h-3 bg-muted rounded animate-pulse w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded animate-pulse"></div>
                    <div className="h-3 bg-muted rounded animate-pulse w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Table Skeleton */}
          <div>
            <h3 className="mb-4">Data Table Skeleton</h3>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <div className="h-5 bg-muted rounded animate-pulse w-48"></div>
              </div>
              <div className="divide-y">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="p-4 flex items-center gap-4">
                    <div className="w-4 h-4 bg-muted rounded animate-pulse"></div>
                    <div className="flex-1 h-4 bg-muted rounded animate-pulse"></div>
                    <div className="w-20 h-4 bg-muted rounded animate-pulse"></div>
                    <div className="w-16 h-4 bg-muted rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Skeleton */}
          <div>
            <h3 className="mb-4">Chart/Graph Skeleton</h3>
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="h-6 bg-muted rounded animate-pulse w-32"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-24"></div>
              </div>
              <div className="flex items-end gap-2 h-40">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-muted rounded-t animate-pulse"
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="h-3 bg-muted rounded animate-pulse w-8"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Skeleton */}
          <div>
            <h3 className="mb-4">Profile/Info Skeleton</h3>
            <div className="bg-card border rounded-lg p-6 max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-muted rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-5 bg-muted rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded animate-pulse"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ProgressIndicators: Story = {
  render: () => {
    const LinearProgress = ({ value }: { value: number }) => (
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );

    const CircularProgress = ({
      value,
      size = 60,
    }: {
      value: number;
      size?: number;
    }) => {
      const radius = (size - 8) / 2;
      const circumference = 2 * Math.PI * radius;
      const strokeDasharray = circumference;
      const strokeDashoffset = circumference - (value / 100) * circumference;

      return (
        <div className="relative" style={{ width: size, height: size }}>
          <svg className="transform -rotate-90" width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-muted"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="text-primary transition-all duration-300 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium">{value}%</span>
          </div>
        </div>
      );
    };

    const StepProgress = ({
      currentStep,
      totalSteps,
    }: {
      currentStep: number;
      totalSteps: number;
    }) => (
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                i < currentStep
                  ? 'bg-primary text-primary-foreground'
                  : i === currentStep
                    ? 'bg-primary/20 text-primary border-2 border-primary'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {i < currentStep ? '✓' : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`w-8 h-1 mx-1 ${i < currentStep ? 'bg-primary' : 'bg-muted'}`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );

    return (
      <div className="space-y-8 p-6">
        <div>
          <h2 className="mb-4">Progress Indicators</h2>
          <p className="text-muted-foreground mb-6">
            Various progress indicators for tasks, uploads, and multi-step
            processes.
          </p>

          <div className="space-y-8">
            {/* Linear Progress */}
            <div>
              <h3 className="mb-4">Linear Progress Bars</h3>
              <div className="space-y-6 max-w-md">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Circuit Analysis</span>
                    <span>75%</span>
                  </div>
                  <LinearProgress value={75} />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Component Verification</span>
                    <span>45%</span>
                  </div>
                  <LinearProgress value={45} />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Simulation Complete</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Progress */}
            <div>
              <h3 className="mb-4">Circular Progress</h3>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <CircularProgress value={25} />
                  <p className="text-sm text-muted-foreground mt-2">Starting</p>
                </div>

                <div className="text-center">
                  <CircularProgress value={65} />
                  <p className="text-sm text-muted-foreground mt-2">
                    Processing
                  </p>
                </div>

                <div className="text-center">
                  <CircularProgress value={100} />
                  <p className="text-sm text-muted-foreground mt-2">Complete</p>
                </div>
              </div>
            </div>

            {/* Step Progress */}
            <div>
              <h3 className="mb-4">Step Progress</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Circuit Design Process
                  </p>
                  <StepProgress currentStep={2} totalSteps={5} />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Setup</span>
                    <span>Components</span>
                    <span>Connect</span>
                    <span>Test</span>
                    <span>Deploy</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI Analysis Pipeline
                  </p>
                  <StepProgress currentStep={4} totalSteps={4} />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Parse</span>
                    <span>Analyze</span>
                    <span>Optimize</span>
                    <span>Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const CircuitAILoadingExamples: Story = {
  render: () => <CircuitAILoadingExamplesComponent />,
};

function CircuitAILoadingExamplesComponent() {
  const [simulationProgress, setSimulationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const ComponentLoadingSkeleton = () => (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-muted rounded animate-pulse"></div>
        <div className="flex-1">
          <div className="h-4 bg-muted rounded animate-pulse mb-1"></div>
          <div className="h-3 bg-muted rounded animate-pulse w-2/3"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="h-3 bg-muted rounded animate-pulse w-20"></div>
          <div className="h-3 bg-muted rounded animate-pulse w-12"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-muted rounded animate-pulse w-16"></div>
          <div className="h-3 bg-muted rounded animate-pulse w-16"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="mb-4">Circuit AI Loading Examples</h2>
        <p className="text-muted-foreground mb-6">
          Real-world loading states for Circuit AI Assistant features and
          workflows.
        </p>
        <div className="space-y-8">
          {/* AI Chat Thinking */}
          <div>
            <h3 className="mb-4">AI Assistant Chat</h3>
            <div className="bg-card border rounded-lg p-4 max-w-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">U</span>
                  </div>
                  <div className="bg-muted p-3 rounded-lg flex-1">
                    <p className="text-sm">
                      How can I optimize the power consumption of my Arduino
                      circuit?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">
                      AI
                    </span>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Claude is analyzing your circuit...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Circuit Simulation */}
          <div>
            <h3 className="mb-4">Circuit Simulation Progress</h3>
            <div className="bg-card border rounded-lg p-6 max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Cpu className="h-6 w-6 text-blue-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-medium">Running Simulation</h4>
                  <p className="text-sm text-muted-foreground">
                    Arduino Uno Power Analysis
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(simulationProgress)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${simulationProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {simulationProgress < 30 && 'Initializing components...'}
                  {simulationProgress >= 30 &&
                    simulationProgress < 70 &&
                    'Analyzing power consumption...'}
                  {simulationProgress >= 70 &&
                    simulationProgress < 100 &&
                    'Generating report...'}
                  {simulationProgress >= 100 && 'Simulation complete!'}
                </div>
              </div>
            </div>
          </div>
          {/* Component Library Loading */}
          <div>
            <h3 className="mb-4">Component Library Loading</h3>
            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Available Components</h4>
                <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ComponentLoadingSkeleton />
                <ComponentLoadingSkeleton />
                <ComponentLoadingSkeleton />
              </div>
            </div>
          </div>
          {/* File Upload */}
          <div>
            <h3 className="mb-4">Circuit File Upload</h3>
            <div className="bg-card border-2 border-dashed rounded-lg p-6 max-w-md text-center">
              <div className="mb-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
              </div>
              <h4 className="font-medium mb-2">Uploading circuit.json</h4>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div className="bg-primary h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                75% complete (2.4 MB / 3.2 MB)
              </p>
            </div>
          </div>
          {/* Analysis Status */}
          <div>
            <h3 className="mb-4">Multi-Step Analysis</h3>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-medium mb-4">
                Circuit Optimization Analysis
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Component validation</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Power analysis</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  <span className="text-sm">Signal integrity check</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Running...
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Thermal analysis
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Pending
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 border-2 border-muted rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Generate recommendations
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
