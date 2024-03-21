// Your code here
import React, { useState} from "react";
function StringStateVariables() {
    const [firstName, setFirstName] = useState('John');
    return (
        <div>
            <h2> String State Variable</h2>
            <p>{firstName}</p>
            <input 
            className="form-control"
            value = {firstName}
            onChange={(e) => {console.log(e);
            setFirstName(e.target.value)}}/>
        </div>
    )
}
export default StringStateVariables;
