import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Complete overview of all design tokens, CSS variables, and system values used in the Circuit AI Assistant design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h1>Circuit AI Assistant Design System</h1>
        <p className="text-lg text-muted-foreground mt-2 mb-6">
          Complete reference of design tokens, variables, and system
          specifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">🎨 Colors</h3>
            <p className="text-sm text-muted-foreground">
              9 semantic color tokens with CSS variables for dark mode support
            </p>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">📏 Spacing</h3>
            <p className="text-sm text-muted-foreground">
              8-point grid system with 13 spacing values from 0 to 96px
            </p>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">🔤 Typography</h3>
            <p className="text-sm text-muted-foreground">
              Inter font family with 6 heading levels and semantic text styles
            </p>
          </div>

          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-semibold mb-2">📱 Responsive</h3>
            <p className="text-sm text-muted-foreground">
              5 breakpoints from 640px to 1536px for all device sizes
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Color Design Tokens</h2>
        <p className="text-muted-foreground mb-6">
          All color values are stored as CSS custom properties in HSL format for
          optimal dark mode support.
        </p>

        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">CSS Custom Properties</h3>
          </div>
          <div className="divide-y">
            {[
              {
                token: '--background',
                value: '0 0% 6%',
                usage: 'Main application background',
              },
              {
                token: '--foreground',
                value: '210 40% 98%',
                usage: 'Primary text color',
              },
              {
                token: '--card',
                value: '0 0% 10%',
                usage: 'Card and component backgrounds',
              },
              {
                token: '--card-foreground',
                value: '210 40% 98%',
                usage: 'Text on card backgrounds',
              },
              {
                token: '--popover',
                value: '0 0% 10%',
                usage: 'Popover and dropdown backgrounds',
              },
              {
                token: '--popover-foreground',
                value: '210 40% 98%',
                usage: 'Text on popover backgrounds',
              },
              {
                token: '--primary',
                value: '210 40% 98%',
                usage: 'Primary brand color',
              },
              {
                token: '--primary-foreground',
                value: '222.2 47.4% 11.2%',
                usage: 'Text on primary backgrounds',
              },
              {
                token: '--secondary',
                value: '217.2 32.6% 17.5%',
                usage: 'Secondary surfaces',
              },
              {
                token: '--secondary-foreground',
                value: '210 40% 98%',
                usage: 'Text on secondary backgrounds',
              },
              {
                token: '--muted',
                value: '217.2 32.6% 17.5%',
                usage: 'Muted backgrounds',
              },
              {
                token: '--muted-foreground',
                value: '215 20.2% 65.1%',
                usage: 'Muted text color',
              },
              {
                token: '--accent',
                value: '217.2 32.6% 17.5%',
                usage: 'Accent elements',
              },
              {
                token: '--accent-foreground',
                value: '210 40% 98%',
                usage: 'Text on accent backgrounds',
              },
              {
                token: '--destructive',
                value: '0 62.8% 30.6%',
                usage: 'Error and destructive actions',
              },
              {
                token: '--destructive-foreground',
                value: '210 40% 98%',
                usage: 'Text on destructive backgrounds',
              },
              {
                token: '--border',
                value: '0 0% 17.5%',
                usage: 'Default border color',
              },
              {
                token: '--input',
                value: '217.2 32.6% 17.5%',
                usage: 'Input field borders',
              },
              {
                token: '--ring',
                value: '212.7 26.8% 83.9%',
                usage: 'Focus ring color',
              },
            ].map(item => (
              <div key={item.token} className="p-4 flex items-center gap-4">
                <div
                  className="w-12 h-8 rounded border"
                  style={{ backgroundColor: `hsl(${item.value})` }}
                ></div>
                <div className="flex-1">
                  <code className="text-sm font-mono">{item.token}</code>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.usage}
                  </p>
                </div>
                <code className="text-xs text-muted-foreground">
                  {item.value}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SpacingTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Spacing Design Tokens</h2>
        <p className="text-muted-foreground mb-6">
          8-point grid system for consistent spacing throughout the interface.
        </p>

        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">Spacing Scale</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { token: '0', value: '0px', rem: '0rem', usage: 'No spacing' },
                {
                  token: '1',
                  value: '4px',
                  rem: '0.25rem',
                  usage: 'Tight spacing',
                },
                {
                  token: '2',
                  value: '8px',
                  rem: '0.5rem',
                  usage: 'Small spacing',
                },
                {
                  token: '3',
                  value: '12px',
                  rem: '0.75rem',
                  usage: 'Medium-small spacing',
                },
                {
                  token: '4',
                  value: '16px',
                  rem: '1rem',
                  usage: 'Base spacing unit',
                },
                {
                  token: '5',
                  value: '20px',
                  rem: '1.25rem',
                  usage: 'Medium spacing',
                },
                {
                  token: '6',
                  value: '24px',
                  rem: '1.5rem',
                  usage: 'Large spacing',
                },
                {
                  token: '8',
                  value: '32px',
                  rem: '2rem',
                  usage: 'Extra large spacing',
                },
                {
                  token: '10',
                  value: '40px',
                  rem: '2.5rem',
                  usage: 'Section spacing',
                },
                {
                  token: '12',
                  value: '48px',
                  rem: '3rem',
                  usage: 'Large section spacing',
                },
                {
                  token: '16',
                  value: '64px',
                  rem: '4rem',
                  usage: 'Page section spacing',
                },
                {
                  token: '20',
                  value: '80px',
                  rem: '5rem',
                  usage: 'Large page sections',
                },
                {
                  token: '24',
                  value: '96px',
                  rem: '6rem',
                  usage: 'Major layout spacing',
                },
              ].map(item => (
                <div key={item.token} className="flex items-center gap-4">
                  <div className="w-8 text-sm font-mono text-center">
                    {item.token}
                  </div>
                  <div className="w-16 text-xs text-muted-foreground">
                    {item.value}
                  </div>
                  <div className="w-16 text-xs text-muted-foreground">
                    {item.rem}
                  </div>
                  <div className="flex-1 text-sm text-muted-foreground">
                    {item.usage}
                  </div>
                  <div className="w-16">
                    <div
                      className="bg-primary h-4"
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-medium mb-2">Usage Examples</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Component Spacing:</strong>
              <ul className="text-muted-foreground mt-1">
                <li>• p-3, p-4, p-6 for card padding</li>
                <li>• gap-2, gap-4 for flex/grid gaps</li>
                <li>• space-y-2, space-y-4 for vertical rhythm</li>
              </ul>
            </div>
            <div>
              <strong>Layout Spacing:</strong>
              <ul className="text-muted-foreground mt-1">
                <li>• my-8, my-12 for section separation</li>
                <li>• px-4, px-6 for container padding</li>
                <li>• mx-auto for horizontal centering</li>
              </ul>
            </div>
            <div>
              <strong>Circuit AI Usage:</strong>
              <ul className="text-muted-foreground mt-1">
                <li>• p-4 for component cards</li>
                <li>• gap-3 for component grids</li>
                <li>• space-y-6 for form sections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const TypographyTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Typography Design Tokens</h2>
        <p className="text-muted-foreground mb-6">
          Typography system using Inter font family with consistent scale and
          hierarchy.
        </p>

        <div className="space-y-6">
          {/* Font Family */}
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-medium mb-3">Font Family</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                  font-sans
                </code>
                <span className="text-sm">Inter, system-ui, sans-serif</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Primary font family for all text elements. Inter provides
                excellent readability and modern aesthetic.
              </p>
            </div>
          </div>

          {/* Text Sizes */}
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-medium">Text Size Scale</h3>
            </div>
            <div className="divide-y">
              {[
                {
                  element: 'h1',
                  class: 'text-4xl font-bold',
                  size: '36px',
                  usage: 'Page titles, main headings',
                },
                {
                  element: 'h2',
                  class: 'text-3xl font-semibold',
                  size: '30px',
                  usage: 'Section headings',
                },
                {
                  element: 'h3',
                  class: 'text-2xl font-semibold',
                  size: '24px',
                  usage: 'Subsection headings',
                },
                {
                  element: 'h4',
                  class: 'text-xl font-semibold',
                  size: '20px',
                  usage: 'Component titles',
                },
                {
                  element: 'h5',
                  class: 'text-lg font-medium',
                  size: '18px',
                  usage: 'Small headings',
                },
                {
                  element: 'h6',
                  class: 'text-base font-medium',
                  size: '16px',
                  usage: 'Inline headings',
                },
                {
                  element: 'p',
                  class: 'text-base leading-7',
                  size: '16px',
                  usage: 'Body text, paragraphs',
                },
                {
                  element: 'small',
                  class: 'text-sm text-muted-foreground',
                  size: '14px',
                  usage: 'Captions, helper text',
                },
                {
                  element: 'code',
                  class: 'text-sm font-mono',
                  size: '14px',
                  usage: 'Inline code, values',
                },
              ].map(item => (
                <div key={item.element} className="p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <code className="text-sm font-mono w-12">
                      {item.element}
                    </code>
                    <code className="text-xs text-muted-foreground flex-1">
                      {item.class}
                    </code>
                    <span className="text-xs text-muted-foreground w-12">
                      {item.size}
                    </span>
                  </div>
                  <div
                    className={
                      item.element === 'small'
                        ? 'text-sm text-muted-foreground'
                        : item.element === 'code'
                          ? 'text-sm font-mono bg-muted px-2 py-1 rounded inline-block'
                          : item.class
                    }
                  >
                    {item.element === 'code'
                      ? 'Sample code text'
                      : `Sample ${item.element} text`}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="bg-card border rounded-lg p-4">
            <h3 className="font-medium mb-3">Font Weights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  weight: 'font-normal',
                  value: '400',
                  usage: 'Body text, regular content',
                },
                {
                  weight: 'font-medium',
                  value: '500',
                  usage: 'Subheadings, emphasis',
                },
                {
                  weight: 'font-semibold',
                  value: '600',
                  usage: 'Headings, important text',
                },
                {
                  weight: 'font-bold',
                  value: '700',
                  usage: 'Major headings, high emphasis',
                },
              ].map(item => (
                <div key={item.weight} className="flex items-center gap-4">
                  <code className="text-sm font-mono w-32">{item.weight}</code>
                  <span className={`${item.weight} flex-1`}>Sample text</span>
                  <span className="text-xs text-muted-foreground w-8">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Responsive Design Tokens</h2>
        <p className="text-muted-foreground mb-6">
          Breakpoint system for responsive design across all device sizes.
        </p>

        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">Breakpoint Scale</h3>
          </div>
          <div className="divide-y">
            {[
              {
                prefix: 'sm:',
                minWidth: '640px',
                maxWidth: '767px',
                devices: 'Landscape phones, small tablets',
                usage: 'Adjust layouts for small landscape screens',
              },
              {
                prefix: 'md:',
                minWidth: '768px',
                maxWidth: '1023px',
                devices: 'Tablets, small laptops',
                usage: 'Tablet-optimized layouts and components',
              },
              {
                prefix: 'lg:',
                minWidth: '1024px',
                maxWidth: '1279px',
                devices: 'Laptops, small desktops',
                usage: 'Desktop layouts with sidebars',
              },
              {
                prefix: 'xl:',
                minWidth: '1280px',
                maxWidth: '1535px',
                devices: 'Large desktops, monitors',
                usage: 'Wide desktop layouts',
              },
              {
                prefix: '2xl:',
                minWidth: '1536px',
                maxWidth: '∞',
                devices: 'Extra large monitors, ultrawide',
                usage: 'Maximum width layouts',
              },
            ].map(bp => (
              <div key={bp.prefix} className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <code className="text-sm font-mono font-semibold w-12">
                    {bp.prefix}
                  </code>
                  <code className="text-sm text-muted-foreground">
                    {bp.minWidth}+
                  </code>
                  <span className="text-sm text-muted-foreground flex-1">
                    {bp.devices}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{bp.usage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-medium mb-3">Circuit AI Responsive Patterns</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Component Layout:</strong>
              <ul className="text-muted-foreground mt-1 space-y-1">
                <li>
                  • <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
                </li>
                <li>
                  • <code>flex-col md:flex-row</code>
                </li>
                <li>
                  • <code>hidden md:block</code>
                </li>
                <li>
                  • <code>p-4 md:p-6 lg:p-8</code>
                </li>
              </ul>
            </div>
            <div>
              <strong>Circuit Interface:</strong>
              <ul className="text-muted-foreground mt-1 space-y-1">
                <li>• Mobile: Single column component list</li>
                <li>• Tablet: Sidebar + main canvas</li>
                <li>• Desktop: Full 3-panel layout</li>
                <li>• Large: Extended property panels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderRadiusTokens: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Border Radius Design Tokens</h2>
        <p className="text-muted-foreground mb-6">
          Border radius system using CSS variable --radius as the base value.
        </p>

        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-medium">Radius Scale</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  class: 'rounded-none',
                  value: '0px',
                  usage: 'Sharp corners, technical elements',
                },
                {
                  class: 'rounded-sm',
                  value: 'calc(var(--radius) - 4px)',
                  usage: 'Tight radius for small elements',
                },
                {
                  class: 'rounded',
                  value: 'var(--radius)',
                  usage: 'Default radius (8px)',
                },
                {
                  class: 'rounded-md',
                  value: 'calc(var(--radius) - 2px)',
                  usage: 'Medium radius for inputs',
                },
                {
                  class: 'rounded-lg',
                  value: 'var(--radius)',
                  usage: 'Large radius for cards',
                },
                {
                  class: 'rounded-xl',
                  value: '0.75rem',
                  usage: 'Extra large for special elements',
                },
                {
                  class: 'rounded-2xl',
                  value: '1rem',
                  usage: 'Large decorative elements',
                },
                {
                  class: 'rounded-full',
                  value: '9999px',
                  usage: 'Circular elements, avatars',
                },
              ].map(item => (
                <div key={item.class} className="flex items-center gap-4">
                  <div className={`w-16 h-8 bg-primary ${item.class}`}></div>
                  <code className="text-sm font-mono w-32">{item.class}</code>
                  <code className="text-xs text-muted-foreground w-40">
                    {item.value}
                  </code>
                  <span className="text-sm text-muted-foreground flex-1">
                    {item.usage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-medium mb-2">CSS Variable</h4>
          <code className="text-sm font-mono bg-background px-2 py-1 rounded border">
            --radius: 0.5rem
          </code>
          <p className="text-sm text-muted-foreground mt-2">
            Base radius value used for calculated variants. Can be customized
            for different themes.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const UsageGuide: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Design Token Usage Guide</h2>
        <p className="text-muted-foreground mb-6">
          How to effectively use design tokens in Circuit AI Assistant
          development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
              ✅ Do&apos;s
            </h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• Use semantic color tokens (bg-card, text-foreground)</li>
              <li>• Follow the 8-point spacing system</li>
              <li>• Use responsive prefixes for different screen sizes</li>
              <li>• Stick to the typography scale for text sizes</li>
              <li>• Use CSS variables for dynamic theming</li>
              <li>• Test color contrast for accessibility</li>
              <li>• Use consistent border radius from the scale</li>
              <li>• Leverage Tailwind utilities over custom CSS</li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
              ❌ Don&apos;ts
            </h3>
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
              <li>
                • Don&apos;t use arbitrary values (p-[13px]) without reason
              </li>
              <li>• Don&apos;t mix spacing systems (avoid odd spacing)</li>
              <li>• Don&apos;t hardcode colors (#ffffff) instead of tokens</li>
              <li>• Don&apos;t skip responsive design considerations</li>
              <li>
                • Don&apos;t use custom font families without updating tokens
              </li>
              <li>• Don&apos;t ignore accessibility contrast requirements</li>
              <li>• Don&apos;t create inconsistent border radius patterns</li>
              <li>
                • Don&apos;t bypass the design system for &quot;one-off&quot;
                cases
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Implementation Examples</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Component Card</h4>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                {`<div className="bg-card border rounded-lg p-4 space-y-3">
  <h3 className="font-semibold">LM358 Op-Amp</h3>
  <p className="text-sm text-muted-foreground">
    Dual operational amplifier
  </p>
</div>`}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Uses: bg-card, border, rounded-lg, p-4, space-y-3,
                text-muted-foreground
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Responsive Grid</h4>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {components.map(component => (
    <ComponentCard key={component.id} {...component} />
  ))}
</div>`}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Uses: grid system, responsive prefixes, gap spacing
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Status Indicator</h4>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                {`<div className="flex items-center gap-2">
  <div className="w-3 h-3 bg-green-500 rounded-full" />
  <span className="text-sm text-foreground">Online</span>
</div>`}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Uses: flex utilities, gap spacing, semantic colors, text tokens
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
