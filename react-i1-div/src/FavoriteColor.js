// import React from 'react';
import React, {useState} from 'react';

const FavoriteColor = () => {

    const [color, setColor] = useState("red");


    /// 주의 사용 불가
    // let color = "발강";
    // const changeColor = () => {
        
    //     color = "yello";
    //     alert("----yello----" + color)
    // }


    return (
        <div>
            <h1>My favorite color is {color}! </h1>      
            <button onClick={ ()=>{setColor("blue")}}>색깔 바꿔 줘</button>
        </div>
    );
};


export default FavoriteColor;