interface HelloWorldProps {
  text?: string;
  className?: string;
  variant?: 'default' | 'primary' | 'circuit' | 'ai';
}

function HelloWorld({
  text = 'Circuit AI Assistant',
  className = '',
  variant = 'default',
}: HelloWorldProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-primary-400 hover:text-primary-300';
      case 'circuit':
        return 'text-circuit-signal hover:text-circuit-highlight';
      case 'ai':
        return 'text-ai-claude hover:text-ai-thinking';
      default:
        return 'text-gray-100 hover:text-primary-400';
    }
  };

  return (
    <div className="space-y-4 text-center">
      <h1
        className={`font-display text-4xl font-bold leading-tight transition-colors duration-300 ${getVariantClasses()} ${className}`}
      >
        {text}
      </h1>
      <div className="flex justify-center gap-4 font-mono text-sm">
        <span className="circuit-input">Input</span>
        <span className="text-gray-400">→</span>
        <span className="circuit-signal">Process</span>
        <span className="text-gray-400">→</span>
        <span className="circuit-output">Output</span>
      </div>
      <div className="flex justify-center gap-2">
        <div className="card p-2 text-xs">
          <div className="ai-claude">Claude</div>
        </div>
        <div className="card p-2 text-xs">
          <div className="ai-chatgpt">ChatGPT</div>
        </div>
        <div className="card p-2 text-xs">
          <div className="ai-thinking">Processing</div>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;
