interface HelloWorldProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'muted' | 'warning';
}

export default function HelloWorld({ variant }: HelloWorldProps) {
  if (variant === 'primary') {
    //
  }
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        <span>Input</span> → <span>Process</span> → <span>Output</span>
      </p>
      <div>
        <div>
          <p>Claude</p>
        </div>
        <div>
          <p>ChatGPT</p>
        </div>
        <div>
          <p>Thinking</p>
        </div>
      </div>
    </div>
  );
}
