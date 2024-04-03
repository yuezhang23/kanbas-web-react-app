import Assignment3 from "./a3";
import Nav from "../Nav";
import { Routes, Route, Link } from "react-router-dom";
import Assignment4 from "./a4";
import Assignment2 from "./a2";
import Assignment1 from "./a1";
import { Provider } from "react-redux";
import store from "./store";
import Assignment5 from "./a5";

function Labs() {
    return (
        <Provider store={ store }>
            <h1>Labs</h1>
            <Nav/>
            <Routes>
                <Route path="/a1/*" element={<Assignment1 />} />
                <Route path="/a2/*" element={<Assignment2 />} />
                <Route path="/a3/*" element={<Assignment3 />} />
                <Route path="/a4/*" element={<Assignment4 />} />
                <Route path="/a5/*" element={<Assignment5 />} />
            </Routes>
        </Provider>
    );
}
export default Labs;