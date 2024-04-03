import {Link, useParams} from "react-router-dom";
import db from "../../Database/Database";
import {FaChevronDown} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function CourseDropdown() {
    const {courseId} = useParams();
    const [vis, setShow] = useState('not');
    return (
        <div className='wd-dropdown'>
            <button className="btn" type="button" data-bs-toggle="dropdown">
                <FaChevronDown color={'white'}/>
            </button>
            <div className={`dropdown-menu wd-full-frame ${vis}`}>
                {db.course_menu.map((link) => (
                    <a className='dropdown-item'>
                        <Link to={`/Kanbas/Courses/${courseId}/${link}`} > {link} </Link>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default CourseDropdown