import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const UseEffectExample = () => {

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const handleChange = (e)=>{
        console.log(e);
        setName(e.target.value);
    }
    const handleCountUp = () => {
        console.log("--handleCountUp--");
        setCount(count + 1);
    }
    //name 또는 count이 바뀔때만 하고싶은일이 있다->사용:useEffect
    useEffect(()=>{
        console.log("name, count렌데링===이름이바뀌고있다")
        //console.log({count,name});
    },[name,count]
    );
    //렌더링이다시될때만 하고싶은일이있다.
    useEffect(()=>{
        console.log("렌더링이다시될때만 하고싶은일이있다")
        //console.log({count,name});
    }
    );   
    console.log("다시실행되고있음");
    return (
        <div>
            <p>이름입력</p>
            <input type="text" value={name} onChange={handleChange}></input>
            <p>카운트{count}</p>
            <button onClick={handleCountUp}>카운트업</button>
        </div>
    );
};

export default UseEffectExample;
