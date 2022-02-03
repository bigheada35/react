import React, { useEffect , useState } from 'react';

const QuizKorEngMatTotAvg = () => {
    const [kor,setKor] = useState("");
    const [eng,setEng] = useState("");
    const [mat,setMat] = useState("");
    const [tot,setTot] = useState("");
    const [avg,setAvg] = useState("");

    useEffect(()=>{

        setTot(Number(kor)+Number(eng)+Number(mat));
        setAvg((Number(kor)+Number(eng)+Number(mat))/3.0);
        console.log("kor:"+kor+","+"eng:"+eng+","+"mat:"+mat+",")
    },[kor,eng,mat]);

    const handleChange1 = (e)=>{
        setKor(e.target.value);


    };
    const handleChange2 = (e)=>{
        setEng(e.target.value);

    };
    const handleChange3 = (e)=>{
        setMat(e.target.value);

    };

    return (
        <div>
            국어<input type="text" name="국국국"value={kor} placeholder="국어" onChange={handleChange1}></input><br/>
            영어<input type="text" value={eng} onChange={handleChange2}></input><br/>
            수학<input type="text" value={mat} onChange={handleChange3}></input><br/><br/>
            총점<input type="text" value={tot} ></input><br/>
            평균<input type="text" value={avg} ></input>
        </div>
    );
};

export default QuizKorEngMatTotAvg;