interface WelcomeMessageProps {
  variant?: 'default' | 'primary';
}

export default function WelcomeMessage({ variant = 'default' }: WelcomeMessageProps) {
  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold mb-4">Start Your Circuit Design</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Describe what you want to build and I'll help you create a professional circuit diagram.
      </p>
      <div className="p-4 bg-muted/50 rounded-lg border">
        <p className="text-sm font-medium mb-2">Try:</p>
        <p className="text-sm text-muted-foreground font-mono">
          "Create an LED driver for Arduino"
        </p>
      </div>
    </div>
  );
} 