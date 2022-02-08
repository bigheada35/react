import React, { useEffect } from 'react';
import {useState, useRef} from 'react';

const RefDom = () => {

    const [inputs, setInputs] = useState({
        name : "",
        nickName : ""
    
    });
    
    const {name, nickName} = inputs;
    
    const onChange = (e) => {
        const{ value, name} = e.target;
        console.log(`${value} ${name}`);
        //inputs가 Object라서, 이렇게 new주소가 들어가도록, 
        //...spread연산자사용해서 복사후 값을 바꿈
        setInputs({     
            ...inputs,
            [name]: value
        })
    }
    const nameInput = useRef();
    const nickNameInput = useRef();

    useEffect(()=>{
        //nameInput.current.focus();        
        //nickNameInput.current.focus();        
    },[]
    );


    const onReset = () => {
        setInputs({
            name : "",
            nickName : ""
        });

        //nameInput.current.focus();
        nickNameInput.current.focus();
    }

    return (
        <div>
            RefDom
            <input
                name = "name"
                placeholder = "이름"
                onChange = {onChange}
                value = {name}
                ref={nameInput}
            >
            </input>
            <input
                name = "nickName"
                placeholder = "별명"
                onChange = {onChange}
                value = {nickName}
                ref={nickNameInput}
            >
            </input>
            <button onClick={onReset}>초기화</button>

        </div>
    );
};




export default RefDom;