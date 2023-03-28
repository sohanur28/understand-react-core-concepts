import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    
    const increaseSteps = () => {
         const nextSteps = steps + 1;
         setSteps(nextSteps);
    }

    useEffect( ()=>{
        console.log(steps);
    }, [steps])

    return (
        <div>
            <h2>This is my smart Watch!</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De Dour.....</button>
        </div>
    );
};

export default Watch;