interface HelloWorldProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'muted' | 'warning';
}

export default function HelloWorld({ variant }: HelloWorldProps) {
  if (variant === 'primary') {
    // Primary variant styling could go here
  }

  return (
    <div>
      <h1>Circuit AI Assistant</h1>
      <p>
        <strong>Input</strong> → <strong>AI Process</strong> →{' '}
        <strong>Circuit Output</strong>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded-lg bg-card">
          <p className="font-semibold">Claude</p>
          <small>AI Assistant</small>
        </div>
        <div className="p-4 border rounded-lg bg-card">
          <p className="font-semibold">ChatGPT</p>
          <small>AI Assistant</small>
        </div>
        <div className="p-4 border rounded-lg bg-card">
          <p className="font-semibold">Circuit Design</p>
          <small>AI Generated</small>
        </div>
      </div>
    </div>
  );
}
