import {
    FaAngleDoubleUp,
    FaClock,
    FaCopy,
    FaEllipsisV,
    FaFileExport,
    FaSearch
} from "react-icons/fa";
import {FaDeleteLeft, FaPencil, FaShareNodes} from "react-icons/fa6";
import React from "react";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function dropdownHW() {
    return (
        <div className="dropdown">
            <button className="btn btn-sm border-0 p-0"
                    type="button" data-bs-toggle="dropdown">
                <FaEllipsisV className="ms-2" />
            </button>
            <div>
                <ul className="wd-modules drop dropdown-menu dropdown-menu-light mt-3 border rounded">
                    <a className="dropdown-item"
                       href="/Kanbas/Courses/Assignments/edit/screen.html">
                        <FaPencil/> Edit</a>
                    <a className="dropdown-item" href="#">
                        <FaClock/> Speed Grader</a>
                    <a className="dropdown-item" href="#">
                        <FaAngleDoubleUp/> Duplicate</a>
                    <a className="dropdown-item" href="#">
                        <FaDeleteLeft/> Delete</a>
                    <a className="dropdown-item" href="#">
                       <FaFileExport/> Move to...</a>
                    <a className="dropdown-item" href="#">
                        <FaSearch/> Send to...</a>
                    <a className="dropdown-item" href="#">
                        <FaCopy/> Copy to...</a>
                    <a className="dropdown-item" href="#">
                        <FaShareNodes/> Share to Commons</a>
                </ul>
            </div>
        </div>
    );
}
export default dropdownHW