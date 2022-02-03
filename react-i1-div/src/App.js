import logo from './logo.svg';
import './App.css';

import Headers from './Headers.js'
import Goal from './Goal.js'
import FavoriteColor from './FavoriteColor';
import Car from './Car.js'
import UseEffectExample from './UseEffectExample';
import QuizKorEngMatTotAvg from './QuizKorEngMatTotAvg.js'
import QuizGrade from './QuizGrade.js'
import QuizGrade_refactoring from './QuizGrade_refactoring.js'
function App() {
  return (
    <div className="App">
      
{/*     
    <Headers isGoad= {2} ></Headers>

    <Goal isGoad= {true}></Goal>

    <FavoriteColor></FavoriteColor> 

    <Car></Car>
    
    <UseEffectExample></UseEffectExample>
    
   <QuizKorEngMatTotAvg></QuizKorEngMatTotAvg>
*/}

   {/* <QuizGrade></QuizGrade> */}

  <QuizGrade_refactoring></QuizGrade_refactoring>

    </div>
  );
}


export default App;
