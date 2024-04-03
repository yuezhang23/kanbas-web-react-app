import "../../cssSRC/index.css";
import "../../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseStatus from "./Status";
import Modules from "../Modules";


function CourseHome() {  
    return (
        <div className="d-flex wd-modules">
            <div className="flex-fill">
                <Modules/>
            </div>
            <div className="col-4 d-none d-lg-block">
                <CourseStatus/>
            </div>
        </div>
    )
}
export default CourseHome