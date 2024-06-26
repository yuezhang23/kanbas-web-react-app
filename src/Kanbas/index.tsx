import KanbasNavigation from "./Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import { Provider } from "react-redux";
import store from "./store";
import PublishedCourse from "./Dashboard/coursePublished";
import Signup from "./Account/Users/Signup";
import Signin from "./Account/Users/Signin";
import Module from "module";

function Kanbas() {   
    return(
        <Provider store={store}>
        <div className='d-flex'>
            <div className='d-none d-md-block'>
                <KanbasNavigation/>
            </div>
            <div  style={{ flexGrow: 1, zIndex:0}} >
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                    <Route path="Courses" element={<PublishedCourse/>} />
                    <Route path="Account" element={<Signin /> }/>
                    <Route path="Signup" element={<Signup/>} />      
                    <Route path="Account/*" element={<Account /> }/>
                </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas

