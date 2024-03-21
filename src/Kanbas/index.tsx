import KanbasNavigation from "./Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import { Provider } from "react-redux";
import store from "./store";
import PublishedCourse from "./Dashboard/coursePublished";

function Kanbas() {
    return(
        <Provider store={store}>
        <div className='d-flex'>
            <div className='d-none d-md-block'>
                <KanbasNavigation/>
            </div>
            <div  style={{ flexGrow: 1, zIndex:0}} >
                {/*<div className="d-flex d-block d-md-none bg-dark py-2">*/}
                {/*    <HeadNav/>*/}
                {/*</div>*/}
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                    <Route path="Courses" element={<PublishedCourse/>} />
                    <Route path="Account/*" element={<Account/>} />
                </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas

