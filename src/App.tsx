import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div>
      <div>
        <HelloWorld variant="primary" />

        <div>
          <div>
            <h3>Design System</h3>
            <p>Plain components with no styling</p>
          </div>

          <div>
            <h3>UI Components</h3>
            <p>Accessible interface elements</p>
          </div>

          <div>
            <h3>Modern Stack</h3>
            <p>React, TypeScript, and Storybook</p>
          </div>
        </div>

        <div>
          <button>Primary Button</button>
          <button>Secondary Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
