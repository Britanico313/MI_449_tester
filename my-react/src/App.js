import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Logistic Shipyard</h1>
      <h2>Orion Belt Cluster Location</h2>
      <h4>We understand that a ship is important. For all of your needs We are certain we have something in stock for you. Check out our shipyard page to see our inventory</h4>
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
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
