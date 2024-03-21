import { Link, useLocation } from "react-router-dom";
import "../../cssSRC/index.css";
import "../../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import db from "../../Database/Database";

function CourseNavigation() {
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation menu-2">
            {db.course_menu.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
}
export default CourseNavigation;

