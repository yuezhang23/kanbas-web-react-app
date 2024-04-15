import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import { useDispatch, useSelector } from "react-redux";
import {setCourse, deleteCourse, setCourses } from "../Redux/kanbasReducer";
import { KanbasState } from "../store";
import * as client from "../client";
import { useEffect } from "react";

function PublishedCourse() { 
    const dispatch = useDispatch();
    const { pathname}= useLocation();
    
    useEffect(() => {
        client.findAllData(client.COURSES_API).then((data)=>  {dispatch(setCourses(data))});
        client.initializeItem(client.COURSES_API).then((data)=> {dispatch(setCourse(data))});
    }, [client.COURSES_API]);
    
    const handleDeleteCourse = (id:any) =>{
        client.deleteItemD(client.COURSES_API, id).then((status) => {dispatch(deleteCourse(id))});
    }
    
    const courses = useSelector((state: KanbasState) => state.courseReducer.items);
    return (
        <div className="px-5 ms-4 pt-4">
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    {courses.map((course : any) => (
                        <div key={course.cid} className="col" style={{ width: 300}}>
                            <div className="card" style={{ height: 300}}>
                                <img src={`/libs/images/${course.image? course.image : "6.png"}`} className="card-img-top"
                                     style={{height:150}}/>
                                <div className="card-body text-wrap">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course.cid}/Home`}
                                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}.{course.number}                                 
                                    </Link> 
                                    
                                    <p className="card-text text-truncate">{course.description}</p>
                                    <button 
                                    className={pathname.includes("Courses") ? "d-none" : "float-end btn btn-sm btn-outline-danger"}
                                    onClick={(event) => {event.preventDefault(); handleDeleteCourse(course.cid);}}>
                                            Delete </button>
                                    <Link to={`/Kanbas/Courses/${course.cid}/Home`} className="btn btn-primary">
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