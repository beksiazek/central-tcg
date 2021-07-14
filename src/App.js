import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Central TCG by <i>bksiazek</i> coming soon.
        </p>
        <a
          className="App-link"
          href="https://github.com/beksiazek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Github profile
        </a>
      </header>
    </div>
  );
}

export default App;
