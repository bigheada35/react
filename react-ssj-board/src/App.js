import logo from './logo.svg';
import './App.css';
//import RefTest from './RefTest.js';
import RefDom from './T01RefDom.js';
import Header from "./T04components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import T01useEffect from "./T01useEffect.js"

import T02useRef from "./T02useRef.js"
import T02useRef2 from "./T02useRef2.js"
import T02useRefuseState from "./T02useRefuseState.js"

import T03Router from "./T03Router.js"
import T04Board from "./T04Board.js"

//import Board from "./T05/Board.js"
//import Board from "./T06/Board.js"




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

      {/* <T01useEffect></T01useEffect> */}
      
      {/* <T02useRef></T02useRef> */}
      <T02useRef2></T02useRef2>

      {/* <T02useRefuseState></T02useRefuseState> */}

      {/* <T03Router></T03Router> */}


        

      {/* <T04Board></T04Board> */}




        {/* <Board></Board> */}
        
    </div>
  );
}

export default App;
