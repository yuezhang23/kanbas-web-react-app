
function whileLoop() {
    let c = 0;
    let b = 25;
    while(c < b) {
        c = c + 3;
    } 
    return (
        <div>
            <h2>while loop:</h2>
            output = {c}
        </div>
        );
}
export default whileLoop