import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CourseNavigation from "../Courses/Navigation";
import CourseHome from "./Home";
import Modules from "./Modules";
import {FaGlasses} from "react-icons/fa";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/Editor";
import BreadcrumbNav from "./Navigation/breadcrumbNav";
import {courses} from "../Database";
import CourseDropdown from "./Navigation/courseDropdown";
import HeadNav from "../Navigation/headNav";
import Grades from "./Grades";


function Courses() {
    const {courseId} = useParams();
    const { pathname } = useLocation();
    const course = courses.filter((course) => course._id === courseId)[0];
    return (
        <>
            <div className="d-flex d-block d-md-none bg-dark text-white py-2">
                <div className="col">
                    <HeadNav/>
                </div>
                <div className="col text-center">
                    {course.name }<br/>{pathname.substring(pathname.lastIndexOf('/') +1 )}
                </div>
                <div className="col text-end">
                    <CourseDropdown/>
                </div>
            </div>
            <div className="mx-5 d-none d-md-block">
                 <div className="d-flex flex-row border-bottom">
                     <div className='col'>
                         <BreadcrumbNav/>
                     </div>
                     <div className='col text-end mt-2'>
                        <button type="button" className="btn btn-light p-1 ">
                            <FaGlasses/>  Student View
                        </button>
                     </div>
                 </div>
            </div>
            <div className='d-flex mt-4'>
                <div className='d-none d-md-block'>
                    <CourseNavigation />
                </div>
                <div className="overflow-y-scroll bottom-0 end-0 flex-fill"
                    style={{left: "320px", top: "120px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<CourseHome/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                        <Route path="Grades" element={<Grades/>} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Discussion" element={<h1>Discussion</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
export default Courses