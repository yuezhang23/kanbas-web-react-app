import React from "react";
import {
    FaBook,
    FaCheckCircle, FaChevronDown,
    FaEllipsisV
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../Database";
import DropdownEdit from "./dropdownEdit";
import DropdownHW from "./dropdownHW";
import "../cssSRC/hw-index.css";
import "../cssSRC/module-index.css"

function Assignments() {
    const colorBlack = { color: "black", fontWeight: 'bold'};
    const { courseId } = useParams();
    const weights = [{label:"ASSIGNMENTS", weights:"40%"}, {label:"QUIZZES", weights:"10%"},
        {label:"PROJECTS", weights:"20%"},{label:"EXAMS", weights:"30%"},
    ]
    return (
        <div className="col mx-1 mt-2">
            <div className="row pb-2 border-bottom m-4">
                <input className="border w-25 form-control ps-2 rounded-1"
                       placeholder="Search for Assignment"/>
                <div className="col d-flex justify-content-end p-0">
                        <button className="btn btn-light rounded-1 me-2"> + Group</button>
                        <button className="btn btn-danger rounded-1"> + Assignment</button>
                        <div className="float-end ms-2">
                            <DropdownEdit/>
                        </div>
                    </div>
            </div>
            <div className='row ps-2'>
                <ul className="list-group rounded-0 wd-modules">
                    {assignments.map((assignment) => (
                        <li className="list-group-item p-0 mx-4" >
                            <div className='my-2 wd-fg-black'>
                                <FaEllipsisV className="me-2" />
                                <FaChevronDown className="me-2"/>
                                {assignment.name}
                                <span className="d-inline-flex float-end">
                                    <span className="float-start border rounded-4 px-1 me-2">
                                        {weights.filter((i)=> i.label === assignment.name).map((i)=>i.weights)}
                                        of Total
                                    </span>
                                    +
                                    <DropdownHW/>
                                </span>
                            </div>
                            <ul className="list-group rounded-0">
                                {assignment.catalog.filter((content) => (content.course) === courseId).map((cat) => (
                                <li className="list-group-item">
                                    <div className='d-flex flex-row'>
                                        <FaEllipsisV className='mt-1 me-3'/>
                                        <FaBook className="text-success mt-1 me-3"/>
                                        <div className='flex-grow-1'>
                                            <Link style={colorBlack}
                                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}:${cat._id}`}>{cat.title}<br/>
                                            </Link>
                                            <div className='small'>
                                                {cat.description}
                                            </div>
                                        </div>
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                        </span>
                                    </div>
                                </li>))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );}
export default Assignments;





