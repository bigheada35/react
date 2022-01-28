import logo from './logo.svg';
import './App.css';

import Headers from './Headers.js'
import Goal from './Goal.js'
import FavoriteColor from './FavoriteColor';

function App() {
  return (
    <div className="App">
      
    
    <Headers isGoad= {2} ></Headers>

    <Goal isGoad= {true}></Goal>

    <FavoriteColor></FavoriteColor>

    </div>
  );
}


export default App;
