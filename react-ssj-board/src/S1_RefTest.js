import React from 'react';
import {useState, useRef} from 'react';

const RefTest = () => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    let countNormal = 0;


    console.log("ref 동작");
    console.log(countRef);
    console.log(countRef.current);

    const increaseCountState = () => {
        setCount(count + 1 );
    };
    const increaseCountRef = ()=>{
        countRef.current = countRef.current + 1;
        //inputElement.current.focus();
    };
    const increaseCountNormal = () => {
        countNormal = countNormal + 1;  
    };

    return (
        <div>
            <p>State값: {count}</p>
            <p>ref: {countRef.current}</p>
            <p>countNormal{countNormal}</p>

            <button onClick={increaseCountState}>State 값 확인</button>
            <button onClick={increaseCountRef}>ref 값 확인</button>
            <button onClick={increaseCountNormal}>ref 값 확인</button>
        </div>
    );
};




export default RefTest;