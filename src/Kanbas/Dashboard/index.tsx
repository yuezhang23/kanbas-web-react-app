import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaSignInAlt } from "react-icons/fa";
import "../cssSRC/index.css";
import "../cssSRC/module-index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Dashboard() {
    return (
        <div className="p-5">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (12)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300}}>
                            <div className="card">
                                <img src={`/libs/images/${course.image}`} className="card-img-top"
                                     style={{height:150}}/>
                                <div className="card-body text-wrap">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.text}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        <FaSignInAlt></FaSignInAlt> </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;