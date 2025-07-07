interface HelloWorldProps {
  text?: string;
  className?: string;
  variant?: 'default' | 'primary' | 'circuit' | 'ai';
}

function HelloWorld({ 
  text = "Circuit AI Assistant", 
  className = "", 
  variant = 'default' 
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
    <div className="text-center space-y-4">
      <h1 className={`text-4xl font-bold font-display leading-tight transition-colors duration-300 ${getVariantClasses()} ${className}`}>
        {text}
      </h1>
      <div className="flex gap-4 justify-center text-sm font-mono">
        <span className="circuit-input">Input</span>
        <span className="text-gray-400">→</span>
        <span className="circuit-signal">Process</span>
        <span className="text-gray-400">→</span>
        <span className="circuit-output">Output</span>
      </div>
      <div className="flex gap-2 justify-center">
        <div className="card text-xs p-2">
          <div className="ai-claude">Claude</div>
        </div>
        <div className="card text-xs p-2">
          <div className="ai-chatgpt">ChatGPT</div>
        </div>
        <div className="card text-xs p-2">
          <div className="ai-thinking">Processing</div>
        </div>
      </div>
    </div>
  )
}

export default HelloWorld 