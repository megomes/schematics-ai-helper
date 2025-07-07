import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Borders',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Border and border radius system for the Circuit AI Assistant. Consistent borders create clear boundaries and visual hierarchy.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadius: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Border Radius Scale</h2>
        <p className="text-muted-foreground mb-6">
          The border radius system uses the CSS variable{' '}
          <code>--radius: 0.5rem</code> as the base value, with calculated
          variations for different use cases.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: 'None', class: 'rounded-none', value: '0px' },
            {
              name: 'Small',
              class: 'rounded-sm',
              value: 'calc(var(--radius) - 4px)',
            },
            {
              name: 'Default',
              class: 'rounded-md',
              value: 'calc(var(--radius) - 2px)',
            },
            { name: 'Medium', class: 'rounded', value: 'var(--radius)' },
            { name: 'Large', class: 'rounded-lg', value: 'var(--radius)' },
            { name: 'Extra Large', class: 'rounded-xl', value: '0.75rem' },
            { name: '2X Large', class: 'rounded-2xl', value: '1rem' },
            { name: '3X Large', class: 'rounded-3xl', value: '1.5rem' },
            { name: 'Full', class: 'rounded-full', value: '9999px' },
          ].map(radius => (
            <div key={radius.name} className="text-center">
              <div
                className={`w-20 h-20 bg-primary mx-auto mb-2 ${radius.class}`}
              ></div>
              <p className="text-sm font-medium">{radius.name}</p>
              <p className="text-xs text-muted-foreground">{radius.class}</p>
              <p className="text-xs text-muted-foreground font-mono">
                {radius.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const BorderWidths: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Border Widths</h2>
        <p className="text-muted-foreground mb-6">
          Border width scale for different emphasis levels and visual hierarchy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'None', class: 'border-0', width: '0px' },
            { name: 'Default', class: 'border', width: '1px' },
            { name: 'Medium', class: 'border-2', width: '2px' },
            { name: 'Thick', class: 'border-4', width: '4px' },
            { name: 'Extra Thick', class: 'border-8', width: '8px' },
          ].map(border => (
            <div key={border.name} className="text-center">
              <div
                className={`w-20 h-20 bg-card mx-auto mb-2 rounded-lg ${border.class} border-primary`}
              ></div>
              <p className="text-sm font-medium">{border.name}</p>
              <p className="text-xs text-muted-foreground">{border.class}</p>
              <p className="text-xs text-muted-foreground font-mono">
                {border.width}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const BorderStyles: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Border Styles</h2>
        <p className="text-muted-foreground mb-6">
          Different border styles for various design contexts and emphasis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Solid',
              class: 'border-solid',
              description: 'Default border style',
            },
            {
              name: 'Dashed',
              class: 'border-dashed',
              description: 'For temporary or draft states',
            },
            {
              name: 'Dotted',
              class: 'border-dotted',
              description: 'For subtle separation',
            },
          ].map(style => (
            <div key={style.name} className="text-center">
              <div
                className={`w-full h-20 bg-card mb-3 rounded-lg border-2 border-primary ${style.class}`}
              ></div>
              <p className="text-sm font-medium">{style.name}</p>
              <p className="text-xs text-muted-foreground">{style.class}</p>
              <p className="text-xs text-muted-foreground">
                {style.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const BorderColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Border Colors</h2>
        <p className="text-muted-foreground mb-6">
          Border colors using the design system color tokens for consistency.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              name: 'Border',
              class: 'border-border',
              usage: 'Default borders',
            },
            { name: 'Input', class: 'border-input', usage: 'Form inputs' },
            {
              name: 'Primary',
              class: 'border-primary',
              usage: 'Accent borders',
            },
            {
              name: 'Secondary',
              class: 'border-secondary',
              usage: 'Secondary emphasis',
            },
            { name: 'Muted', class: 'border-muted', usage: 'Subtle borders' },
            {
              name: 'Destructive',
              class: 'border-destructive',
              usage: 'Error states',
            },
            {
              name: 'Success',
              class: 'border-green-500',
              usage: 'Success states',
            },
            {
              name: 'Warning',
              class: 'border-yellow-500',
              usage: 'Warning states',
            },
          ].map(color => (
            <div key={color.name} className="text-center">
              <div
                className={`w-full h-16 bg-card mb-2 rounded-lg border-2 ${color.class}`}
              ></div>
              <p className="text-sm font-medium">{color.name}</p>
              <p className="text-xs text-muted-foreground">{color.class}</p>
              <p className="text-xs text-muted-foreground">{color.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const DirectionalBorders: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Directional Borders</h2>
        <p className="text-muted-foreground mb-6">
          Apply borders to specific sides for layout and visual organization.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: 'Top',
              class: 'border-t-2',
              description: 'Header separation',
            },
            {
              name: 'Right',
              class: 'border-r-2',
              description: 'Sidebar separation',
            },
            {
              name: 'Bottom',
              class: 'border-b-2',
              description: 'Footer separation',
            },
            {
              name: 'Left',
              class: 'border-l-2',
              description: 'Content separation',
            },
            {
              name: 'Horizontal',
              class: 'border-y-2',
              description: 'Top and bottom',
            },
            {
              name: 'Vertical',
              class: 'border-x-2',
              description: 'Left and right',
            },
          ].map(direction => (
            <div key={direction.name} className="text-center">
              <div
                className={`w-20 h-20 bg-card mx-auto mb-2 rounded-lg ${direction.class} border-primary`}
              ></div>
              <p className="text-sm font-medium">{direction.name}</p>
              <p className="text-xs text-muted-foreground">{direction.class}</p>
              <p className="text-xs text-muted-foreground">
                {direction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const DirectionalRadius: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Directional Border Radius</h2>
        <p className="text-muted-foreground mb-6">
          Apply border radius to specific corners for layout components.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Top', class: 'rounded-t-lg', description: 'Top corners' },
            {
              name: 'Right',
              class: 'rounded-r-lg',
              description: 'Right corners',
            },
            {
              name: 'Bottom',
              class: 'rounded-b-lg',
              description: 'Bottom corners',
            },
            {
              name: 'Left',
              class: 'rounded-l-lg',
              description: 'Left corners',
            },
            {
              name: 'Top Left',
              class: 'rounded-tl-lg',
              description: 'Single corner',
            },
            {
              name: 'Top Right',
              class: 'rounded-tr-lg',
              description: 'Single corner',
            },
            {
              name: 'Bottom Right',
              class: 'rounded-br-lg',
              description: 'Single corner',
            },
            {
              name: 'Bottom Left',
              class: 'rounded-bl-lg',
              description: 'Single corner',
            },
          ].map(radius => (
            <div key={radius.name} className="text-center">
              <div
                className={`w-20 h-20 bg-primary mx-auto mb-2 ${radius.class}`}
              ></div>
              <p className="text-sm font-medium">{radius.name}</p>
              <p className="text-xs text-muted-foreground">{radius.class}</p>
              <p className="text-xs text-muted-foreground">
                {radius.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const CommonPatterns: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Common Border Patterns</h2>
        <p className="text-muted-foreground mb-6">
          Frequently used border combinations in the Circuit AI Assistant
          interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cards and Containers */}
          <div>
            <h3 className="mb-4">Cards & Containers</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-card">
                <p className="font-medium mb-1">Default Card</p>
                <p className="text-sm text-muted-foreground">
                  border rounded-lg
                </p>
              </div>

              <div className="border-2 border-primary rounded-lg p-4 bg-card">
                <p className="font-medium mb-1">Emphasized Card</p>
                <p className="text-sm text-muted-foreground">
                  border-2 border-primary rounded-lg
                </p>
              </div>

              <div className="border border-dashed rounded-lg p-4 bg-muted">
                <p className="font-medium mb-1">Draft/Placeholder Card</p>
                <p className="text-sm text-muted-foreground">
                  border border-dashed rounded-lg
                </p>
              </div>

              <div className="border-l-4 border-primary bg-card p-4 rounded-r-lg">
                <p className="font-medium mb-1">Accent Border Card</p>
                <p className="text-sm text-muted-foreground">
                  border-l-4 border-primary rounded-r-lg
                </p>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className="mb-4">Form Elements</h3>
            <div className="space-y-4">
              <div className="border border-input rounded-md p-3 bg-background">
                <p className="text-sm">Default Input</p>
                <p className="text-xs text-muted-foreground mt-1">
                  border border-input rounded-md
                </p>
              </div>

              <div className="border-2 border-primary rounded-md p-3 bg-background">
                <p className="text-sm">Focused Input</p>
                <p className="text-xs text-muted-foreground mt-1">
                  border-2 border-primary rounded-md
                </p>
              </div>

              <div className="border-2 border-destructive rounded-md p-3 bg-background">
                <p className="text-sm">Error Input</p>
                <p className="text-xs text-muted-foreground mt-1">
                  border-2 border-destructive rounded-md
                </p>
              </div>

              <div className="border-2 border-green-500 rounded-md p-3 bg-background">
                <p className="text-sm">Success Input</p>
                <p className="text-xs text-muted-foreground mt-1">
                  border-2 border-green-500 rounded-md
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CircuitBorderExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Circuit AI Border Usage</h2>
        <p className="text-muted-foreground mb-6">
          Real-world examples of border usage in Circuit AI Assistant
          components.
        </p>

        <div className="space-y-8">
          {/* Component Card with Status Borders */}
          <div>
            <h3 className="mb-4">Component Status Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-4 border-green-500 bg-card rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-medium">LM358 Op-Amp</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Operating normally
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Success state with green accent border
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-card rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <h4 className="font-medium">Power Supply</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  High temperature
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Warning state with yellow accent border
                </p>
              </div>

              <div className="border-l-4 border-destructive bg-card rounded-r-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <h4 className="font-medium">Microcontroller</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connection failed
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Error state with red accent border
                </p>
              </div>
            </div>
          </div>

          {/* Circuit Diagram Borders */}
          <div>
            <h3 className="mb-4">Circuit Diagram Elements</h3>
            <div className="bg-muted p-6 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="border-2 border-primary rounded-lg p-4 bg-card text-center">
                  <div className="w-8 h-8 border border-foreground rounded mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Resistor</p>
                  <p className="text-xs text-muted-foreground">
                    Selected component
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-card text-center opacity-60">
                  <div className="w-8 h-8 border border-foreground rounded mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Capacitor</p>
                  <p className="text-xs text-muted-foreground">
                    Available component
                  </p>
                </div>

                <div className="border border-dashed border-muted-foreground rounded-lg p-4 bg-muted text-center">
                  <div className="w-8 h-8 border border-dashed border-muted-foreground rounded mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Drop Zone</p>
                  <p className="text-xs text-muted-foreground">
                    Placeholder area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Layout */}
          <div>
            <h3 className="mb-4">Navigation & Layout</h3>
            <div className="border rounded-lg overflow-hidden bg-card">
              <div className="border-b bg-muted p-3">
                <h4 className="font-medium">Circuit Properties</h4>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">
                    Supply Voltage:
                  </span>
                  <span className="text-sm">5V</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">
                    Frequency:
                  </span>
                  <span className="text-sm">1kHz</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-muted-foreground">
                    Components:
                  </span>
                  <span className="text-sm">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
