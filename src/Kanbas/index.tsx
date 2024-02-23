import KanbasNavigation from "./Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import HeadNav from "./Navigation/headNav";

function Kanbas() {
    return(
        <div className='d-flex'>
            <div className='d-none d-md-block'>
                <KanbasNavigation/>
            </div>
            <div style={{ flexGrow: 1, zIndex:0}} >
                {/*<div className="d-flex d-block d-md-none bg-dark py-2">*/}
                {/*    <HeadNav/>*/}
                {/*</div>*/}
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                    <Route path="Courses" element={<Dashboard/>} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas

