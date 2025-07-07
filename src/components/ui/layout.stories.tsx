import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Grid and layout system for the Circuit AI Assistant. Responsive layouts using CSS Grid and Flexbox for structured component organization.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GridSystem: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="mb-4">CSS Grid System</h2>
        <p className="text-muted-foreground mb-6">
          Responsive grid layouts using CSS Grid with 12-column system and
          flexible configurations.
        </p>

        <div className="space-y-8">
          {/* 12 Column Grid */}
          <div>
            <h3 className="mb-4">12-Column Grid</h3>
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="bg-primary/20 border border-primary p-2 text-center text-xs"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              grid-cols-12 gap-4
            </p>
          </div>

          {/* Common Grid Layouts */}
          <div>
            <h3 className="mb-4">Common Layouts</h3>
            <div className="space-y-6">
              {/* 6 columns */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  6 Columns (grid-cols-6)
                </p>
                <div className="grid grid-cols-6 gap-3">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={i}
                      className="bg-card border p-3 text-center text-sm"
                    >
                      Col {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 columns */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  4 Columns (grid-cols-4)
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i}
                      className="bg-card border p-3 text-center text-sm"
                    >
                      Column {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 columns */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  3 Columns (grid-cols-3)
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="bg-card border p-4 text-center">
                      Section {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 columns */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  2 Columns (grid-cols-2)
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border p-4">
                    <h4 className="font-medium">Left Panel</h4>
                    <p className="text-sm text-muted-foreground">
                      Main content area
                    </p>
                  </div>
                  <div className="bg-card border p-4">
                    <h4 className="font-medium">Right Panel</h4>
                    <p className="text-sm text-muted-foreground">
                      Sidebar content
                    </p>
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

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="mb-4">Responsive Grid Layouts</h2>
        <p className="text-muted-foreground mb-6">
          Grid layouts that adapt to different screen sizes using responsive
          prefixes.
        </p>

        <div className="space-y-8">
          {/* Responsive Example 1 */}
          <div>
            <h3 className="mb-4">Component Cards</h3>
            <p className="text-sm text-muted-foreground mb-4">
              1 column on mobile, 2 on tablet, 3 on desktop:{' '}
              <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card border p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-yellow-950 text-xs font-bold">
                    Op
                  </div>
                  <h4 className="font-medium">LM358 Op-Amp</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dual operational amplifier
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    μC
                  </div>
                  <h4 className="font-medium">Arduino Uno</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  ATmega328P microcontroller
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    R
                  </div>
                  <h4 className="font-medium">10kΩ Resistor</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Carbon film resistor
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                  <h4 className="font-medium">100μF Capacitor</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Electrolytic capacitor
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    L
                  </div>
                  <h4 className="font-medium">LED</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Light emitting diode
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <h4 className="font-medium">Switch</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  SPDT toggle switch
                </p>
              </div>
            </div>
          </div>

          {/* Responsive Example 2 */}
          <div>
            <h3 className="mb-4">Dashboard Layout</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Full width on mobile, 4 columns on desktop:{' '}
              <code>grid-cols-1 lg:grid-cols-4</code>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="bg-card border p-4 rounded-lg">
                <h4 className="font-medium mb-2">Components</h4>
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">
                  Active components
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <h4 className="font-medium mb-2">Circuits</h4>
                <p className="text-2xl font-bold text-green-500">8</p>
                <p className="text-sm text-muted-foreground">
                  Completed designs
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <h4 className="font-medium mb-2">Simulations</h4>
                <p className="text-2xl font-bold text-blue-500">156</p>
                <p className="text-sm text-muted-foreground">Total runs</p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <h4 className="font-medium mb-2">Errors</h4>
                <p className="text-2xl font-bold text-destructive">2</p>
                <p className="text-sm text-muted-foreground">Need attention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FlexboxLayouts: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="mb-4">Flexbox Layouts</h2>
        <p className="text-muted-foreground mb-6">
          Flexible layouts using CSS Flexbox for component alignment and
          distribution.
        </p>

        <div className="space-y-8">
          {/* Horizontal Layouts */}
          <div>
            <h3 className="mb-4">Horizontal Layouts</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Space Between (justify-between)
                </p>
                <div className="flex justify-between items-center bg-card border p-4 rounded-lg">
                  <span className="text-sm">Left Content</span>
                  <span className="text-sm">Right Content</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Center Aligned (justify-center)
                </p>
                <div className="flex justify-center items-center bg-card border p-4 rounded-lg">
                  <span className="text-sm">Centered Content</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Space Around (justify-around)
                </p>
                <div className="flex justify-around items-center bg-card border p-4 rounded-lg">
                  <span className="text-sm">Item 1</span>
                  <span className="text-sm">Item 2</span>
                  <span className="text-sm">Item 3</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  With Gaps (gap-4)
                </p>
                <div className="flex items-center gap-4 bg-card border p-4 rounded-lg">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">
                    Tag 1
                  </div>
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">
                    Tag 2
                  </div>
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">
                    Tag 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Layouts */}
          <div>
            <h3 className="mb-4">Vertical Layouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Flex Column (flex-col)
                </p>
                <div className="flex flex-col gap-3 bg-card border p-4 rounded-lg h-48">
                  <div className="bg-muted p-2 rounded text-sm">Header</div>
                  <div className="bg-muted p-2 rounded text-sm flex-1">
                    Content (flex-1)
                  </div>
                  <div className="bg-muted p-2 rounded text-sm">Footer</div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Center Vertical (justify-center)
                </p>
                <div className="flex flex-col justify-center items-center bg-card border p-4 rounded-lg h-48">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded">
                    Centered
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Space Between Vertical
                </p>
                <div className="flex flex-col justify-between bg-card border p-4 rounded-lg h-48">
                  <div className="bg-muted p-2 rounded text-sm">Top</div>
                  <div className="bg-muted p-2 rounded text-sm">Bottom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ComponentLayouts: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="mb-4">Component Layout Patterns</h2>
        <p className="text-muted-foreground mb-6">
          Common layout patterns used in Circuit AI Assistant components.
        </p>

        <div className="space-y-8">
          {/* Header Layout */}
          <div>
            <h3 className="mb-4">Header with Actions</h3>
            <div className="bg-card border rounded-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold">Circuit Analysis</h4>
                  <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
                    Complete
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-sm border rounded hover:bg-accent">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">
                    Export
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Analysis completed successfully with no errors detected.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Layout */}
          <div>
            <h3 className="mb-4">Sidebar Layout</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-64">
              <div className="lg:col-span-1 bg-card border rounded-lg p-4">
                <h4 className="font-medium mb-3">Components</h4>
                <div className="space-y-2">
                  <div className="text-sm p-2 rounded bg-muted">Op-Amps</div>
                  <div className="text-sm p-2 rounded hover:bg-muted cursor-pointer">
                    Resistors
                  </div>
                  <div className="text-sm p-2 rounded hover:bg-muted cursor-pointer">
                    Capacitors
                  </div>
                  <div className="text-sm p-2 rounded hover:bg-muted cursor-pointer">
                    Microcontrollers
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 bg-card border rounded-lg p-4">
                <h4 className="font-medium mb-3">Circuit Canvas</h4>
                <div className="bg-muted rounded h-full flex items-center justify-center">
                  <p className="text-muted-foreground">Circuit design area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Grid */}
          <div>
            <h3 className="mb-4">Card Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Power Supply</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Voltage:</span>
                    <span>5V</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current:</span>
                    <span>2.1A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temperature:</span>
                    <span>42°C</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Microcontroller</h4>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model:</span>
                    <span>ATmega328P</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Clock:</span>
                    <span>16MHz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RAM:</span>
                    <span>2KB</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Sensors</h4>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temperature:</span>
                    <span>DS18B20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Humidity:</span>
                    <span>DHT22</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pressure:</span>
                    <span>BMP280</span>
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

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="mb-4">Responsive Breakpoints</h2>
        <p className="text-muted-foreground mb-6">
          Tailwind CSS responsive breakpoints for different screen sizes.
        </p>

        <div className="space-y-6">
          {/* Breakpoint Guide */}
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-medium">Breakpoint Reference</h3>
            </div>
            <div className="divide-y">
              {[
                {
                  prefix: 'sm:',
                  screen: 'min-width: 640px',
                  description: 'Small devices (landscape phones)',
                },
                {
                  prefix: 'md:',
                  screen: 'min-width: 768px',
                  description: 'Medium devices (tablets)',
                },
                {
                  prefix: 'lg:',
                  screen: 'min-width: 1024px',
                  description: 'Large devices (desktops)',
                },
                {
                  prefix: 'xl:',
                  screen: 'min-width: 1280px',
                  description: 'Extra large devices',
                },
                {
                  prefix: '2xl:',
                  screen: 'min-width: 1536px',
                  description: '2X large devices',
                },
              ].map(bp => (
                <div
                  key={bp.prefix}
                  className="p-4 flex items-center justify-between"
                >
                  <div>
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {bp.prefix}
                    </code>
                    <p className="text-sm text-muted-foreground mt-1">
                      {bp.description}
                    </p>
                  </div>
                  <code className="text-sm text-muted-foreground">
                    {bp.screen}
                  </code>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Demo */}
          <div>
            <h3 className="mb-4">Responsive Layout Demo</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Resize your browser to see the layout change across breakpoints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="bg-card border p-4 rounded-lg">
                <div className="block sm:hidden text-sm text-center">
                  📱 Mobile
                </div>
                <div className="hidden sm:block lg:hidden text-sm text-center">
                  📟 Tablet
                </div>
                <div className="hidden lg:block xl:hidden text-sm text-center">
                  💻 Desktop
                </div>
                <div className="hidden xl:block text-sm text-center">
                  🖥️ Large
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Responsive Card 1
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="block sm:hidden text-sm text-center">
                  📱 Mobile
                </div>
                <div className="hidden sm:block lg:hidden text-sm text-center">
                  📟 Tablet
                </div>
                <div className="hidden lg:block xl:hidden text-sm text-center">
                  💻 Desktop
                </div>
                <div className="hidden xl:block text-sm text-center">
                  🖥️ Large
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Responsive Card 2
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="block sm:hidden text-sm text-center">
                  📱 Mobile
                </div>
                <div className="hidden sm:block lg:hidden text-sm text-center">
                  📟 Tablet
                </div>
                <div className="hidden lg:block xl:hidden text-sm text-center">
                  💻 Desktop
                </div>
                <div className="hidden xl:block text-sm text-center">
                  🖥️ Large
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Responsive Card 3
                </p>
              </div>

              <div className="bg-card border p-4 rounded-lg">
                <div className="block sm:hidden text-sm text-center">
                  📱 Mobile
                </div>
                <div className="hidden sm:block lg:hidden text-sm text-center">
                  📟 Tablet
                </div>
                <div className="hidden lg:block xl:hidden text-sm text-center">
                  💻 Desktop
                </div>
                <div className="hidden xl:block text-sm text-center">
                  🖥️ Large
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Responsive Card 4
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-muted rounded text-sm">
              <code>
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ContainerSizes: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="mb-4">Container Sizes</h2>
        <p className="text-muted-foreground mb-6">
          Maximum width containers for different content types and screen sizes.
        </p>

        <div className="space-y-6">
          {[
            {
              name: 'max-w-sm',
              width: '384px (24rem)',
              usage: 'Small components, mobile cards',
            },
            {
              name: 'max-w-md',
              width: '448px (28rem)',
              usage: 'Form dialogs, notifications',
            },
            {
              name: 'max-w-lg',
              width: '512px (32rem)',
              usage: 'Content cards, modals',
            },
            {
              name: 'max-w-xl',
              width: '576px (36rem)',
              usage: 'Article content, forms',
            },
            {
              name: 'max-w-2xl',
              width: '672px (42rem)',
              usage: 'Reading content, documentation',
            },
            {
              name: 'max-w-4xl',
              width: '896px (56rem)',
              usage: 'Dashboard sections, wide content',
            },
            {
              name: 'max-w-6xl',
              width: '1152px (72rem)',
              usage: 'Full-width sections',
            },
            {
              name: 'max-w-7xl',
              width: '1280px (80rem)',
              usage: 'Extra wide layouts',
            },
          ].map(container => (
            <div key={container.name} className="space-y-2">
              <div className="flex items-center gap-4">
                <code className="text-sm font-mono w-24">{container.name}</code>
                <span className="text-sm text-muted-foreground w-32">
                  {container.width}
                </span>
                <span className="text-sm text-muted-foreground">
                  {container.usage}
                </span>
              </div>
              <div
                className={`${container.name} mx-auto bg-primary/20 border border-primary p-3 rounded text-center text-sm`}
              >
                {container.name} container
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Usage in Circuit AI</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              • <code>max-w-sm</code> - Component property panels
            </li>
            <li>
              • <code>max-w-md</code> - Settings modals, component selectors
            </li>
            <li>
              • <code>max-w-lg</code> - Circuit information cards
            </li>
            <li>
              • <code>max-w-2xl</code> - Documentation content
            </li>
            <li>
              • <code>max-w-4xl</code> - Circuit design canvas
            </li>
            <li>
              • <code>max-w-full</code> - Full application layout
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
