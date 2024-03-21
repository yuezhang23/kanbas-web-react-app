function ES5Functions() {
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    return (
        <>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = { twoPlusFour }<br />
            add(2, 4) = { add(2, 4) }<br />
        </>
    )
}
function add (a: number, b: number) : number {
    return a + b;
}
export default ES5Functions