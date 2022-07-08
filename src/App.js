import logo from './logo.svg';
import './app.css';
import * as math from './math.js';

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
