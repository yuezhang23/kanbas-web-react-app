import React from 'react';
import EncodingParametersInURLs from './EncodingParameterInURL';
import WorkingWithObjects from './workingWIthObjects';
import WorkingWithArrays from './WorkingWithArrays';
function Assignment5() {
    return (
        <div>
            <h3>Assignment 5</h3>
            <a href="http://localhost:4000/a5/welcome" className='form-control w-50'>
                Welcome
            </a>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment5;
