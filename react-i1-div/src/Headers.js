import React, { Component } from 'react';
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';


const Headers = (props) => {

    const headerStyle = {
        color: "white",
        backgroundColor : "blue",
        padding : "10px",
        fontFamily : "sans-Serif"
    };

        if(props.isGoad == 1){
            return (
                    
                 <MadeGoal style={  headerStyle    }></MadeGoal>
            )
        }else{
            return (

             <MissedGoal ></MissedGoal>

            )
        }
    
        return (
            <div>
                {/* <h1 style={   {color:"red", background:"blue"}    }> Hello style</h1> */}
                <h1 style={  headerStyle    }> Hello style</h1>
            </div>
        );
    
}

export default Headers;