import React from 'react';

import { useRef } from "react";
import ReactDOM from "react-dom";

const T02useRef = () => {

        /*
        useRef Hook을 사용하면 렌더 간에 값을 유지할 수 있습니다.
        업데이트할 때 다시 렌더링하지 않는 
        변경 가능한 값을 저장하는 데 사용할 수 있습니다. 
        DOM 요소에 직접 액세스하는 데 사용할 수 있습니다
        */
   
        const inputElement = useRef();
      
        const focusInput = () => {
            console.log("1");
          inputElement.current.focus();
        };



    return (
        <div> 
            
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>

        </div>
    );
};

export default T02useRef;