import React from "react";
function Statistic({ good, neutral, bad, total, positivePercentage}) {
    
    return (
        
        <div>
        <p>Good:{good} </p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad} </p>
        <p>Total:{total} </p>
        <p>Positive feedbaks: { positivePercentage}%</p>
            </div>
    )
}

export default Statistic;