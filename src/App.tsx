import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <HelloWorld variant="primary" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Design Tokens</h3>
            <p className="text-gray-400 text-sm">Custom colors, typography, and spacing system</p>
          </div>
          
          <div className="circuit-block">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Circuit Components</h3>
            <p className="text-gray-400 text-sm">Specialized components for circuit diagrams</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold ai-claude mb-2">AI Integration</h3>
            <p className="text-gray-400 text-sm">Ready for Claude and ChatGPT integration</p>
          </div>
        </div>

        <div className="mt-12 flex gap-4 justify-center">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </div>
      </div>
    </div>
  )
}

export default App 