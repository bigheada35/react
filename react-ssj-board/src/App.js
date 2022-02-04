import logo from './logo.svg';
import './App.css';
//import RefTest from './RefTest.js';
//import RefDom from './RefDom.js';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      {/* 
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
      </header> */}
      {/* <RefTest></RefTest> */}

      {/* <RefDom></RefDom> */}

      <Header></Header>

    </div>
  );
}

export default App;
