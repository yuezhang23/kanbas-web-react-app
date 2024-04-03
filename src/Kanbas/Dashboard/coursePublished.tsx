import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import { useDispatch, useSelector } from "react-redux";
import {setCourse, deleteCourse, setCourses } from "../Redux/kanbasReducer";
import { KanbasState } from "../store";
import { deleteItemD, findAllData, initializeItem } from "../client";
import { useEffect } from "react";

function PublishedCourse() {
   
    const dispatch = useDispatch();
    const { pathname}= useLocation();
    const COURSES_API=  "http://localhost:4000/api/courses";

    useEffect(() => {
        findAllData(COURSES_API).then((data)=>  {dispatch(setCourses(data))});
        initializeItem(COURSES_API).then((data)=> {dispatch(setCourse(data))});
    }, [COURSES_API]);
       
    const handleDeleteCourse = (id:any) =>{
        deleteItemD(COURSES_API, id).then((status) => {dispatch(deleteCourse(id))});
    }
    
    const courses = useSelector((state: KanbasState) => state.courseReducer.items);
    return (
        <div className="px-5 ms-4 pt-4">
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    {courses.map((course : any) => (
                        <div key={course._id} className="col" style={{ width: 300}}>
                            <div className="card" style={{ height: 300}}>
                                <img src={`/libs/images/${course.image}`} className="card-img-top"
                                     style={{height:150}}/>
                                <div className="card-body text-wrap">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}.{course.number}                                 
                                    </Link> 
                                    
                                    <p className="card-text">{course.description}</p>
                                    <button 
                                    className={pathname.includes("Courses") ? "d-none" : "float-end btn btn-sm btn-outline-danger"}
                                    onClick={(event) => {event.preventDefault(); handleDeleteCourse(course._id);}}>
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