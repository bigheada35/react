

import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const T1useEffect = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(
          () => {
          setCount((count) => count + 1);
        }, 1000);

      });

    // useEffect(() => {
    //     setCount((count) => count + 1);
    // });

    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    );
};





export default T1useEffect;