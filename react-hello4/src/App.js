import logo from './logo.svg';
import './App.css';
//import Hello from '../../react-helloworld/src/Hello';

import Hello from './hello.js'
import {name} from "./person.js"
// import {age} from "./person.js"


console.log(name);
// console.log(age);

function App() {
  return (
    <div className="App">


      {/* <header className="App-header">
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


      
      
  
      1234
      <Hello/>
      <Hello></Hello>

      <p>----2----</p>
      ReactDOM.render(myelement, document.getElementById('root'));

      5 + 5  = {  5 + 5} 입니다.

    </div>
  );
}

export default App;
