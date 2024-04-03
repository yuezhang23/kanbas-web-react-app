import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
    FaHistory, FaVideo, FaQuestion, FaAddressBook } from "react-icons/fa";
import "../cssSRC/module-index.css";
import "../cssSRC/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {HiMiniBars3} from "react-icons/hi2";

function KanbasDropdown() {
    const links = [
        { label: 'Account' ,  icon: <FaRegUserCircle className="fs-2 wd-fg-red" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-fg-red" />  },
        { label: "Courses", icon: <FaBook className="fs-2 wd-fg-red" />           },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 wd-fg-red" /> },
        { label: "Inbox", icon: <FaAddressBook className="fs-2 wd-fg-red" /> },
        { label: "History", icon: <FaHistory className="fs-2 wd-fg-red" /> },
        { label: "Studio", icon: <FaVideo className="fs-2 wd-fg-red" /> },
        { label: "Help", icon: <FaQuestion className="fs-2 wd-fg-red" /> },
    ];
    return (
        <div className='wd-dropdown'>
            <button className="btn" type="button" data-bs-toggle="dropdown" 
             id="kanbasDW">
                <HiMiniBars3 color={'white'}/>
            </button>
            <div className='dropdown-menu wd-full-frame' aria-labelledby="kanbasDW">
                {links.map((link) => (
                    <a className='dropdown-item'>
                        <Link to={`/Kanbas/${link.label}`} > {link.icon} <br/> {link.label} </Link>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default KanbasDropdown