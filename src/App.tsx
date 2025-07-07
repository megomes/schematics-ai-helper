import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-8">
      <div className="w-full max-w-4xl">
        <HelloWorld variant="primary" />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="mb-2 text-lg font-semibold text-gray-100">
              Design Tokens
            </h3>
            <p className="text-sm text-gray-400">
              Custom colors, typography, and spacing system
            </p>
          </div>

          <div className="circuit-block">
            <h3 className="mb-2 text-lg font-semibold text-gray-100">
              Circuit Components
            </h3>
            <p className="text-sm text-gray-400">
              Specialized components for circuit diagrams
            </p>
          </div>

          <div className="card">
            <h3 className="ai-claude mb-2 text-lg font-semibold">
              AI Integration
            </h3>
            <p className="text-sm text-gray-400">
              Ready for Claude and ChatGPT integration
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
