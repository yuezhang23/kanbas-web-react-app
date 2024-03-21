import {FaEllipsisV, FaFile, FaGraduationCap, FaPercentage} from "react-icons/fa";
import {FaPencil, FaShareNodes} from "react-icons/fa6";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function dropdownEdit() {
    return (
        <div className="dropdown">
            <button className="btn" type="button" data-bs-toggle="dropdown">
                <FaEllipsisV/>
            </button>
            <div>
                <ul className="dropdown-menu dropdown-menu-light mt-3 border rounded">
                    <a className="dropdown-item text-danger"
                       href="/Kanbas/Courses/Assignments/edit/screen.html">
                        <FaPencil/> Edit Assignment Date</a>
                    <a className="dropdown-item text-danger" href="#">
                        <FaFile/> Assignment</a>
                    <a className="dropdown-item text-danger" href="#">
                        <FaPercentage/> Groups Weight</a>
                    <a className="dropdown-item text-danger" href="#">
                        <FaGraduationCap/> GradesScope 1.3</a>
                    <a className="dropdown-item text-danger" href="#">
                        <FaShareNodes/> Commons Favorites</a>
                </ul>
            </div>
        </div>
    );
}
export default dropdownEdit