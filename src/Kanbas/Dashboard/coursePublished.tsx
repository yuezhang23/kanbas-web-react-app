import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import { useDispatch, useSelector } from "react-redux";
import {setCourse, deleteCourse } from "../Redux/kanbasReducer";
import { KanbasState } from "../store";

function PublishedCourse() {
   
    const courses  = useSelector((state: KanbasState) => state.courseReducer.items);
    const dispatch = useDispatch();
    const { pathname}= useLocation();
    return (
        <div className="px-5 ms-4 pt-4">
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300}}>
                            <div className="card" style={{ height: 300}}>
                                <img src={`/libs/images/${course.image}`} className="card-img-top"
                                     style={{height:150}}/>
                                <div className="card-body text-wrap">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}.{course.number}                                 
                                    </Link> 
                                    
                                    <p className="card-text">{course.text}</p>

                                    <button 
                                    className={pathname.includes("Courses") ? "d-none" : "float-end btn btn-sm btn-outline-danger"}
                                    onClick={(event) => {event.preventDefault(); dispatch(deleteCourse(course._id));}}>
                                            Delete </button>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        <FaSignInAlt></FaSignInAlt> 
                                    </Link>
                                    <button 
                                        className={pathname.includes("Courses") ? "d-none" : "me-1 float-end btn btn-sm btn-outline-warning"}
                                     onClick={(event) => { event.preventDefault(); dispatch(setCourse(course));}}>
                                    Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default PublishedCourse;