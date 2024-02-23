import "../../../cssSRC/index.css";
import "../../../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {
    FaUnlock,
    FaLock,
    FaCog,
    FaArrowAltCircleRight,
    FaHome,
    FaBook,
    FaNewspaper,
    FaChartBar,
    FaStickyNote,
    FaInfo, FaAddressCard
} from "react-icons/fa";

function CourseStatus() {
    return (
        <div className="px-d-none d-lg-block px-5">
            <div className="row mb-2">
                    Course Status
            </div>
            <div className="row">
                <span className="my-2 ps-0">
                    <button className="btn btn-light me-2 rounded-0">
                        <FaUnlock/> Unpublish</button>
                    <button className="btn btn-success rounded-0">
                        <FaLock/> Published</button>
                </span>
                <ul className="wd-modules list-group">
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaCog/> Import Existing Content</a></li>
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaArrowAltCircleRight/> Import From Commons</a></li>
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaHome/> Choose Home Page</a></li>
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaBook/> View Course Stream</a></li>
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaNewspaper/> New Announcement</a></li>
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaChartBar/> New Analytics</a></li>
                    <li className="list-group-item sm"><a href="other-page.html">
                        <FaStickyNote/> View Course Notifications</a></li>
                </ul>
            </div>
            <div className="row row-cols-1 mt-4 pb-2 border-bottom">
                <span>
                    Coming Up
                    <a  className="text-decoration-none float-end wd-fg-black"
                        href="other-page.html">
                        <FaInfo/> View Calender</a>
                </span>
            </div>
            <div className="row mt-4">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a className="text-decoration-none wd-fg-black"
                           href="other-page.html" >
                            <FaAddressCard/> Lecture
                            CS5610.36915.202430 Sep 7 at
                            18:00pm</a>
                    </li>
                    <li className="list-group-item">
                        <a className="text-decoration-none wd-fg-black"
                           href="other-page.html" >
                            <FaAddressCard/> Lecture
                            CS5610.36915.202430 Sep 10 at
                            18:00pm</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default CourseStatus