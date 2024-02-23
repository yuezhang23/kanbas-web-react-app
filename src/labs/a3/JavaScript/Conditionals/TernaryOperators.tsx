function TernaryOperators() {
    let loggedIn = false;
    return(
        <div>
            <h3>Logged In</h3>
            { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>
    )
}
export default TernaryOperators