function FunctionDestructing() {
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    const subtract = ({ d, c }: { c: number; d: number }) => c - d;
    const difference = subtract({ d: 2 , c: 4 });
    
    return (
        <div>
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b;<br />
            const sum = add(1, 2);<br />
            const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
            const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
            sum = {sum}<br />
            difference = {difference}
        </div>
    );}
export default FunctionDestructing;