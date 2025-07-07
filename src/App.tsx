import HelloWorld from './components/HelloWorld';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HelloWorld variant="primary" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border rounded-lg bg-card">
          <h3>Design System</h3>
          <p>Consistent and accessible components</p>
        </div>

        <div className="p-6 border rounded-lg bg-card">
          <h3>UI Components</h3>
          <p>Professional interface elements</p>
        </div>

        <div className="p-6 border rounded-lg bg-card">
          <h3>Modern Stack</h3>
          <p>React, TypeScript, and Storybook</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    </div>
  );
}

export default App;
