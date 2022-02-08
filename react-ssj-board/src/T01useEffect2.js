import React from 'react';
import { useState, useEffect } from "react";

const T01useEffect2 = () => {


    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); // <- add empty brackets here
  
    return <h1>I've rendered {count} times!</h1>;


};




export default T01useEffect2;