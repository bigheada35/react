import React from "react";

const Score = (props) => {
    return (
        <div>
            <h1> 과목 {props.input_form.subject_list} </h1>

            <form id="gradeForm" action="">

            {props.input_form.sub1}<input id="kor" type="text" name="kor"/>  <br/>
            {props.input_form.sub2}<input id="eng" type="text" name="eng"/> <br/>
            {props.input_form.sub3}<input id="mat" type="text" name ="mat"/><br/>

            <input id="tot" type="button" value="총점" />  
            <input id="rst" type="button" value="리셋"/>
            </form>

         </div>
        );
}

export default Score;