import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Complete typography system for the Circuit AI Assistant. All text elements use the Inter font family with carefully crafted spacing and hierarchy.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h1>Heading 1 - Circuit AI Assistant</h1>
        <p className="text-sm text-muted-foreground mt-1">
          text-4xl font-bold tracking-tight
        </p>
      </div>

      <div>
        <h2>Heading 2 - Component Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          text-3xl font-semibold tracking-tight
        </p>
      </div>

      <div>
        <h3>Heading 3 - Op-Amp LM358</h3>
        <p className="text-sm text-muted-foreground mt-1">
          text-2xl font-semibold tracking-tight
        </p>
      </div>

      <div>
        <h4>Heading 4 - Specifications</h4>
        <p className="text-sm text-muted-foreground mt-1">
          text-xl font-semibold tracking-tight
        </p>
      </div>

      <div>
        <h5>Heading 5 - Supply Voltage</h5>
        <p className="text-sm text-muted-foreground mt-1">
          text-lg font-medium
        </p>
      </div>

      <div>
        <h6>Heading 6 - Package Type</h6>
        <p className="text-sm text-muted-foreground mt-1">
          text-base font-medium
        </p>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3>Regular Paragraph</h3>
        <p>
          This is a regular paragraph using the default text styling. It has
          proper line height and spacing for comfortable reading. Perfect for
          documentation, descriptions, and general content in the Circuit AI
          Assistant interface.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          text-base leading-7
        </p>
      </div>

      <div>
        <h3>Small Text</h3>
        <small>
          This is small text used for captions, helper text, and secondary
          information. It uses a muted foreground color for better hierarchy.
        </small>
        <p className="text-sm text-muted-foreground mt-1">
          text-sm text-muted-foreground
        </p>
      </div>

      <div>
        <h3>Large Text</h3>
        <p className="text-lg">
          This is larger text that can be used for important descriptions or
          introductory content.
        </p>
        <p className="text-sm text-muted-foreground mt-1">text-lg</p>
      </div>
    </div>
  ),
};

export const InlineElements: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3>Text Emphasis</h3>
        <p>
          This paragraph contains <strong>strong text</strong> for emphasis and{' '}
          <em>italic text</em>
          for subtle emphasis. You can also use <b>bold</b> and <i>italic</i>{' '}
          tags.
        </p>
      </div>

      <div>
        <h3>Code</h3>
        <p>
          Use inline code like <code>digitalWrite(13, HIGH)</code> or{' '}
          <code>analogRead(A0)</code>
          for technical references and programming examples.
        </p>
      </div>

      <div>
        <h3>Mixed Content</h3>
        <p>
          The <strong>LM358</strong> is a <em>dual operational amplifier</em>{' '}
          with a supply voltage range of <code>±15V</code> and comes in a{' '}
          <small>DIP-8 package</small>.
        </p>
      </div>
    </div>
  ),
};

export const Links: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3>Link Examples</h3>
        <p>
          Visit the{' '}
          <button
            type="button"
            className="text-primary underline-offset-4 hover:underline"
            role="link"
          >
            component datasheet
          </button>{' '}
          for detailed specifications. You can also check the{' '}
          <button
            type="button"
            className="text-primary underline-offset-4 hover:underline"
            role="link"
          >
            Arduino documentation
          </button>{' '}
          for programming examples.
        </p>
      </div>

      <div>
        <h3>Link in Lists</h3>
        <ul>
          <li>
            <button
              type="button"
              className="text-primary underline-offset-4 hover:underline"
              role="link"
            >
              Getting Started Guide
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-primary underline-offset-4 hover:underline"
              role="link"
            >
              Component Library
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-primary underline-offset-4 hover:underline"
              role="link"
            >
              Circuit Examples
            </button>
          </li>
        </ul>
      </div>
    </div>
  ),
};

export const Lists: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div>
        <h3>Unordered List</h3>
        <ul>
          <li>Operational Amplifiers</li>
          <li>Resistors and Capacitors</li>
          <li>
            Microcontrollers
            <ul>
              <li>Arduino Uno</li>
              <li>ESP32</li>
              <li>Raspberry Pi Pico</li>
            </ul>
          </li>
          <li>Sensors and Actuators</li>
        </ul>
      </div>

      <div>
        <h3>Ordered List</h3>
        <ol>
          <li>Connect the power supply</li>
          <li>Wire the input signals</li>
          <li>
            Configure the microcontroller
            <ol>
              <li>Upload the firmware</li>
              <li>Set the pin modes</li>
              <li>Initialize peripherals</li>
            </ol>
          </li>
          <li>Test the circuit</li>
        </ol>
      </div>
    </div>
  ),
};

export const Blockquotes: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3>Technical Quote</h3>
        <blockquote>
          The operational amplifier is perhaps the most versatile and widely
          used type of analog IC, suitable for a broad range of applications
          including amplifiers, filters, and signal conditioning circuits.
        </blockquote>
        <p className="text-sm text-muted-foreground mt-2">
          — Electronics Engineering Handbook
        </p>
      </div>

      <div>
        <h3>Code Documentation</h3>
        <blockquote>
          Always ensure proper power supply decoupling when working with
          operational amplifiers. Place 0.1µF ceramic capacitors close to the
          power pins to prevent oscillation.
        </blockquote>
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3>Text Colors</h3>
        <div className="space-y-2">
          <p className="text-foreground">Default foreground text</p>
          <p className="text-muted-foreground">
            Muted foreground text for secondary content
          </p>
          <p className="text-primary">Primary color text for emphasis</p>
          <p className="text-destructive">
            Destructive color for errors and warnings
          </p>
          <p className="text-green-500">Success color for positive feedback</p>
          <p className="text-yellow-500">Warning color for cautions</p>
        </div>
      </div>

      <div>
        <h3>Background Colors</h3>
        <div className="space-y-2">
          <p className="bg-muted p-2 rounded">Text with muted background</p>
          <p className="bg-primary text-primary-foreground p-2 rounded">
            Text with primary background
          </p>
          <p className="bg-destructive/10 text-destructive p-2 rounded">
            Text with error background
          </p>
        </div>
      </div>
    </div>
  ),
};

