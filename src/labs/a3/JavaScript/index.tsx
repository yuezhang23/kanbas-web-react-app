import VariablesAndConstants from "./Variables/VariablesAndConstants";
import VariableTypes from "./Variables/VariableTypes";
import BooleanVariables from "./Variables/BooleanVariables";
import IfElse from "./Conditionals/IfElse";
import TernaryOperators from "./Conditionals/TernaryOperators";
import ES5Functions from "./Functions/ES5Functions";
import ES6ArrowFunc from "./Functions/ES6ArrowFunc";
import ParenthesisAndParameters from "./Functions/ParenthesisAndParameters";
import ImpliedReturn from "./Functions/ImpliedReturn";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemoveDataToFromArrays from "./arrays/AddingAndRemoveDataToFromArrays";
import Forloops from "./arrays/Forloops";
import MapFunc from "./arrays/MapFunc";
import JsonStringify from "./json/JsonStringify";
import FindFunc from "./arrays/FindFunc";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./Functions/FunctionDestructing";
import WhileLoop from "./arrays/whileLoop";

function JavaScript() {
    console.log('Hello World')
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperators/>
            <ES5Functions/>
            <ES6ArrowFunc/>
            <ImpliedReturn/>
            <ParenthesisAndParameters/>
            <WorkingWithArrays/>
            <ArrayIndexAndLength/>
            <AddingAndRemoveDataToFromArrays/>
            <Forloops/>
            <WhileLoop/>
            <MapFunc/>
            <JsonStringify/>
            <FindFunc/>
            <FindIndex/>
            <FilterFunction/>
            <TemplateLiterals/>
            <House/>
            <Spreading/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
}
export default JavaScript

