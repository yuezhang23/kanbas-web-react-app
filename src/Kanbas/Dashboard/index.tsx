import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import CourseEditor from "./courseEditor";
import PublishedCourse from "./coursePublished";
import { COURSES_API } from "../client";

function Dashboard() {

    return (     
        <div >
            <div className="px-5 ms-4 pt-4">
                <h1>Dashboard</h1>  
                <hr />
                <CourseEditor ip = {COURSES_API} />
            </div>
            <br/>
            <div >
                <PublishedCourse />
            </div>
        </div>
    );
}
export default Dashboard;