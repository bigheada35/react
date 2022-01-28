import React from 'react';
import PropTypes from 'prop-types';
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';
//rscpc
const Goal = props => {


    const isGoal = props.isGoal;
    if(isGoal)
        return <MadeGoal></MadeGoal>
    else
        return  <MissedGoal></MissedGoal>
      


    return (
        <div>
            
        </div>
    );
};


// //rscpc
// Goal.propTypes = {
    
// };
//rscpc



export default Goal;