const subtract = (a: number, b: number) => a - b;
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);
const add = (a : GLfloat, b : GLfloat) => {
    return (a + b);
}


function ES6ArrowFunc() {
    return (
        <>
            <h3>New ES6 arrow functions</h3>
            threeMinusOne = {threeMinusOne}<br />
            subtract(3, 1) = {subtract(3, 1)}<br />
        </>
    )
}
export default ES6ArrowFunc