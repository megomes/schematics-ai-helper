interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

interface ChatInterfaceProps {
  messages?: Message[];
  isLoading?: boolean;
}

export default function ChatInterface({ messages = [], isLoading = false }: ChatInterfaceProps) {
  const defaultMessages: Message[] = [
    {
      id: '1',
      type: 'user',
      content: 'Create an LED driver for Arduino',
      timestamp: new Date('2024-01-15T10:00:00'),
      status: 'sent'
    },
    {
      id: '2',
      type: 'ai',
      content: 'I\'ll help you design an LED driver for Arduino! Let me create a simple and efficient circuit that can safely drive LEDs from your Arduino outputs.',
      timestamp: new Date('2024-01-15T10:00:05'),
      status: 'sent'
    },
    {
      id: '3',
      type: 'ai',
      content: 'Based on your requirements, I\'m designing a transistor-based LED driver with current limiting. This will protect both your Arduino and the LED while providing good brightness control.',
      timestamp: new Date('2024-01-15T10:00:10'),
      status: 'sent'
    }
  ];

  const displayMessages = messages.length > 0 ? messages : defaultMessages;

  return (
    <div className="flex flex-col h-full">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {displayMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted border'
              }`}
            >
              <div className="text-sm mb-1">
                {message.type === 'user' ? 'You' : 'AI'}
                <span className="text-xs text-muted-foreground ml-2">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <div className="text-sm whitespace-pre-wrap">{message.content}</div>
              {message.status === 'sending' && (
                <div className="text-xs text-muted-foreground mt-1">Sending...</div>
              )}
              {message.status === 'error' && (
                <div className="text-xs text-destructive mt-1">Failed to send</div>
              )}
            </div>
          </div>
        ))}
        
        {/* AI Thinking Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted border rounded-lg p-3">
              <div className="text-sm mb-1">AI</div>
              <div className="flex items-center space-x-1">
                <div className="text-sm">Thinking</div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Describe your circuit design..."
            className="flex-1 px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 