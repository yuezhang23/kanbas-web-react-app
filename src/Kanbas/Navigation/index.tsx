import {Link, useLocation} from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
    FaHistory, FaVideo, FaQuestion, FaAddressBook } from "react-icons/fa";
import "../cssSRC/module-index.css";
import "../cssSRC/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function KanbasNavigation() {
    const links = [
        { label: "Account",  icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-fg-red" />  },
        { label: "Courses", icon: <FaBook className="fs-2  wd-fg-red" />           },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2  wd-fg-red" /> },
        { label: "Inbox", icon: <FaAddressBook className="fs-2  wd-fg-red" /> },
        { label: "History", icon: <FaHistory className="fs-2  wd-fg-red" /> },
        { label: "Studio", icon: <FaVideo className="fs-2  wd-fg-red" /> },
        { label: "Help", icon: <FaQuestion className="fs-2  wd-fg-red" /> },
    ];
    const { pathname } = useLocation();
    return (
        <>
            <a href="http://northeastern.edu" ><img width={100} src="/libs/images/n.png"/></a>
            <ul className="wd-kanbas-navigation">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        <Link to={`/Kanbas/${link.label}`}> {link.icon}<br/>{link.label} </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default KanbasNavigation