import ParentComponent from "./ParentStateComp";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EvetObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DataStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
    function sayHello() {
        alert('Hello');
    }
    return (
        <div className='container'>
            <h1>Assignment 4</h1>
           <ClickEvent/>
           <PassingDataOnEvent/>
           <PassingFunctions theFunction={sayHello}/>
           <EventObject/>
           <Counter/>
           <BooleanStateVariables/>
           <StringStateVariables/>
           <DateStateVariable/>
           <ObjectStateVariable/>
           <ArrayStateVariable/>
           <ParentComponent/>
           <ReduxExamples/>

        </div>
    );
}
export default Assignment4;

