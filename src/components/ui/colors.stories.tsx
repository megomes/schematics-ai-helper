import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Color system for the Circuit AI Assistant using CSS custom properties. Dark mode optimized with semantic color tokens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">CSS Custom Properties</h2>
        <p className="text-muted-foreground mb-6">
          All colors use CSS custom properties (CSS variables) for consistent
          theming and dark mode support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: 'Background',
              token: '--background',
              class: 'bg-background text-foreground',
              usage: 'Main app background',
            },
            {
              name: 'Foreground',
              token: '--foreground',
              class: 'bg-foreground text-background',
              usage: 'Primary text color',
            },
            {
              name: 'Card',
              token: '--card',
              class: 'bg-card text-card-foreground',
              usage: 'Card backgrounds',
            },
            {
              name: 'Primary',
              token: '--primary',
              class: 'bg-primary text-primary-foreground',
              usage: 'Primary actions, links',
            },
            {
              name: 'Secondary',
              token: '--secondary',
              class: 'bg-secondary text-secondary-foreground',
              usage: 'Secondary buttons, surfaces',
            },
            {
              name: 'Muted',
              token: '--muted',
              class: 'bg-muted text-muted-foreground',
              usage: 'Subtle backgrounds',
            },
            {
              name: 'Accent',
              token: '--accent',
              class: 'bg-accent text-accent-foreground',
              usage: 'Highlighted elements',
            },
            {
              name: 'Destructive',
              token: '--destructive',
              class: 'bg-destructive text-destructive-foreground',
              usage: 'Errors, warnings',
            },
            {
              name: 'Border',
              token: '--border',
              class: 'bg-border text-foreground',
              usage: 'Element borders',
            },
          ].map(color => (
            <div key={color.name} className="border rounded-lg overflow-hidden">
              <div
                className={`${color.class} p-4 h-24 flex items-center justify-center`}
              >
                <span className="font-medium">{color.name}</span>
              </div>
              <div className="p-3 bg-card">
                <p className="text-sm font-mono text-muted-foreground">
                  {color.token}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Semantic Colors</h2>
        <p className="text-muted-foreground mb-6">
          Colors with specific meanings for different states and contexts in the
          Circuit AI Assistant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status Colors */}
          <div>
            <h3 className="mb-4">Status Colors</h3>
            <div className="space-y-3">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-green-500 text-white p-3 flex items-center justify-between">
                  <span className="font-medium">Success</span>
                  <code className="text-xs opacity-90">text-green-500</code>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Circuit simulation completed successfully
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-yellow-500 text-yellow-950 p-3 flex items-center justify-between">
                  <span className="font-medium">Warning</span>
                  <code className="text-xs opacity-70">text-yellow-500</code>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950">
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Component operating near maximum ratings
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-destructive text-destructive-foreground p-3 flex items-center justify-between">
                  <span className="font-medium">Error</span>
                  <code className="text-xs opacity-90">bg-destructive</code>
                </div>
                <div className="p-3 bg-destructive/10">
                  <p className="text-sm text-destructive">
                    Short circuit detected in power supply
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-500 text-white p-3 flex items-center justify-between">
                  <span className="font-medium">Info</span>
                  <code className="text-xs opacity-90">text-blue-500</code>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    AI analysis complete - 15 components optimized
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Circuit Colors */}
          <div>
            <h3 className="mb-4">Circuit Element Colors</h3>
            <div className="space-y-3">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-red-500 text-white p-3 flex items-center justify-between">
                  <span className="font-medium">Power/Voltage</span>
                  <code className="text-xs opacity-90">text-red-500</code>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    VCC, power rails, voltage sources
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-500 text-white p-3 flex items-center justify-between">
                  <span className="font-medium">Ground/Return</span>
                  <code className="text-xs opacity-90">text-blue-500</code>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    GND, ground connections, return paths
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-purple-500 text-white p-3 flex items-center justify-between">
                  <span className="font-medium">Digital Signals</span>
                  <code className="text-xs opacity-90">text-purple-500</code>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950">
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Clock, data, control signals
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-orange-500 text-white p-3 flex items-center justify-between">
                  <span className="font-medium">Analog Signals</span>
                  <code className="text-xs opacity-90">text-orange-500</code>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-950">
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Audio, sensor inputs, analog processing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Text Color Usage</h2>
        <p className="text-muted-foreground mb-6">
          Proper text color hierarchy for readability and emphasis in the
          Circuit AI interface.
        </p>

        <div className="space-y-6">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-foreground mb-4">Text Hierarchy Example</h3>

            <div className="space-y-4">
              <p className="text-foreground text-lg">
                <strong>Primary text (foreground)</strong> - Main content,
                headings, important information
              </p>

              <p className="text-muted-foreground">
                <strong>Secondary text (muted-foreground)</strong> -
                Descriptions, captions, helper text
              </p>

              <p className="text-primary">
                <strong>Primary accent</strong> - Links, interactive elements,
                brand colors
              </p>

              <p className="text-destructive">
                <strong>Error text</strong> - Error messages, validation
                feedback, warnings
              </p>

              <p className="text-green-600 dark:text-green-400">
                <strong>Success text</strong> - Confirmation messages, positive
                feedback
              </p>

              <p className="text-yellow-600 dark:text-yellow-400">
                <strong>Warning text</strong> - Caution messages, non-critical
                alerts
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="mb-4">Code and Technical Text</h3>

            <div className="space-y-3">
              <p>
                Regular text with{' '}
                <code className="bg-muted px-2 py-1 rounded text-foreground font-mono">
                  inline code
                </code>{' '}
                highlighting
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <code className="text-foreground font-mono text-sm">
                  digitalWrite(LED_PIN, HIGH);
                  <br />
                  delay(1000);
                  <br />
                  digitalWrite(LED_PIN, LOW);
                </code>
              </div>

              <p className="text-sm text-muted-foreground">
                Technical specifications often use{' '}
                <span className="text-primary font-mono">5V</span>,
                <span className="text-primary font-mono">3.3V</span>, or
                <span className="text-primary font-mono">1.8V</span> values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Background Colors</h2>
        <p className="text-muted-foreground mb-6">
          Background color usage for different interface elements and states.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Surface Backgrounds */}
          <div>
            <h3 className="mb-4">Surface Backgrounds</h3>
            <div className="space-y-3">
              <div className="bg-background border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Background</p>
                <p className="text-xs text-muted-foreground">
                  Main application background
                </p>
                <code className="text-xs text-muted-foreground">
                  bg-background
                </code>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Card</p>
                <p className="text-xs text-muted-foreground">
                  Component cards, modals, panels
                </p>
                <code className="text-xs text-muted-foreground">bg-card</code>
              </div>

              <div className="bg-muted border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Muted</p>
                <p className="text-xs text-muted-foreground">
                  Subtle backgrounds, disabled states
                </p>
                <code className="text-xs text-muted-foreground">bg-muted</code>
              </div>

              <div className="bg-secondary border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Secondary</p>
                <p className="text-xs text-muted-foreground">
                  Secondary buttons, alternative surfaces
                </p>
                <code className="text-xs text-muted-foreground">
                  bg-secondary
                </code>
              </div>
            </div>
          </div>

          {/* Interactive Backgrounds */}
          <div>
            <h3 className="mb-4">Interactive Backgrounds</h3>
            <div className="space-y-3">
              <div className="bg-primary text-primary-foreground border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Primary</p>
                <p className="text-xs opacity-90">
                  Primary buttons, active states
                </p>
                <code className="text-xs opacity-90">bg-primary</code>
              </div>

              <div className="bg-destructive text-destructive-foreground border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Destructive</p>
                <p className="text-xs opacity-90">
                  Delete buttons, error states
                </p>
                <code className="text-xs opacity-90">bg-destructive</code>
              </div>

              <div className="bg-green-500 text-white border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Success</p>
                <p className="text-xs opacity-90">
                  Success messages, positive actions
                </p>
                <code className="text-xs opacity-90">bg-green-500</code>
              </div>

              <div className="bg-yellow-500 text-yellow-950 border p-4 rounded-lg">
                <p className="text-sm font-medium mb-1">Warning</p>
                <p className="text-xs opacity-70">
                  Warning messages, caution states
                </p>
                <code className="text-xs opacity-70">bg-yellow-500</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorUtilities: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Color Utilities</h2>
        <p className="text-muted-foreground mb-6">
          Utility classes for opacity, hover states, and color modifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Opacity */}
          <div>
            <h3 className="mb-4">Opacity Variants</h3>
            <div className="space-y-3">
              {[10, 20, 30, 50, 70, 90].map(opacity => (
                <div key={opacity} className="flex items-center gap-4">
                  <div
                    className={`w-16 h-8 bg-primary/${opacity} border rounded`}
                  ></div>
                  <code className="text-sm">bg-primary/{opacity}</code>
                  <span className="text-sm text-muted-foreground">
                    {opacity}% opacity
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hover States */}
          <div>
            <h3 className="mb-4">Hover States</h3>
            <div className="space-y-3">
              <button className="w-full p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Primary Button (hover:bg-primary/90)
              </button>

              <button className="w-full p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                Secondary Button (hover:bg-secondary/80)
              </button>

              <button className="w-full p-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                Outline Button (hover:bg-accent)
              </button>

              <div className="p-3 bg-card border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                Hover Card (hover:bg-muted)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityCompliance: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Accessibility & Contrast</h2>
        <p className="text-muted-foreground mb-6">
          All color combinations meet WCAG 2.1 AA contrast requirements for
          accessibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contrast Examples */}
          <div>
            <h3 className="mb-4">Contrast Ratios</h3>
            <div className="space-y-3">
              <div className="bg-background text-foreground border p-4 rounded-lg">
                <p className="font-medium">Normal Text on Background</p>
                <p className="text-sm text-muted-foreground">
                  Contrast Ratio: ~14:1 (AAA)
                </p>
              </div>

              <div className="bg-primary text-primary-foreground border p-4 rounded-lg">
                <p className="font-medium">White Text on Primary</p>
                <p className="text-sm opacity-90">Contrast Ratio: ~7:1 (AA)</p>
              </div>

              <div className="bg-muted text-muted-foreground border p-4 rounded-lg">
                <p className="font-medium">Muted Text on Muted Background</p>
                <p className="text-sm">Contrast Ratio: ~4.5:1 (AA)</p>
              </div>

              <div className="bg-destructive text-destructive-foreground border p-4 rounded-lg">
                <p className="font-medium">Error Text on Destructive</p>
                <p className="text-sm opacity-90">Contrast Ratio: ~6:1 (AA)</p>
              </div>
            </div>
          </div>

          {/* Color Blind Testing */}
          <div>
            <h3 className="mb-4">Color Independence</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interface elements should be distinguishable without relying
              solely on color.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Success: Uses icon + color + border
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="w-4 h-4 bg-yellow-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-1 bg-yellow-900 dark:bg-yellow-100"></div>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Warning: Uses shape + color + border
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="w-4 h-4 bg-red-500 flex items-center justify-center">
                  <div className="w-2 h-2 border border-white rotate-45"></div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Error: Uses symbol + color + border
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
