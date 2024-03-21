function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    // let trial = 'newString'.replace('new', 'old');

    return(
        <div>
            <h2>Variables Types</h2>
            numberVariable = { numberVariable + 5}<br/>
            floatingPointNumber = { floatingPointNumber + 1 }<br/>
            stringVariable = { stringVariable +5}<br/>
            booleanVariable = { booleanVariable + "" }<br/>
            isNumber = { isNumber }<br/>
            isString = { isString }<br/>
            isBoolean = { isBoolean }<br/>
            trial = {'newString'.replace('new', 'old')}

        </div>
    );
}
export default VariableTypes
