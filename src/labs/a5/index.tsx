import EncodingParametersInURLs from './EncodingParameterInURL';
import WorkingWithObjects from './workingWIthObjects';
import WorkingWithArrays from './WorkingWithArrays';
function Assignment5() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    return (
        <div>
            <h3>Assignment 5</h3>
            <a href={`${API_BASE}/a5/welcome`} className='form-control w-50'>
                Welcome
            </a>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment5;
