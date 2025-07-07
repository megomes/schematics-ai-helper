import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Spacing system for the Circuit AI Assistant using an 8-point grid. Consistent spacing creates visual harmony and improves readability.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Spacing Scale (8pt Grid System)</h2>
        <p className="text-muted-foreground mb-6">
          All spacing values are based on multiples of 4px (0.25rem) following
          the 8-point grid system.
        </p>

        <div className="space-y-4">
          {[
            { value: '0', px: '0px', class: 'p-0' },
            { value: '1', px: '4px', class: 'p-1' },
            { value: '2', px: '8px', class: 'p-2' },
            { value: '3', px: '12px', class: 'p-3' },
            { value: '4', px: '16px', class: 'p-4' },
            { value: '5', px: '20px', class: 'p-5' },
            { value: '6', px: '24px', class: 'p-6' },
            { value: '8', px: '32px', class: 'p-8' },
            { value: '10', px: '40px', class: 'p-10' },
            { value: '12', px: '48px', class: 'p-12' },
            { value: '16', px: '64px', class: 'p-16' },
            { value: '20', px: '80px', class: 'p-20' },
            { value: '24', px: '96px', class: 'p-24' },
          ].map(space => (
            <div key={space.value} className="flex items-center gap-4">
              <div className="w-16 text-sm font-mono">{space.value}</div>
              <div className="w-20 text-sm text-muted-foreground">
                {space.px}
              </div>
              <div className="w-24 text-sm font-mono text-primary">
                {space.class}
              </div>
              <div className="bg-primary/20 border border-primary">
                <div className={`bg-primary w-4 h-4 ${space.class}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const PaddingExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Padding Examples</h2>
        <p className="text-muted-foreground mb-6">
          Padding creates internal spacing within components and containers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* All sides */}
          <div>
            <h3 className="mb-3">All Sides (p-*)</h3>
            <div className="space-y-3">
              <div className="bg-muted border">
                <div className="p-2 bg-primary/20 border border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">p-2 (8px)</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="p-4 bg-primary/20 border border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">p-4 (16px)</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="p-6 bg-primary/20 border border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">p-6 (24px)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal */}
          <div>
            <h3 className="mb-3">Horizontal (px-*)</h3>
            <div className="space-y-3">
              <div className="bg-muted border">
                <div className="px-2 bg-primary/20 border-x border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">px-2</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="px-4 bg-primary/20 border-x border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">px-4</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="px-6 bg-primary/20 border-x border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">px-6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical */}
          <div>
            <h3 className="mb-3">Vertical (py-*)</h3>
            <div className="space-y-3">
              <div className="bg-muted border">
                <div className="py-2 bg-primary/20 border-y border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">py-2</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="py-4 bg-primary/20 border-y border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">py-4</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="py-6 bg-primary/20 border-y border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">py-6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Individual sides */}
          <div>
            <h3 className="mb-3">Individual Sides</h3>
            <div className="space-y-3">
              <div className="bg-muted border">
                <div className="pt-4 bg-primary/20 border-t border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">pt-4 (top)</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="pr-4 bg-primary/20 border-r border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">pr-4 (right)</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="pb-4 bg-primary/20 border-b border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">pb-4 (bottom)</div>
                </div>
              </div>
              <div className="bg-muted border">
                <div className="pl-4 bg-primary/20 border-l border-primary border-dashed">
                  <div className="bg-card p-2 text-sm">pl-4 (left)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const MarginExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Margin Examples</h2>
        <p className="text-muted-foreground mb-6">
          Margins create external spacing between components and elements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* All sides */}
          <div>
            <h3 className="mb-3">All Sides (m-*)</h3>
            <div className="bg-muted p-4 border">
              <div className="space-y-0">
                <div className="m-2 bg-primary p-2 text-primary-foreground text-sm">
                  m-2
                </div>
                <div className="m-4 bg-primary p-2 text-primary-foreground text-sm">
                  m-4
                </div>
                <div className="m-6 bg-primary p-2 text-primary-foreground text-sm">
                  m-6
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal */}
          <div>
            <h3 className="mb-3">Horizontal (mx-*)</h3>
            <div className="bg-muted p-4 border">
              <div className="mx-2 bg-primary p-2 text-primary-foreground text-sm mb-2">
                mx-2
              </div>
              <div className="mx-4 bg-primary p-2 text-primary-foreground text-sm mb-2">
                mx-4
              </div>
              <div className="mx-6 bg-primary p-2 text-primary-foreground text-sm">
                mx-6
              </div>
            </div>
          </div>

          {/* Vertical */}
          <div>
            <h3 className="mb-3">Vertical (my-*)</h3>
            <div className="bg-muted p-4 border">
              <div className="my-2 bg-primary p-2 text-primary-foreground text-sm">
                my-2
              </div>
              <div className="my-4 bg-primary p-2 text-primary-foreground text-sm">
                my-4
              </div>
              <div className="my-6 bg-primary p-2 text-primary-foreground text-sm">
                my-6
              </div>
            </div>
          </div>

          {/* Auto centering */}
          <div>
            <h3 className="mb-3">Auto Centering</h3>
            <div className="bg-muted p-4 border">
              <div className="mx-auto w-32 bg-primary p-2 text-primary-foreground text-sm text-center">
                mx-auto
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const GapExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Gap Examples (Flexbox & Grid)</h2>
        <p className="text-muted-foreground mb-6">
          Gap properties create consistent spacing between flex and grid items.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flexbox gaps */}
          <div>
            <h3 className="mb-4">Flexbox Gap</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  gap-2 (8px)
                </p>
                <div className="flex gap-2 bg-muted p-3 border">
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 1
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 2
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 3
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  gap-4 (16px)
                </p>
                <div className="flex gap-4 bg-muted p-3 border">
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 1
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 2
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 3
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  gap-6 (24px)
                </p>
                <div className="flex gap-6 bg-muted p-3 border">
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 1
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 2
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm">
                    Item 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid gaps */}
          <div>
            <h3 className="mb-4">Grid Gap</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  gap-2 (8px)
                </p>
                <div className="grid grid-cols-3 gap-2 bg-muted p-3 border">
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    1
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    2
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    3
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    4
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    5
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    6
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  gap-4 (16px)
                </p>
                <div className="grid grid-cols-3 gap-4 bg-muted p-3 border">
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    1
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    2
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    3
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    4
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    5
                  </div>
                  <div className="bg-primary p-2 text-primary-foreground text-sm text-center">
                    6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Responsive Spacing</h2>
        <p className="text-muted-foreground mb-6">
          Spacing can be adjusted across different screen sizes using responsive
          prefixes.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">Responsive Padding</h3>
            <p className="text-sm text-muted-foreground mb-3">
              This container has p-2 on mobile, p-4 on tablet, and p-8 on
              desktop.
            </p>
            <div className="p-2 md:p-4 lg:p-8 bg-primary/20 border border-primary border-dashed">
              <div className="bg-card p-4">
                <code className="text-sm">p-2 md:p-4 lg:p-8</code>
                <p className="text-sm mt-2">
                  Resize your browser to see the spacing change!
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3">Responsive Grid Gap</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Gap increases from 2 (mobile) to 4 (tablet) to 6 (desktop).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 bg-muted p-4 border">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="bg-primary p-3 text-primary-foreground text-sm text-center"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <code className="text-sm text-muted-foreground">
              gap-2 md:gap-4 lg:gap-6
            </code>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ContainerSystem: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Container System</h2>
        <p className="text-muted-foreground mb-6">
          Containers provide consistent max-widths and responsive behavior
          across different screen sizes.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">Standard Container</h3>
            <div className="bg-muted border">
              <div className="container mx-auto p-4 bg-primary/10 border border-primary border-dashed">
                <p className="text-sm">
                  <code>container mx-auto</code>
                </p>
                <p className="text-sm text-muted-foreground">
                  Automatically responsive with max-width: 1400px on 2xl screens
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3">Max-Width Classes</h3>
            <div className="space-y-4">
              {[
                { class: 'max-w-sm', description: '384px (24rem)' },
                { class: 'max-w-md', description: '448px (28rem)' },
                { class: 'max-w-lg', description: '512px (32rem)' },
                { class: 'max-w-xl', description: '576px (36rem)' },
                { class: 'max-w-2xl', description: '672px (42rem)' },
                { class: 'max-w-4xl', description: '896px (56rem)' },
                { class: 'max-w-6xl', description: '1152px (72rem)' },
              ].map(item => (
                <div key={item.class} className="bg-muted border">
                  <div
                    className={`${item.class} mx-auto p-3 bg-primary/10 border border-primary border-dashed`}
                  >
                    <p className="text-sm">
                      <code>{item.class}</code> - {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CircuitSpacingExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Circuit AI Spacing Examples</h2>
        <p className="text-muted-foreground mb-6">
          Practical examples of spacing usage in Circuit AI Assistant
          components.
        </p>

        <div className="space-y-8">
          {/* Component Card */}
          <div>
            <h3 className="mb-4">Component Card Spacing</h3>
            <div className="max-w-md bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-yellow-950">
                  ⚡
                </div>
                <div>
                  <h4 className="font-semibold">LM358 Op-Amp</h4>
                  <p className="text-sm text-muted-foreground">
                    Dual operational amplifier
                  </p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Supply Voltage:</span>
                  <span>±15V</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Package:</span>
                  <span>DIP-8</span>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                Add to Circuit
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Uses p-6 for card padding, gap-3 for icon+text, space-y-2 for
              specs, mb-4 for sections
            </p>
          </div>

          {/* Form Layout */}
          <div>
            <h3 className="mb-4">Form Layout Spacing</h3>
            <div className="max-w-md bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Circuit Configuration</h4>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="supply-voltage"
                    className="block text-sm font-medium mb-2"
                  >
                    Supply Voltage
                  </label>
                  <input
                    id="supply-voltage"
                    type="text"
                    placeholder="5V"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="frequency"
                    className="block text-sm font-medium mb-2"
                  >
                    Frequency
                  </label>
                  <input
                    id="frequency"
                    type="text"
                    placeholder="1kHz"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm">
                    Cancel
                  </button>
                  <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Uses space-y-4 for form fields, mb-2 for labels, gap-3 for button
              group, px-3 py-2 for inputs
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};