export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <header>
        <h1>Circuit AI Assistant Typography System</h1>
        <p className="text-xl text-muted-foreground mt-2">
          A comprehensive design system for electronic circuit documentation and
          interfaces.
        </p>
      </header>

      <section>
        <h2>Overview</h2>
        <p>
          The Circuit AI Assistant uses the <strong>Inter font family</strong>{' '}
          throughout the interface, providing excellent readability and a modern
          aesthetic. The typography system is built with
          <em>hierarchy</em> and <em>accessibility</em> in mind.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            <strong>Consistent spacing</strong> using an 8-point grid system
          </li>
          <li>
            <strong>Accessible contrast ratios</strong> meeting WCAG 2.1 AA
            standards
          </li>
          <li>
            <strong>Semantic HTML</strong> with proper heading hierarchy
          </li>
          <li>
            <strong>Technical formatting</strong> for code and specifications
          </li>
        </ul>

        <h3>Technical Specifications</h3>
        <p>
          All text elements are configured with optimal line heights and letter
          spacing. Code elements like <code>analogRead()</code> and{' '}
          <code>digitalWrite()</code>
          use a monospace font for better readability.
        </p>

        <blockquote>
          Typography is the craft of endowing human language with a durable
          visual form.
        </blockquote>

        <h4>Font Weights</h4>
        <ol>
          <li>
            <span className="font-normal">Normal (400)</span> - Body text
          </li>
          <li>
            <span className="font-medium">Medium (500)</span> - Subheadings
          </li>
          <li>
            <span className="font-semibold">Semibold (600)</span> - Headings
          </li>
          <li>
            <span className="font-bold">Bold (700)</span> - Main headings
          </li>
        </ol>

        <p>
          For more information, visit the{' '}
          <button
            type="button"
            className="text-primary underline-offset-4 hover:underline"
            role="link"
          >
            design system documentation
          </button>
          .
        </p>
      </section>
    </div>
  ),
};

export const CircuitDocumentation: Story = {
  render: () => (
    <div className="space-y-6 max-w-3xl">
      <header>
        <h1>LM358 Dual Op-Amp</h1>
        <p className="text-lg text-muted-foreground">
          Low-power, dual operational amplifier IC
        </p>
      </header>

      <section>
        <h2>Overview</h2>
        <p>
          The <strong>LM358</strong> is a dual operational amplifier integrated
          circuit that operates from a single power supply over a wide range of
          voltages. It is designed for applications requiring{' '}
          <em>low power consumption</em> and <em>high input impedance</em>.
        </p>

        <h3>Key Specifications</h3>
        <ul>
          <li>
            <strong>Supply Voltage:</strong> <code>3V to 32V</code> (single
            supply)
          </li>
          <li>
            <strong>Input Offset Voltage:</strong> <code>7mV typical</code>
          </li>
          <li>
            <strong>Input Bias Current:</strong> <code>45nA typical</code>
          </li>
          <li>
            <strong>Gain Bandwidth Product:</strong> <code>1MHz</code>
          </li>
          <li>
            <strong>Package:</strong> DIP-8, SOIC-8
          </li>
        </ul>

        <h3>Pinout Configuration</h3>
        <p>
          The LM358 comes in an 8-pin package with the following configuration:
        </p>

        <div className="bg-muted p-4 rounded-lg">
          <h4>Pin Assignments</h4>
          <ol>
            <li>
              <code>OUT1</code> - Output of amplifier 1
            </li>
            <li>
              <code>IN1-</code> - Inverting input of amplifier 1
            </li>
            <li>
              <code>IN1+</code> - Non-inverting input of amplifier 1
            </li>
            <li>
              <code>VCC-</code> - Negative supply voltage
            </li>
            <li>
              <code>IN2+</code> - Non-inverting input of amplifier 2
            </li>
            <li>
              <code>IN2-</code> - Inverting input of amplifier 2
            </li>
            <li>
              <code>OUT2</code> - Output of amplifier 2
            </li>
            <li>
              <code>VCC+</code> - Positive supply voltage
            </li>
          </ol>
        </div>

        <h3>Application Notes</h3>
        <blockquote>
          When using the LM358 in single-supply applications, ensure that the
          input common-mode voltage range is respected to avoid saturation.
        </blockquote>

        <h4>Design Considerations</h4>
        <ul>
          <li>
            Add <strong>power supply decoupling</strong> with 0.1µF ceramic
            capacitors
          </li>
          <li>
            Consider <em>input bias current</em> when designing high-impedance
            circuits
          </li>
          <li>
            Use <strong>feedback resistors</strong> to set the desired gain
          </li>
          <li>
            Implement <em>output limiting</em> if driving ADC inputs
          </li>
        </ul>

        <p>
          For complete circuit examples and PCB layouts, refer to the{' '}
          <button
            type="button"
            className="text-primary underline-offset-4 hover:underline"
            role="link"
          >
            application guide
          </button>{' '}
          and{' '}
          <button
            type="button"
            className="text-primary underline-offset-4 hover:underline"
            role="link"
          >
            datasheet documentation
          </button>
          .
        </p>

        <footer className="pt-4 border-t border-border">
          <small>
            Last updated: December 2024 | Circuit AI Assistant Documentation
          </small>
        </footer>
      </section>
    </div>
  ),
};
