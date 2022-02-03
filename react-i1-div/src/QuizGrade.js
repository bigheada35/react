
import React from 'react';
import {useState} from 'react';

const QuizGrade = () => {

    const [kor, setKor] = useState("");
    const [eng, setEng] = useState("");
    const [mat, setMat] = useState("");

    const onChangeKor = (e) => {
        //const {e.target.value} 또는 let value2 = e.target.value;처럼 이렇게 사용하지 않고, 객체 분할 써서,
        const {value} = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setKor(numberCheck(onlyNumber));
    }
    const onChangeEng = (e) => {
        const {value} = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");
        setEng(numberCheck(onlyNumber));
    }
    const onChangeMat = (e) => {
        const {value} = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, "");

        setMat(numberCheck(onlyNumber));
    }
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
            국어:<input type="text"name="kor" placeholder="국어" value={kor} onChange={onChangeKor}></input>
            영어:<input type="text"name="eng" placeholder="영어" value={eng} onChange={onChangeEng}></input>
            수학:<input type="text"name="mat" placeholder="수학" value={mat} onChange={onChangeMat}></input>


            <div>총점은{Number(kor) + Number(eng) + Number(mat) }</div>
            <div>평균은{(Number(kor) + Number(eng) + Number(mat))/3.0 }</div>
        </div>
    );
};





export default QuizGrade;      