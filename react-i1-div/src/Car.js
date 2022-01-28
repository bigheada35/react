
//rsc  : react stateless

import React, { useState } from 'react';

const Car = () => {

    //let brand = "Ford";
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Benz");

    const [car, setCar] =  useState({
        brand: "Ford",
        model: "Benz",
        color: "red.."

    });

    const [year, setYear] =  useState("2021");
    const updateColor = () =>{
        // setYear( previousState => {
        //     setYear("2022");

        // });

       // setYear("2022");



       //1.달라야 화면 갱신
       //2. 객체일 경우 리액트에서 다르다고 판단하는 것은 
       //객체의 첫번째 주소가 달라야 다르다고 판단함.
       //3. 한마디로 화면 갱신을 위하여
       // 객체안에 있는 내용까지 체크하지 않음.
    //    setCar( previousState => {
    //         return {...previousState, color: "blue.."}
    //    });
            // 위것 previousState 쓴 것과 동일함.
       setCar( car => {
        return {...car, color: "blue.."}

   });


    }


    return (
        <div>
            {/*
             <h1>브랜드 {brand}  ,   연도 {year}</h1>
            <p>
                It is a {model};
            </p>
               */}           
                {car.brand}, {car.model} ,,color : {car.color}


            <button type="button" onClick = {updateColor}> 파랑 </button>
        </div>
    );
};

export default Car;