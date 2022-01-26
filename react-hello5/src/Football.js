import React from "react";

const Football = (props) => {
    const shoot = (a) => {
        alert("great shot" + a);
    }
    const shoot2 = (a,b,c) => {
        alert(a + b +  c.type);
    }
    const shoot3 = (a) => {
        alert(a  );
    }
    return(

        // <button onClick={shoot}>Take the shot !! </button>

        //<button onClick={()=> shoot("```goal```")}>Take the shot !! </button>

        <button onClick={()=> shoot("goal-event" + props.shoes )}>Take the shot !! </button>



    );

}

export default Football;