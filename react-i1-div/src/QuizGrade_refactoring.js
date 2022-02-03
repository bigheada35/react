
import React from 'react';
import {useState} from 'react';

const QuizGrade_refactoring = () => {

    const [grade, setGrade] = useState(
        {
            kor:0,
            eng:0,
            mat:0
        }

    );
        // 분석 할 부분
    const onChange = (e)=>{
        //객체 구조 분할, input 객체에서 name과 value만 받아냄.
        const {name, value} = e.target;
        // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
        const onlyNumber = value.replace(/[^0-9]/g, "");
        //여기가 이해가 잘 않되, 객체는 복사본(주소가 다른)것을 넣어 줘야함
        // ...grade는  grade를 복사한것
        // [kor]:값  의의미는 kor에 값으로 넣어 주는 것
        //spread operator (...) allows us 
        //to quickly copy all or part of an existing array or 
        //object into another array or object
        setGrade({ ...grade, [name]: numberCheck(onlyNumber) });
        console.log("----" + grade.kor)
    };

    const numberCheck = (v) => {
        let num = v || 0;
        if (!isFinite(num)) return;
        num = num.toString();
    
        if (num !== "0" && !num.includes(".")) {
          num = num.replace(/^0+/, "");
        }
        return num;
    };

    return (
        <div>
           국어:<input 
                    type="text"
                    name="kor" 
                    placeholder="국어" 
                    value={grade.kor} 
                    onChange={onChange}
                ></input>
            영어:<input 
                    type="text"
                    name="eng" 
                    placeholder="영어" 
                    value={grade.eng} 
                    onChange={onChange}>
                 </input>
            수학:<input 
                type="text"
                name="mat" 
                placeholder="수학" 
                value={grade.mat} 
                onChange={onChange}
            ></input>

            <div>총점은{Number(grade.kor) + Number(grade.eng) + Number(grade.mat) }</div>
            <div>평균은{(Number(grade.kor) + Number(grade.eng) + Number(grade.mat))/3.0 }</div>

        </div>
    );
};





export default QuizGrade_refactoring;      