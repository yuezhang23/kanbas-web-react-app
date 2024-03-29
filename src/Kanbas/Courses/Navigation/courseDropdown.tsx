import {Link, useParams} from "react-router-dom";
import db from "../../Database/Database";
import {FaChevronDown} from "react-icons/fa";

function CourseDropdown() {
    const {courseId} = useParams();
    return (
        <div className='wd-dropdown'>
            <button className="btn" type="button" data-bs-toggle="dropdown">
                <FaChevronDown color={'white'}/>
            </button>
            <div className='dropdown-menu wd-full-frame'>
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