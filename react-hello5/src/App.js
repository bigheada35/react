import logo from './logo.svg';
import './App.css';

import Car from './Car.js';
import Car2 from './Car2.js';
import Car3 from './Car3.js';
import Score from './Score.js';

import { useState } from "react";

import Football from './Football.js'

function App() {

    //const name = "홍길동";
    const x = 5;
    let text = "goodbye";
    if(x < 10){
      text = "hell1";
    }

 
      const shoot = (kor , eng) => {
        alert("Great Shot!" + kor + eng );
      }

      const [name, setName] = useState("");
      

      const subject_list = { sub1:"국어1", sub2:"영어1", sub3:"수학1"};

  return (
    <div className="App">
  
      <h1> hello </h1>
      
            
       {/* <Car></Car> */}
       <Car/>

       <Car2 brand="Ford"> </Car2>  
       <Car2 brand="람보르"> </Car2>
       <Car2 brand="스포츠"> </Car2>

       <Car3 brand="객체구조분할"> </Car3> 
      


  
      {/* 1/26  
        1. onClick 이벤트 연습
        2. 파라메터 전달 방법 - 함수를 만든어서 
        그안에서 함수호출하면서 파라메터를 넘기도록
        3. event를 받아서 함수로 전달방법
         */}

      <Football shoes="나이키"></Football>


      {/* 1/25 props 연습*/}
      <Score input_form = {subject_list} > </Score>

    </div>


  );



}

export default App;
